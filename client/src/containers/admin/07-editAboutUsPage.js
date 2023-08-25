import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {
    Box,
    Heading,
    Image,
    Text,
    Editable,
    EditableInput,
    EditablePreview,
    HStack,
    Button,
    Wrap,
    WrapItem,
    SpaceProps,
    Grid,
    Container,
    VStack,
    useColorModeValue,
    Textarea,
    Divider
} from '@chakra-ui/react'
const EditAboutUsPage = () => {
    const navigate = useNavigate()
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewImage, setPreviewImage] = useState(null);
    const [currentAboutUsData, setCurrentAboutUsData] = useState([])

    const GetAboutUsData = async () => {
        const res = await axios.get('http://localhost:8000/get-aboutuspage')
        if (res.data && res.data.headerData) {
            setCurrentAboutUsData(res.data.headerData)
            setFormData({
                heading1: res.data.headerData.heading1,
                text1: res.data.headerData.text1,
                heading2: res.data.headerData.heading2,
                text2: res.data.headerData.text2,
                heading3: res.data.headerData.heading3,
                text3: res.data.headerData.text3,
                heading4: res.data.headerData.heading4,
                text4: res.data.headerData.text4,

            });

        } else {
            alert("Failed to fetch header data")
        }
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setSelectedFile(event.target.files[0])
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleUpload = async () => {
        if (selectedFile) {
            // console.log( "SELECTED FILE:" + selectedFile)

            const imageFormData = new FormData()
            imageFormData.append('aboutUsImage', selectedFile)

            try {
                const res = await axios.put('http://localhost:8000/edit-aboutusimage', imageFormData)
                if (res) {
                    window.location.reload();
                } else {
                    alert("Image uploaded.")
                }
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }

    const [formData, setFormData] = useState({
        heading1: "",
        text1: "",
        heading2: "",
        text2: "",
        heading3: "",
        text3: "",
        heading4: "",
        text4: "",
    });

    // console.log(formData)

    const handleInputChange = async (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.put("http://localhost:8000/edit-aboutuspage",
                {
                    heading1: formData.heading1,
                    text1: formData.text1,
                    heading2: formData.heading2,
                    text2: formData.text2,
                    heading3: formData.heading3,
                    text3: formData.text3,
                    heading4: formData.heading4,
                    text4: formData.text4,
                }
            )
            GetAboutUsData()
        } catch (error) {
            console.error('Error:', error.response);
        }
    }

    

    useEffect(() => {
        GetAboutUsData()
    }, [])


    return (<>
        <Container maxW={'6xl'} p="12" borderRadius='lg'>
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between"
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                shadow={'xl'}
                rounded={'5'}
            >
            </Box>
            <form onSubmit={handleSubmit}>
                <Heading color={useColorModeValue('blue.400', 'purple.100')}> Edit About </Heading>
                <Text color={useColorModeValue('blue.400', 'purple.100')}> Last Updated on {currentAboutUsData.updatedAt} </Text>
                <Divider p={3} />
                <Box
                p={5}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Box
                        position="relative"
                        cursor="pointer"
                        p={1}
                        _hover={{
                            '& img': {
                              filter: 'brightness(0.6)',
                            },
                          }}
                    >
                        <img
                            src={previewImage || `data:image/jpeg;base64,${currentAboutUsData.aboutUsImage}`}
                            alt="Click to Upload"
                            onClick={() => document.getElementById('fileInput').click()}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '200px',
                            }}
                        /><input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                        <Box
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            textAlign="center"
                            color="white"
                            fontSize="24px"
                            fontWeight="bold"
                            opacity={0}
                            transition="opacity 0.3s ease"
                            _hover={{
                                opacity: 1,
                                brightness: 0.7
                            }}
                        >
                            Edit Image
                        </Box>
                    </Box>
                    
                    {selectedFile && <Button p={5} py={1} color={'white'} bg={'blue.500'} onClick={handleUpload}>Upload Image</Button>}
                    
                </Box>
                <Heading pt={3} as="h2" fontSize="4xl"
                    color={useColorModeValue('blue.500', 'white')}
                    margin={"1px"}

                >
                    {currentAboutUsData && (
                        <Editable id="heading1" placeholder={currentAboutUsData.heading1} rounded={'10px'} bg='gray.100'>
                            <EditablePreview />
                            <EditableInput px={2} rounded={'10px'} type="text" name="heading1" onChange={handleInputChange} />
                        </Editable>
                    )}
                </Heading>
                <VStack paddingTop="40px" spacing="2" textAlign="left" color={useColorModeValue('blue.700', 'whiteAlpha.100')} >
                    <Box maxW={{ sm: '100%', lg: '100%' }} p={10}
                        gap={10}
                        bg={useColorModeValue('blue.500', 'whiteAlpha.100')}
                        color={'white'}
                        w={'100%'}
                        borderWidth="1px"
                        rounded="10px"
                        shadow="lg"
                        position="relative">
                        {currentAboutUsData && (

                            <Textarea
                                color="white"
                                placeholder={currentAboutUsData.text1}
                                name='text1'
                                size="md"
                                _placeholder={{ color: 'white' }}
                                onChange={handleInputChange}
                            />
                        )}
                    </Box>
                </VStack>
                <Box h={10}></Box>
                <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }}
                    p={10}
                    gap={10}
                    bg={useColorModeValue('blue.500', 'whiteAlpha.100')}
                    color={'white'}
                    w={'100%'}
                    borderWidth="1px"
                    rounded="10px"
                    shadow="lg"
                    position="relative"
                >
                    <Wrap spacing="30px" marginTop="5" p={5} shadow={'xl'} rounded={'5px'}>
                        {currentAboutUsData && (
                            <Box w="100%" h="100%" >
                                <Heading as="h2" fontSize="3xl"
                                    color='white'
                                >
                                    <Editable id="heading2" placeholder={currentAboutUsData.heading2} rounded={'10px'}>
                                        <EditablePreview />
                                        <EditableInput px={2} rounded={'10px'} type="text" name="heading2" onChange={handleInputChange} />
                                    </Editable>
                                </Heading>
                                <Textarea
                                    h={"full"}
                                    color="white"
                                    placeholder={currentAboutUsData.text2}
                                    name='text2'
                                    size="md"
                                    _placeholder={{ color: 'white' }}
                                    onChange={handleInputChange}
                                />
                            </Box>
                        )}
                    </Wrap>
                    <Wrap spacing="30px" marginTop="5" shadow={'xl'} p={5} rounded={'5'}>
                        {currentAboutUsData && (
                            <Box w="100%" h="100%" >
                                <Heading>
                                    <Editable id="heading3" placeholder={currentAboutUsData.heading3} as="h2" fontSize="3xl" rounded={'10px'}>
                                        <EditablePreview />
                                        <EditableInput px={2} rounded={'10px'} type="text" name="heading3" onChange={handleInputChange} />
                                    </Editable>
                                </Heading>
                                <Textarea
                                    h={"full"}
                                    color="white"
                                    placeholder={currentAboutUsData.text3}
                                    name='text3'
                                    size="md"
                                    _placeholder={{ color: 'white' }}
                                    onChange={handleInputChange}
                                />
                            </Box>
                        )}
                        {currentAboutUsData && (
                            <Box w="100%" h="100%">
                                <Heading>
                                    <Editable id="heading4" placeholder={currentAboutUsData.heading4} as="h2" fontSize="3xl" rounded={'10px'}>
                                        <EditablePreview />
                                        <EditableInput px={2} rounded={'10px'} type="text" name="heading4" onChange={handleInputChange} />
                                    </Editable>
                                </Heading>
                                <Textarea
                                    h={"full"}
                                    color="white"
                                    placeholder={currentAboutUsData.text4}
                                    name='text4'
                                    size="md"
                                    _placeholder={{ color: 'white' }}
                                    onChange={handleInputChange}
                                />
                            </Box>
                        )}
                    </Wrap>
                </Grid>
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
        </Container>
    </>)
}

export default EditAboutUsPage