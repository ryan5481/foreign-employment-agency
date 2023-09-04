import React, { useState, useEffect, useRef } from "react";
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
    useToast
} from "@chakra-ui/react";
import { WarningIcon } from "@chakra-ui/icons"
import axios from "axios";
import { useFetcher } from "react-router-dom";

const EditNavbar = () => {
    const isMobileView = useBreakpointValue({ base: true, md: false });
    const toast = useToast()
    const [editedData, setEditedData] = useState([]);


    const fecthNavBarItems = async () => {
        try {
            const res = await axios.get("http://localhost:8000/get-menu-items");
            const data = res.data.data;
            setEditedData(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    useEffect(() => {
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
            const res = await axios.put("http://localhost:8000/admin/edit-menu-item", payload, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            window.location.reload()
            console.log("PUT request successful", res);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    return (
        <Box>
            <Box pos={"relative"} top={"250px"}>
                {isMobileView ? (<Text fontSize="lg" textAlign="center" mt={4}>
                    Navbar is editable on desktop.
                </Text>) : (
                    <>
                    <HStack spacing={4} px={10} py={3} m={5} rounded={"10px"} bg="purple.700">
                    <Image
                        src="https://skywaynepal.com/static/media/logo2.ac770f9fccbae96efac0.jpg"
                        w={200}
                        textAlign='left'
                        fontFamily={'heading'}
                    />
                    {editedData.map((item, index) => (
                        <Box key={index} rounded={"10px"} >
                            <Popover trigger={'hover'} placement={'bottom-start'}>
                                <PopoverTrigger>
                                    <Box
                                        p={2}
                                        fontSize={'md'}
                                        fontWeight={500}
                                        color='gray.100'
                                        _hover={{
                                            textDecoration: 'none',
                                            color: 'purple.900',
                                            bg: 'purple.400',
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
                                    <PopoverContent>
                                        <Box rounded="10px" bg="purple.700" >
                                            {item.children.map((child, childIndex) => (
                                                <Box
                                                    key={childIndex}
                                                    
                                                    p={2}
                                                    fontSize="md"
                                                    fontWeight="normal"
                                                    color="gray.100"
                                                    _hover={{
                                                        textDecoration: "none",
                                                        color: "purple.900",
                                                        bg: "purple.400",
                                                        shadow: "md",
                                                    }}
                                                >
                                                    <Editable placeholder={child.label}>
                                                        <EditablePreview />
                                                        <EditableInput
                                                        _placeholder={{
                                                    color: "gray.100",
                                                }}
                                                            _hover={{ color: "purple.800", cursor: "pointer" }}
                                                            value={child.label}
                                                            onClick={() => {
                                                                // Handle child label editing
                                                                const newChildLabel = prompt("Edit child label:", child.label);
                                                                if (newChildLabel !== null) {
                                                                    handleInputChange(index, "children", [
                                                                        ...item.children.slice(0, childIndex),
                                                                        { label: newChildLabel },
                                                                        ...item.children.slice(childIndex + 1),
                                                                    ]);
                                                                }
                                                            }}
                                                        />
                                                    </Editable>
                                                </Box>
                                            ))}
                                        </Box>
                                    </PopoverContent>
                                )}

                            </Popover>
                        </Box>
                    ))}
                </HStack>
                <Button colorScheme="purple" onClick={handlePutRequest}>
                    Submit
                </Button>
                </>
                )}
            </Box>
        </Box>
    );
};

export default EditNavbar;



