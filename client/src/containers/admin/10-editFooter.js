
import React, { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import {
    Box,
    Button,
    chakra,
    Container,
    SimpleGrid,
    Heading,
    Stack,
    HStack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image,
    Center,
    Editable,
    EditableInput,
    EditablePreview,
    useToast, 
    Tooltip
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { BsWhatsapp, BsMessenger } from 'react-icons/bs'
import { MdFacebook } from 'react-icons/md'
const baseUrl = process.env.REACT_APP_BASE_URL 

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode,
    label: string,
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}



const EditFooter = () => {
    const uploadPdfRef = useRef(null); 
    const textColorModeValue = useColorModeValue('white', 'purple.100');
    const navigate = useNavigate()
    const toast = useToast()
    const [currentFooterData, setCurrentFooterData] = useState([])
    const [selectedPdfFile, setSelectedPdfFile] = useState(null)
    const [logoImageData, setLogoImageData] = useState([])
    const [formData, setFormData] = useState({
        column1Line1: "",
        column1Line2: "",
        column1Line3: "",
        facebookLink: "",
        messengerLink: "",
        whatsappLink: "",
        twitterLink: "",
        youtubeLink: "",
        instagramLink: "",
        fileDownloadText: ""
    });

    const handleInputChange = (event) => {
        // console.log(event); // Log the event to see if it's capturing changes
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`${baseUrl}/edit-footer`, {
                column1Line1: formData.column1Line1,
                column1Line2: formData.column1Line2,
                column1Line3: formData.column1Line3,
                facebookLink: formData.facebookLink,
                messengerLink: formData.messengerLink,
                whatsappLink: formData.whatsappLink,
                messengerLink: formData.messengerLink,
                twitterLink: formData.twitterLink,
                instagramLink: formData.instagramLink,
                fileDownloadText: formData.fileDownloadText
            })
            if(response.status === 200){
                toast({
                    title: 'Success.',
                    description: 'Data updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                GetFooterData()
                } else{
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
            console.error('Error:', error.response);
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

    const fetchLogoImage = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-logo-image`)
            const data = res.data.data
            setLogoImageData(data)

        } catch (error) {
            console.error("Error: ", error)
        }
    }

    const GetFooterData = async () => {
        const res = await axios.get(`${baseUrl}/get-footer`)
        if (res) {
            setCurrentFooterData(res.data.footerData)
            setFormData({
                column1Line1: res.data.footerData.column1Line1,
                column1Line2: res.data.footerData.column1Line2,
                column1Line3: res.data.footerData.column1Line3,
                facebookLink: res.data.footerData.facebookLink,
                messengerLink: res.data.footerData.messengerLink,
                whatsappLink: res.data.footerData.whatsappLink,
                twitterLink: res.data.footerData.twitterLink,
                youtubeLink: res.data.footerData.youtubeLink,
                instagramLink: res.data.footerData.instagramLink,
                fileDownloadText: res.data.footerData.fileDownloadText,
            });

        } else {
            alert("Failed to fech footer data")
        }
    }

    //PUT PDF
    const handlePdfSelect = (event) => {
        setSelectedPdfFile(event.target.files[0]);
    }

    const handleUploadBrochure = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            if (selectedPdfFile) {
                formData.append('brochurePdfFile', selectedPdfFile);
            }
            formData.append('id', "64f8174bd3ffc9b5b018ee79");

            const response = await axios.put(`${baseUrl}/admin/update-brochure-file`, formData);
            if (response) {
                setSelectedPdfFile(null)
                window.location.reload()
            }
        } catch (error) {
            console.error('Error updating logo:', error);
        }
    };

    useEffect(() => {
        fetchLogoImage()
        GetFooterData()
    }, [])

    return (
        <Box
            bg={useColorModeValue('purple.300', 'purple.800')}
            h={'93vh'}
            top={'10vh'}
        >
            <Heading color={useColorModeValue('white', 'purple.100')} pt={5}> Edit Footer </Heading>
            { currentFooterData && currentFooterData.updatedAt &&<Text color={textColorModeValue} fontStyle="italic" pb={3} > Last Updated on {currentFooterData.updatedAt.slice(0, 10)} </Text>}
            <form onSubmit={handleSubmit}>
                <Box
                    bg={useColorModeValue('blue.900', 'gray.1000')}
                    color={useColorModeValue('gray.200', 'gray.200')}
                    py={3}
                >

                    <Container as={Stack} maxW={'7xl'} py={2} h={"100%"}>
                        <SimpleGrid
                            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
                            spacing={2}>
                            {currentFooterData && (
                                <Stack spacing={6}>
                                    <Box align="center">
                                    <Image
                                src={ `data:image/jpeg;base64,${logoImageData.logoImage}`}
                                alt="Logo"
                                h={"65px"}
                                textAlign='left'
                                fontFamily={'heading'}
                            />
                                    </Box>
                                    <Editable id="column1Line1" textAlign='left' marginx={2} bg={'purple.700'} placeholder={currentFooterData.column1Line1}  fontSize={'sm'} rounded={'5px'}>
                                        <EditablePreview  px={3} />
                                        <EditableInput  type="text"  px={3} name="column1Line1" onChange={handleInputChange} />
                                    </Editable>
                                    <Editable id="column1Line2" textAlign='left' marginx={2} bg={'purple.700'} placeholder={currentFooterData.column1Line2} fontSize={'sm'} rounded={'5px'}>
                                        <EditablePreview  px={3} />
                                        <EditableInput type="text"  px={3} name="column1Line2" onChange={handleInputChange} />
                                    </Editable>
                                    <Editable id="column1Line3" textAlign='left' marginx={2} bg={'purple.700'} placeholder={currentFooterData.column1Line3} fontSize={'sm'}  rounded={'5px'}>
                                        <EditablePreview  px={3} />
                                        <EditableInput type="text"  px={3}  name="column1Line3" onChange={handleInputChange} />
                                    </Editable>
                                    {/* FACEBOOK */}
                                    <Stack direction={'horizontal'} spacing={6} alignSelf="center" >
                                    <IconButton
                                color={'white'}
                                aria-label="whatsapp"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<BsWhatsapp size="28px" />}

                            />
                            <IconButton
                                color={'white'}
                                aria-label="facebook"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<MdFacebook size="28px" />}

                            />

                            <IconButton
                                color={'white'}
                                aria-label="messanger"
                                variant="ghost"
                                size="lg"
                                isRound={true}
                                _hover={{ bg: '#0D74FF' }}
                                icon={<BsMessenger size="28px" />}
                            />
                            </Stack>
                                </Stack>
                            )}
                            <Stack align={'flex-start'}>
                                <ListHeader>Company</ListHeader>
                                <Box as="a" href={'about'}>
                                    About us
                                </Box>
                                <Box as="a" href={'#'}>
                                    Blog
                                </Box>
                                <Box as="a" href={'contact'}>
                                    Contact us
                                </Box>
                                <Box as="a" href={'#'}>
                                    Pricing
                                </Box>
                                <Box as="a" href={'testimonials'}>
                                    Testimonials
                                </Box>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Support</ListHeader>
                                <Box as="a" href={'#'}>
                                    Help Center
                                </Box>
                                <Box as="a" href={'#'}>
                                    Terms of Service
                                </Box>
                                <Box as="a" href={'license'}>
                                    Legal
                                </Box>
                                <Box as="a" href={'#'}>
                                    Privacy Policy
                                </Box>
                                <Box as="a" href={'#'}>
                                    Satus
                                </Box>
                            </Stack>
                            <Stack align={'flex-start'}>
                                <ListHeader>Stay up to date</ListHeader>
                                <Stack direction={'row'}>
                                    <IconButton
                                        bg={useColorModeValue('blue.700', 'blue.400')}
                                        color={useColorModeValue('white', 'gray.800')}
                                        _hover={{ bg: '#0D74FF' }}
                                        aria-label="Subscribe"
                                        icon={<BiMailSend />}
                                    />
                                    <Input
                                        placeholder={'Email'}
                                        w={150}
                                        bg={useColorModeValue('blue.700', 'whiteAlpha.100')}
                                        border={0}
                                        _focus={{
                                            bg: 'whiteAlpha.300',
                                        }}
                                    />
                                </Stack>
                                <Stack direction={'row'} >
                                <Tooltip  label="Click to upload Brochure PDF file." placement="top">
                                    <IconButton
                                        colorScheme='purple'
                                        color={useColorModeValue('white', 'gray.800')}
                                        _hover={{ bg: '#0D74FF' }}
                                        aria-label="Subscribe"
                                        icon={<FaFilePdf />}
                                        onClick={() => uploadPdfRef.current.click()}
                                    />
                                    </Tooltip>
                                    
                                    <input
                                        type='file'
                                        accept="pdf/*"
                                        style={{ display: "none" }}
                                        ref={uploadPdfRef}
                                        onChange={handlePdfSelect}
                                    />
                                    
                                    {/* FILE DOWNLOAD */}
                                    <Center>
                                        <Stack direction={'row'} spacing={6}>
                                            {currentFooterData && (
                                                <Editable id="fileDownloadText" marginx={2} bg={'purple.700'} placeholder={currentFooterData.fileDownloadText} fontSize={'sm'}  rounded={'5px'}>
                                                    <EditablePreview px={3} />
                                                    <EditableInput type="text" px={3} name="fileDownloadText" onChange={handleInputChange} />
                                                </Editable>
                                            )}
                                        </Stack>
                                    </Center>
                                    
                                </Stack>
                                {selectedPdfFile && <Button colorScheme='purple' onClick={handleUploadBrochure}>Upload selected PDF</Button>}
                            </Stack>
                            <Stack overflow='hidden' borderRadius={10} h={260} w={200} align={'center'} alignItems={'center'}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1023.6851100697893!2d85.33048799804155!3d!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b0522ead%3A0x392af32fe87dd0ea!2sRadiant%20Infotech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1690782916035!5m2!1sen!2snp"
                                    width="200"
                                    height="260"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </Stack>
                        </SimpleGrid>
                    </Container>
                </Box>
                <HStack spacing={6} direction={['column', 'row']} p={2} justify="center">
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
    )
}
export default EditFooter