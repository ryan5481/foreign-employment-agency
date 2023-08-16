import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Box,
    Grid,
    Image,
    Card,
    CardBody,
    Stack,
    AspectRatio,
    useColorModeValue,
    Text, Heading,
    Button,
    Editable,
    EditableInput,
    EditablePreview,
} from "@chakra-ui/react";

const EditHomePage = () => {
    const [currentCarouselImages, setCurrentCarouselImages] = useState([]);
    const [carouselTitles, setCarouselTitles] = useState([]);
    const [selectedCarouselImage, setSelectedCarouselImage] = useState(null);
    const [selectedCarouselImageIndex, setSelectedCarouselImageIndex] = useState(-1);
    const [editedCarouselImageTitle, setEditedCarouselImageTitle] = useState("");


    // CAROUSEL IMAGES //
    const FetchCarouselImages = async () => {
        try {
            const res = await axios.get("http://localhost:8000/get-carousel-images");
            if (res) {
                const imagesBinData = await res.data.data.carouselImages;
                const imageTitles = await res.data.data.imageTitles;
                setCurrentCarouselImages(imagesBinData);
                setCarouselTitles(imageTitles);
            } else {
                console.log("Failed to fetch images");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleCarouselImageUpload = async () => {
        if (selectedCarouselImage && selectedCarouselImageIndex !== -1) {
            const formData = new FormData();
            formData.append("carouselImages", selectedCarouselImage);
    
            try {
                const res = await axios.post(
                    "http://localhost:8000/edit-homepage/topcarousel", // Replace with your backend's URL
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
    
                if (res) {
                    // Update only the selected image in the currentCarouselImages array
                    const updatedCarouselImages = [...currentCarouselImages];
                    updatedCarouselImages[selectedCarouselImageIndex] = res.data.data.carouselImages; // Use the actual response data
    
                    // Refresh carousel images with updated array
                    setCurrentCarouselImages(updatedCarouselImages);
    
                    // Reset selected image and index
                    setSelectedCarouselImage(null);
                    setSelectedCarouselImageIndex(-1);
                    window.location.reload()
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleCarouselImageClick = (index) => {
        setSelectedCarouselImageIndex(index);
    };

    const handleTitleEdit = (index, newTitle) => {
        const updatedTitles = [...carouselTitles];
        updatedTitles[index] = newTitle;
        setCarouselTitles(updatedTitles);
    };

    const carouselImageUrls = currentCarouselImages.map(
        (imageString) => `data:image/jpeg;base64,${imageString}`
    );

        // ABOUT US //



    useEffect(() => {
        FetchCarouselImages();
    }, []);

    return (
        <Box
            h={"100%"}
            p={2}
            bg={useColorModeValue("purple.500", "purple.800")}
            color={"purple.100"}
            justifyContent={"center"}
            top={"10vh"}
        >
        {/* CAROUSEL */}
            <Box>
                <Grid
                    templateColumns={{
                        sm: "1fr 1fr",
                        md: "1fr 1fr",
                        lg: "1fr 1fr 1fr 1fr 1fr",
                        xl: "1fr 1fr 1fr 1fr 1fr",
                        "2xl": "1fr 1fr 1fr 1fr 1fr",
                    }}
                    p={10}
                    gap={3}
                >
                    {carouselImageUrls.map((url, index) => {
                        return (
                            <Card key={`image-card-${url}-${index}`} rounded={"10px"} maxW="xs" p={0}>
                                <CardBody w="100%" h="10" bg="">
                                    <AspectRatio ratio={2.1}>
                                        <Image
                                            src={url}
                                            h={100}
                                            cursor="pointer"
                                            onClick={() => handleCarouselImageClick(index)}
                                        />
                                    </AspectRatio>
                                    <Box display="flex" alignItems="baseline" p="2">
                                        {selectedCarouselImageIndex === index && (
                                            <>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => setSelectedCarouselImage(e.target.files[0])}
                                                />
                                                <Button onClick={handleCarouselImageUpload}>Upload</Button>
                                            </>
                                        )}
                                    </Box>
                                    <Stack mt="1" spacing="3">
                                        <Editable
                                            id={`editable-title-${index}`}
                                            value={carouselTitles[index]}
                                            onChange={(newTitle) =>
                                                handleTitleEdit(index, newTitle)
                                            }
                                            bg={"purple.300"}
                                            px={1}
                                            rounded={"5px"}
                                            fontWeight={"bold"}
                                            fontSize={"26"}
                                        >
                                            <EditablePreview />
                                            <EditableInput
                                                px={2}
                                                rounded={"10px"}
                                                type="text"
                                                name={`title-${index}`}
                                            />
                                        </Editable>
                                    </Stack>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Grid>
            </Box>
        {/* ABOUT US */}
        <Box  >
            <Grid
            templateColumns={{
                            sm: "1fr",
                            md: "1fr 1fr",
                            lg: "1fr 1fr",
                            xl: "1fr 1fr",
                        }}
                        p={10}
                        gap={3}
                    >
                        <Image src="https://skywaynepal.com/static/media/unnamed.6cb5e6a65084a11ebc07.jpg"></Image>
                        <Box>
                        <Editable id="whatsapp" placeholder="Heading" bg={'purple.500'} px={1} rounded={'10px'} fontSize={"3xl"} fontWeight={"bold"} >
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="whatsapp"  />
                            </Editable>
                            <Editable id="whatsapp" placeholder="Description" bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="whatsapp" h={"200px"}  />
                            </Editable>
                        </Box>
            </Grid>
        </Box>
        </Box>
    );
};

export default EditHomePage;
