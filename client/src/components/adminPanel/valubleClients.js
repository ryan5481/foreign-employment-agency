import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Box,
    Heading,
    Image,
    Text,
    Input,
    Button,
    useColorModeValue,
    Container,
    Textarea,
    FormControl
} from '@chakra-ui/react'


const ValuableClients = () => {
    const [previewImage, setPreviewImage] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

    const [image1, setImage1] = useState('')
    const [heading1, setHeading1] = useState('')
    const [text1, setText1] = useState('')
    const [description1, setDescription1] = useState('')

    const fetchData = async () => {
        try{
            const res = await axios.get("http://localhost:8000/get-valuableclients")
            if (res) {
                const data = res.data.data
                setImage1(`data:image/jpeg;base64,${data.valuableClientsImage1}`)
                setHeading1(data.heading1)
                setText1(data.text1)
                setDescription1(data.description1)
            }
        }catch(error){
            console.log(error)
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        
        setSelectedFile(event.target.files[0]);
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result); 
            };
            reader.readAsDataURL(file);
        }
    };
    

    useEffect(() => {
        fetchData()
    }, [])



    const handleSubmit = async (event) => {
        event.preventDefault();
          try {
            const formData = new FormData();
            if(selectedFile){
                formData.append('valuableClientsImage1', selectedFile);
            }
            formData.append('heading1', heading1);
            formData.append('text1', text1);
            formData.append('description1', description1);
    
            const res = await axios.post('http://localhost:8000/edit-homepage/valuableClients', formData);
            if (res) {
            //   window.location.reload();
            }
          } catch (error) {
            console.log('Error updating data:', error);
          }
      };



    return (
        <Box>

            <Container maxW={'100%'} p="12"
                maxH={'130vh'}
                bg={useColorModeValue('blue.600', 'gray.1000')}
                color='white'
                className="animated-div"
            >
                <form onSubmit={handleSubmit} >
                <Heading as="h1">Our Valuable Clients</Heading>
                <Box
                    marginTop={{ base: '1', sm: '5' }}
                    display="flex"

                    flexDirection={{ base: 'column', sm: 'row' }}
                    justifyContent="space-between">
                    <Box
                        display="flex"
                        flex="1"
                        marginRight="3"
                        position="relative"
                        alignItems="center">
                        <Box
                            width={{ base: '100%', sm: '85%' }}
                            zIndex="2"
                            marginLeft={{ base: '0', sm: '5%' }}
                            marginTop="5%">
                            <Box borderRadius="lg" overflow="hidden" maxH={"600px"}>
                                <Box textDecoration="none" _hover={{ '& img': { filter: 'brightness(0.6)' } }}>
                                    <Image
                                        borderRadius="lg"
                                        maxH={"500px"}
                                        src={previewImage || image1}
                                        alt="Click To Upload"
                                        onClick={() => document.getElementById('fileInput').click()} 
                                        objectFit="contain"
                                        width="100%"
                                        transition="0.3s ease-in-out"
                                    />
                                    <input
                                        type='file'
                                        id='fileInput'
                                        accept='image/*'
                                        onChange={handleFileChange}
                                        style={{ display: "none" }}
                                    />
                                    <Box position="absolute"
                                        top="50%"
                                        left="50%"
                                        transform="translate(-50%, -50%)"
                                        fontWeight={"bold"}
                                        fontSize="24px"
                                        textAlign="center"
                                        _hover={{ opacity: 1, brightness: 0.7 }}
                                    >Edit Image</Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box zIndex="1" width="100%" position="absolute" height="100%">
                            <Box
                                bgGradient={useColorModeValue(
                                    'radial(white 1px, transparent 1px)',
                                    'radial(white 1px, transparent 1px)',
                                )}
                                backgroundSize="20px 20px"
                                opacity="0.6"
                                height="100%"
                            />
                        </Box>
                    </Box>
                    <Box
                        display="flex"
                        flex="1"
                        flexDirection="column"
                        justifyContent="center"
                        marginTop={{ base: '3', sm: '0' }}>

                        <FormControl id='heading1' mt="1">
                            <Input fontWeight="bold" 
                            fontSize="24px" 
                            textAlign="center"
                            value={heading1} 
                            onChange={(e) => setHeading1(e.currentTarget.value)}
                            />
                        </FormControl>
                        <Input  fontSize="24px" 
                        textAlign="center" 
                        value={text1} 
                        textDecoration="none" 
                        _hover={{ textDecoration: 'none' }}
                        onChange={(e) => setText1(e.currentTarget.value)}

                        />
                        <FormControl
                        id='description1'
                        >
                        <Textarea
                            marginTop="2"
                            color={useColorModeValue('gray50', 'gray.200')}
                            fontSize="lg"
                            value={description1}
                            onChange={(e) => setDescription1(e.currentTarget.value)}
                        />
                        </FormControl>
                    </Box>
                </Box>
                <Button type="submit" mt={4} colorScheme="teal">
                    Update Data
                </Button>
                </form>
            </Container>

        </Box>
    )
}

export default ValuableClients