
import { Image, Stack, Input, Box, Grid, Button, Heading, AspectRatio, Text, FormControl, IconButton, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter } from '@chakra-ui/react';
import { SmallCloseIcon } from "@chakra-ui/icons"
import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"

const EditCarousel = (props) => {
    const [carouselImageData, setCarouselImageData] = useState([])

    const [sectorsData, setSectorsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedimageId, setSelectedimageId] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [imageTitles, setImageTitles] = useState('');

    const [imageTitle, setImageTitle] = useState('');

    const carouselImageInputRef = useRef();
    const newImageUploadInputRef = useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [imageToDelete, setImageToDelete] = useState(null);
    const cancelRef = useRef()

    // FETCH DATA FROM THE BACKEND FOR DISPLAY

    const fetchCarouselImages = async () => {

        try {
            const res = await axios.get("http://localhost:8000/get-carousel-images")
            if (res) {
                const newData = await res.data.data
                setCarouselImageData(newData)
                const initialImageTitles = newData.map(images => images.imageTitle || '')
                setImageTitles(initialImageTitles)

            } else {
                console.log("Failed to fetch images")
            }
        } catch (error) {
            console.log(error)
        }
    }

    console.log(carouselImageData)

    // ADD A NEW TITLE 
    const handleUploadNewImage = async () => {
        if (selectedImageFile && imageTitle) {
            const formData = new FormData();
            formData.append('carouselImage', selectedImageFile);
            formData.append('imageTitle', imageTitle);

            try {
                await axios.post("http://localhost:8000/edit-homepage/add-topcarousel-image", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                fetchCarouselImages();
                setSelectedImageFile(null);
                setImageTitle('');
            } catch (error) {
                console.error('Error adding sector:', error);
            }
        }
    }

    const handleImageDelete = async () => {
        if (imageToDelete) {
            try {
                const res = await axios.delete(`http://localhost:8000/edit-homepage/delete-topcarousel-image/${imageToDelete}`)
                if (res) {
                    fetchCarouselImages();
                    onClose();
                    console.log("Item deleted.")
                }
            } catch (error) {
                console.error("Error deleting the item: ", error)
            }
        }
    }

    //UPDATE JOB SECTOR TITLE
    const handleTitleSubmit = async (imageId, index) => {
        if (!imageId) {
            console.error("No imageId provided.")
            return
        }
        const updatedTitle = imageTitles[index]
        try {
            await axios.put('http://localhost:8000/edit-homepage/update-topcarousel-image', {
                _id: imageId,
                imageTitle: updatedTitle

            });
            fetchCarouselImages();
        } catch (error) {
            console.error('Error updating title:', error);
        }
    }

    const handleNewImageSelect = (event) => {
        setSelectedImageFile(event.target.files[0])

    }

    const handleImageReplace = async (imageId) => {
        if (selectedImageFile) {
            const formData = new FormData()
            formData.append("carouselImage", selectedImageFile)
            formData.append("_id", imageId)

            try {
                await axios.put("http://localhost:8000/edit-homepage/update-topcarousel-image", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                fetchCarouselImages();
                setSelectedImageFile(null);
                setSelectedimageId(null);
            } catch (error) {

                console.error("Error updating image: ", error)
            }
        }
    }

    useEffect(() => {
        fetchCarouselImages();
    }, [])


    return (
        <>
            <Heading m={2} fontSize={'4xl'} fontFamily={'body'} pt={5}
                color="gray.100"
            >
                Top Carousel Images
            </Heading>
            <Text fontSize={'xl'} textAlign='center'>
                Maximum of {carouselImageData.length} images allowed
            </Text>

            <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>

                {carouselImageData.map((imageData, index) => {
                    return (<>

                        <Box
                            key={imageData._id}
                            role={'group'}
                            p={2}
                            maxW={'330px'}
                            maxH="310"
                            w={'full'}
                            minH={{ base: "400", sm: "340", md: "320", lg: "340" }}
                            boxShadow={'2xl'}
                            pos={'relative'}
                            zIndex={1}
                            _hover={{ boxShadow: "0 0 0 2px rgba(251, 251, 251, 0.5)" }}
                            transition="box-shadow 0.3s"
                            rounded="10px">
                            <Box
                                rounded={'lg'}
                                pos={'relative'}
                                height={'230px'}
                                _after={{
                                    transition: 'all .1s ease',
                                    content: '""',
                                    w: 'full',
                                    h: '120px',
                                    pos: 'absolute',
                                    top: 5,
                                    left: 0,
                                    filter: 'blur(13px)',
                                    zIndex: -1,
                                }}
                                _groupHover={{
                                    _after: {
                                        filter: 'blur(20px)',
                                    },
                                }}>
                                <Box
                                    as={IconButton}
                                    size='sm'
                                    colorScheme='red'
                                    rounded="full"
                                    top='20px'
                                    left='50%'
                                    zIndex='10'
                                    boxShadow="2xl"
                                    onClick={() => {
                                        setImageToDelete(imageData._id)
                                        onOpen()
                                    }}
                                >
                                    <SmallCloseIcon
                                        color='gray.50'
                                        w='30px'
                                    />
                                </Box>
                                <AspectRatio>
                                    <Image
                                        src={`data:image/jpeg;base64,${imageData.carouselImage}`}
                                        alt={imageData.imageTitle}
                                        borderRadius='lg'
                                        h={120}
                                        objectFit="contain"
                                        width="100%"
                                        transition="0.15s ease-in-out"
                                        _hover={{
                                            brightness: '0.8',
                                        }}
                                        onClick={() => carouselImageInputRef.current.click()}
                                    />
                                </AspectRatio>

                                <input
                                    type='file'
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    ref={carouselImageInputRef}
                                    onChange={handleNewImageSelect}
                                />
                                <Button
                                    mt="2"
                                    onClick={() => handleImageReplace(imageData._id)}
                                >Update Image</Button>
                                <form
                                    onSubmit={handleTitleSubmit}
                                >
                                    <FormControl mt='7' spacing='3' id='sectorTitle'>
                                        <Input
                                            size='sm'
                                            rounded="10px"
                                            color='gray.100'
                                            fontWeight="bold"
                                            fontSize="16px"
                                            textAlign="center"
                                            value={imageTitles[index]}
                                            onChange={(e) => {
                                                const updatedTitles = [...imageTitles]
                                                updatedTitles[index] = e.target.value
                                                setImageTitles(updatedTitles)
                                            }}
                                        ></Input>
                                    </FormControl>
                                    <Stack alignItems="center">
                                        <Button
                                            mt="2"
                                            maxW="150"
                                            type='submit'
                                            onClick={() => handleTitleSubmit(imageData._id, index)}
                                        >Update Title</Button>
                                    </Stack>
                                </form>
                            </Box>
                        </Box>

                    </>)
                })}
                {carouselImageData.length <= 5 ?

                    (<Box
                        boxShadow={'2xl'}
                        _hover={{ boxShadow: "0 0 0 2px rgba(251, 251, 251, 0.5)" }}
                        transition="box-shadow 0.4s"
                        rounded="10px"
                        role={'group'}
                        p={2}
                        maxW={'330px'}
                        w={'full'}
                        minH="300"
                        pos={'relative'}
                        zIndex={1}>
                        <AspectRatio>
                            <Image
                                mt="8"
                                src={'https://image.pngaaa.com/768/791768-middle.png'}
                                alt='Add Image'
                                rounded='10px'
                                h={120}
                                objectFit="contain"
                                width="100%"
                                transition="0.15s ease-in-out"
                                _hover={{
                                    brightness: '0.8',
                                }}
                                onClick={() => newImageUploadInputRef.current.click()}
                            />
                        </AspectRatio>
                        <input
                            type='file'
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={newImageUploadInputRef}
                            onChange={handleNewImageSelect}
                        />

                        <FormControl mt='7' id='imageTitle'>
                            <Text fontWeight="bold" pt="5" pb={2} >Add new image</Text>

                            <Input
                                size='sm'
                                mt="7"
                                rounded="10px"
                                color='gray.100'
                                fontWeight="bold"
                                fontSize="16px"
                                placeholder="Type new title"
                                _placeholder={{ color: "gray.200", fontWeight: "normal", fontSize: "sm" }}
                                textAlign="center"
                                value={imageTitle}
                                onChange={(e) => setImageTitle(e.target.value)}
                            ></Input>

                            <Button
                                mt="2"
                                onClick={handleUploadNewImage}

                            >Add Sector</Button>
                        </FormControl>
                    </Box>) : (null)}

            </Grid>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay >
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Image
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                ref={cancelRef} onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme='red'
                                onClick={handleImageDelete} ml={3}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default EditCarousel