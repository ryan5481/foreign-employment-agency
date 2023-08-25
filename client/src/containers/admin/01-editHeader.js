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
    Text
} from "@chakra-ui/react"
import {FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'

const EditHeader = () => {
    const navigate = useNavigate()
    const [currentHeaderData, setCurrentHeaderData] = useState([])
    const [formData, setFormData] = useState({
        field1: "",
        field2: "",
        email: "",
        phoneNumber: "",
        whatsapp: "",
        facebook: "",
        messenger: "",
        whatsapp: ""
    });

    const handleInputChange = (event) => {
        // console.log(event); // Log the event to see if it's capturing changes
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put("http://localhost:8000/edit-header", {
                field1: formData.field1,
                field2: formData.field2,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                whatsapp: formData.whatsapp,
                facebook: formData.facebook,
                messenger: formData.messenger,
                whatsapp: formData.whatsapp
            })
            if (response) {
                window.location.reload();
            }

        } catch (error) {
            console.error('Error:', error.response);
        }
    };

    const GetHeaderData = async () => { 
        const res = await axios.get('http://localhost:8000/get-header')
        if (res) {
            setCurrentHeaderData(res.data.headerData)
            setFormData({
                field1: res.data.headerData.field1,
                field2: res.data.headerData.field2,
                email: res.data.headerData.email,
                phoneNumber: res.data.headerData.phoneNumber,
                whatsapp: res.data.headerData.whatsapp,
                facebook: res.data.headerData.facebook,
                messenger: res.data.headerData.messenger,
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
                <Text color={useColorModeValue('white', 'purple.100')} p={10}> Last Updated on {currentHeaderData.updatedAt} </Text>
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
                            <Editable id="field1" placeholder={currentHeaderData.field1} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput type="text" name="field1" onChange={handleInputChange} />
                            </Editable>
                            
                    // LIC NO
                   
                        <Editable id="field1" placeholder={currentHeaderData.field2} bg={'purple.500'} px={1} rounded={'10px'}>
                            <EditablePreview />
                            <EditableInput type="text" name="field2" onChange={handleInputChange} />
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
                            <Editable id="phoneNumber" placeholder={currentHeaderData.phoneNumber} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="phoneNumber" onChange={handleInputChange} />
                            </Editable>
                        </Center>
                    </Stack>
                    )}
                    {currentHeaderData && (
                    <Stack direction={{ base: 'column', md: 'row', sm: 'row' }}>
                        <Stack align={'center'} justify={'center'}>
                            {/* WHATSAPP */}
                            <FaWhatsapp />
                            <Editable id="whatsapp" placeholder={currentHeaderData.whatsapp} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="whatsapp" onChange={handleInputChange} />
                            </Editable>
                        </Stack>
                        <Stack align={'center'} justify={'center'}>
                            {/* FACEBOOK */}
                            <FaFacebook />
                            <Editable id="facebook" placeholder={currentHeaderData.facebook} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="facebook" onChange={handleInputChange} />
                            </Editable>
                        </Stack>
                        <Stack align={'center'} justify={'center'}>
                            {/* MESSENGER */}
                            <FaFacebookMessenger />
                            <Editable id="messenger" placeholder={currentHeaderData.messenger} bg={'purple.500'} px={1} rounded={'10px'}>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="messenger" onChange={handleInputChange} />
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