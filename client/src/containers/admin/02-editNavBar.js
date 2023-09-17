import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    Box,
    Text,
    Button,
    Center,
    HStack,
    Editable,
    EditableInput,
    EditablePreview,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useBreakpointValue,
    Image,
    useToast,
    IconButton,
    VStack,
    useColorModeValue
} from "@chakra-ui/react";
import { WarningIcon, SmallCloseIcon, CheckIcon } from "@chakra-ui/icons"
const baseUrl = process.env.REACT_APP_BASE_URL 

const EditNavbar = () => {
    const textColorModeValue = useColorModeValue('blue.600', 'white');
    const buttonColorModeValue = useColorModeValue('white', 'bule.600');
    const bgColorModeValue = useColorModeValue('white', 'blue.800');
    const buttonBgColorModeValue = useColorModeValue('blue.500', 'purple.700');
    const linkHoverColor = useColorModeValue('gray.200', 'white')


    const isMobileView = useBreakpointValue({ base: true, md: false });
    const toast = useToast()
    const [editedData, setEditedData] = useState([]);
    const [logoImageData, setLogoImageData] = useState({});
    //IMAGES
    const [selectedImage, setSelectedImage] = useState(null);
    const [displaySelectedImage, setDisplaySelectedImage] = useState(null);
    const imageInputRef = useRef()

    const fetchLogoImage = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-logo-image`)
            const data = res.data.data
            setLogoImageData(data)

        } catch (error) {
            console.error("Error: ", error)
        }
    }
    console.log(JSON.stringify(logoImageData._id))
    //PUT LOGO IMAGE
    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setDisplaySelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const HandleUpdateLogoImage = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            if (selectedImage) {
                formData.append('logoImage', selectedImage);
            }
            formData.append('id', logoImageData._id);

            const res = await axios.put(`${baseUrl}/admin/update-logo-image`, formData);
            if (res) {
                toast({
                    title: 'Success.',
                    description: 'Logo updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                fetchLogoImage()
            } else {
                toast({
                    title: 'Error.',
                    description: 'Failed to update data.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
            }
      
        } catch (error) {
            console.error("Error updating image: ", error)
            toast({
                title: 'Error.',
                description: "Could not connect to server.",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
        }
    };

    //GET NAVBAR
    const fecthNavBarItems = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-menu-items`);
            const data = res.data.data;
            setEditedData(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    useEffect(() => {
        fetchLogoImage()
        fecthNavBarItems();
    }, []);

    const handleInputChange = (index, field, value) => {
        // Update the editedData when input fields change
        const updatedData = [...editedData];
        updatedData[index][field] = value;
        setEditedData(updatedData);
    };
    const handlePutRequest = async () => {
        // Create a payload for PUT request
        if (editedData.some((item) => item.label.trim() === "")) {
            toast({
                title: 'Empty field.',
                description: 'Empty fields can not be submitted.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                colorScheme: "purple",
                icon: <Center><WarningIcon color="red.400" /></Center>
            });
            return;
        }
        const payload = editedData.map((item) => {
            const modifiedItem = {
                _id: item._id,
                label: item.label,
                children: item.children.map((child) => ({
                    _id: child._id,
                    label: child.label,
                })),
            };

            // Check if the item or its children have been modified
            const isItemModified =
                modifiedItem.label !== item.label ||
                modifiedItem.children.some((child, childIndex) => child.label !== item.children[childIndex].label);

            if (isItemModified) {
                return modifiedItem; // Include the modified item in the payload
            }

            return item; // Include the unmodified item in the payload
        });

        console.log(JSON.stringify(payload))

        try {
            const res = await axios.put(`${baseUrl}/admin/edit-menu-item`, payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (res) {
                toast({
                    title: 'Success.',
                    description: 'Data updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                fecthNavBarItems()
                fetchLogoImage()
            } else {
                toast({
                    title: 'Error.',
                    description: 'Failed to update data.',
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
            }
      
        } catch (error) {
            console.error("Error updating image: ", error)
            toast({
                title: 'Error.',
                description: "Could not connect to server.",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
        }
    };


    return (
        <Box bg={useColorModeValue('purple.300', 'purple.800')} h='100vh'>
            <Box pos={"relative"} top={"250px"}>
                {isMobileView ? (<Text fontSize="lg" textAlign="center" mt={4}>
                    Navbar is editable on desktop.
                </Text>) : (
                    <>
                        <HStack spacing={4} px={10} py={3} m={5} rounded={"10px"}
                            color={textColorModeValue}
                            bg={bgColorModeValue}

                        >
                            <Image
                                src={displaySelectedImage || `data:image/jpeg;base64,${logoImageData.logoImage}`}
                                alt="Logo"
                                h={"65px"}
                                textAlign='left'
                                fontFamily={'heading'}
                                _hover={{
                                    filter: "brightness(0.6)"
                                }}
                                onClick={() => imageInputRef.current.click()}
                            />
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                id="fileInput"
                                accept="image/*"
                                ref={imageInputRef}
                                onChange={handleImageSelect}
                            />
                            {selectedImage && (<VStack>
                                <Box
                                    w='25px'
                                    as={IconButton}
                                    size='xs'
                                    colorScheme='green'
                                    rounded="full"

                                    boxShadow="2xl"
                                    onClick={(event) =>
                                        HandleUpdateLogoImage(event)
                                    }
                                >
                                    <CheckIcon
                                        color='gray.50'
                                        w='25px'
                                    />
                                </Box>
                                <Box
                                    w='25px'
                                    as={IconButton}
                                    size='xs'
                                    colorScheme='red'
                                    rounded="full"

                                    boxShadow="2xl"
                                    onClick={() => {
                                        setSelectedImage(null)
                                        setDisplaySelectedImage(null)
                                    }}
                                >
                                    <SmallCloseIcon
                                        color='gray.50'
                                        w='30px'
                                    />
                                </Box>
                            </VStack>)}
                            <Box
                                p={2}
                                fontSize={'md'}
                                fontWeight={500}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                    bg: 'blue.400',
                                    rounded: '10px',
                                    shadow: 'md'
                                }}
                            >
                                <Text>Home</Text>
                            </Box>
                            {editedData.map((item, index) => (
                                <Box key={index} rounded={"10px"} >
                                    <Popover trigger={'click'} placement={'bottom-start'}>
                                        <PopoverTrigger>
                                            <Box
                                                p={2}
                                                fontSize={'md'}
                                                fontWeight={500}
                                                _hover={{
                                                    textDecoration: 'none',
                                                    color: linkHoverColor,
                                                    bg: 'blue.400',
                                                    rounded: '10px',
                                                    shadow: 'md'
                                                }}
                                            >
                                                <Editable placeholder={item.label} >
                                                    <EditablePreview />
                                                    <EditableInput
                                                        _placeholder={{
                                                            color: "gray.100",
                                                        }}
                                                        w="auto"
                                                        value={item.label}
                                                        onChange={(e) => handleInputChange(index, "label", e.target.value)}
                                                    />
                                                </Editable>
                                            </Box>
                                        </PopoverTrigger>

                                        {item.children.length !== 0 && (
                                            <PopoverContent color={textColorModeValue} rounded="10px"  >

                                                {item.children.map((child, childIndex) => (
                                                    <Box
                                                        key={childIndex}
                                                        p={2}
                                                        px={5}
                                                        textAlign='left'
                                                        fontSize="md"
                                                        fontWeight={500}
                                                        color={textColorModeValue}
                                                        _hover={{
                                                            textDecoration: 'none',
                                                            color: linkHoverColor,
                                                            bg: 'blue.400',
                                                            rounded: '10px',
                                                            shadow: 'md'
                                                        }}
                                                    >
                                                        <Editable placeholder={child.label}>
                                                            <EditablePreview />
                                                            <EditableInput
                                                                color={textColorModeValue}
                                                                _placeholder={{
                                                                    color: "gray.100",
                                                                }}
                                                                _hover={{ color: "purple.800", cursor: "pointer" }}
                                                                value={child.label}
                                                                onChange={(e) => {
                                                                    // Handle child label editing using e.target.value
                                                                    const newChildLabel = e.target.value;
                                                                    handleInputChange(index, "children", [
                                                                        ...item.children.slice(0, childIndex),
                                                                        { label: newChildLabel },
                                                                        ...item.children.slice(childIndex + 1),
                                                                    ]);
                                                                }}
                                                            />
                                                        </Editable>
                                                    </Box>
                                                ))}
                                            </PopoverContent>
                                        )}

                                    </Popover>
                                </Box>
                            ))}
                        </HStack>
                        <Button
                            mt={"200px"}
                            _hover={{
                                textDecoration: 'none',
                                color: 'blue.600',
                                bg: 'white',
                                rounded: '5px',
                                shadow: 'md'
                            }}
                            bg={buttonBgColorModeValue}
                            color={buttonColorModeValue}
                            onClick={handlePutRequest}>
                            Submit
                        </Button>
                    </>
                )}
            </Box>
        </Box>
    );
};

export default EditNavbar;


