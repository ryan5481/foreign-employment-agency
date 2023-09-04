import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import {
    Box,
    useColorModeValue,
    Stack,
    HStack,
    Center,
    Heading,
    Editable,
    EditableInput,
    EditablePreview,
    Button,
    Text, useToast
} from "@chakra-ui/react"
import { WarningIcon } from "@chakra-ui/icons"
import {FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'

const EditHeader = () => {
    const toast= useToast()
    const navigate = useNavigate()
    const [currentHeaderData, setCurrentHeaderData] = useState([])
    const [formData, setFormData] = useState({
        regdField: "",
        licenseField: "",
        email: "",
        phoneNumber1: "",
        whatsappId: "",
        facebookId: "",
        oneTapMessengerLink: "",
    });

    const handleInputChange = (event) => {
        // console.log(event); // Log the event to see if it's capturing changes
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.some((item) => item.Key.trim() === "")) {
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
        try {
            const response = await axios.put("http://localhost:8000/admin/edit-contact", {
                regdField: formData.regdField,
                licenseField: formData.licenseField,
                email: formData.email,
                phoneNumber1: formData.phoneNumber1,
                whatsappId: formData.whatsappId,
                facebookId: formData.facebookId,
                oneTapMessengerLink: formData.oneTapMessengerLink,
            })
            if (response) {
                GetHeaderData()

            }

        } catch (error) {
            console.error('Error:', error.response);
        }
    };

    const GetHeaderData = async () => { 
        const res = await axios.get('http://localhost:8000/get-contact')
        if (res) {
            setCurrentHeaderData(res.data.data)
            setFormData({
                regdField: currentHeaderData.regdField,
                licenseField: currentHeaderData.licenseField,
                email: currentHeaderData.email,
                phoneNumber1: currentHeaderData.phoneNumber1,
                whatsappId: currentHeaderData.whatsappId,
                facebookId: currentHeaderData.facebookId,
                oneTapMessengerLink: currentHeaderData.oneTapMessengerLink,
            });
            
        } else {
            alert("Failed to fetch header data")
        }
    }

    useEffect(() => {
        GetHeaderData()
    }, [])

    return (<>
        <Box
            h={'92.5vh'}
            p={2}
            bg={useColorModeValue('purple.500', 'purple.800')}
            color={'purple.100'}
            justifyContent={'center'}
            top={'10vh'}
        >
            <form onSubmit={handleSubmit}>
                <Heading color={useColorModeValue('white', 'purple.100')} p={10}> Edit Header </Heading>
                <Text fontStyle="italic" color={useColorModeValue('white', 'purple.100')} p={10}> Last Updated on {currentHeaderData.updatedAt} </Text>
                <Stack
                    bg='gray.900'
                    as={Stack}
                    maxW={'full'}
                    maxH={500}
                    p={2}
                    direction={{ base: 'column', md: 'row', sm: 'row' }}
                    spacing={{ base: 4, md: 6, lg: 8 }}
                    justify={{ base: 'center', md: 'space-between', sm: 'flex-start' }}
                    align={{ base: 'center', md: 'center', sm: 'flex-start' }}
                    color={'purple.100'}
                >
                        {currentHeaderData && (
                    <Stack direction={'row'} spacing={6}>
                        {/* REGD NO */}
                            <Editable id="regdField" placeholder={currentHeaderData.regdField} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput type="text" name="regdField" onChange={handleInputChange} />
                            </Editable>
                            
                    // LIC NO
                   
                        <Editable id="licenseField" placeholder={currentHeaderData.licenseField} bg={'purple.500'} px={1} rounded={'10px'}>
                            <EditablePreview />
                            <EditableInput type="text" name="licenseField" onChange={handleInputChange} />
                        </Editable>
                    </Stack>
                        )}


                    {currentHeaderData && (
                    <Stack direction={'row'} spacing={6}>
                        <Center>
                            {/* EMAIL */}
                            <Editable id="email" placeholder={currentHeaderData.email} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="email" name="email" onChange={handleInputChange} />
                            </Editable>
                        </Center>
                        <Center>
                            {/* PHONE NUMBER */}
                            <Editable id="phoneNumber1" placeholder={currentHeaderData.phoneNumber1} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="phoneNumber1" onChange={handleInputChange} />
                            </Editable>
                        </Center>
                    </Stack>
                    )}
                    {currentHeaderData && (
                    <Stack direction={{ base: 'column', md: 'row', sm: 'row' }}>
                        <Stack align={'center'} justify={'center'}>
                            {/* WHATSAPP */}
                            <FaWhatsapp />
                            <Editable id="whatsappId" placeholder={currentHeaderData.whatsappId} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="whawhatsappIdtsapp" onChange={handleInputChange} />
                            </Editable>
                        </Stack>
                        <Stack align={'center'} justify={'center'}>
                            {/* FACEBOOK */}
                            <FaFacebook />
                            <Editable id="facebookId" placeholder={currentHeaderData.facebookId} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="facebookId" onChange={handleInputChange} />
                            </Editable>
                        </Stack>
                        <Stack align={'center'} justify={'center'}>
                            {/* MESSENGER */}
                            <FaFacebookMessenger />
                            <Editable id="oneTapMessengerLink" placeholder={currentHeaderData.oneTapMessengerLink} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="oneTapMessengerLink" onChange={handleInputChange} />
                            </Editable>
                        </Stack>
                    </Stack>
                    )}


                </Stack>
                <HStack spacing={6} direction={['column', 'row']} pt={5} justify="center">
                    <Button

                        bg={'red.400'}
                        color={'white'}
                        w="300px"
                        _hover={{
                            bg: 'red.500',
                        }}
                        onClick={() => navigate("/adminpanel")}
                    >
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="300px"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        type='submit'>
                        Save Changes
                    </Button>
                </HStack>
            </form>
        </Box>

    </>)
}

export default EditHeader