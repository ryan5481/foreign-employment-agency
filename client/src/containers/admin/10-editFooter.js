
import React, { useState } from 'react'
import { useEffect } from 'react'
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
    EditablePreview
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebook, FaFacebookMessenger, FaWhatsapp, FaFilePdf } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'


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
    const navigate = useNavigate()
    const [currentFooterData, setCurrentFooterData] = useState([])
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
            const response = await axios.put("http://localhost:8000/edit-footer", {
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
            if (response) {
                window.location.reload();
            }

        } catch (error) {
            console.error('Error:', error.response);
        }
    };

    const GetFooterData = async () => {
        const res = await axios.get('http://localhost:8000/get-footer')
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

    useEffect(() => {
        GetFooterData()
    }, [])

    return (
        <Box
            bg={useColorModeValue('purple.500', 'purple.800')}
            h={'92.5vh'}
            top={'10vh'}
        >
            <Heading color={useColorModeValue('white', 'purple.100')} pt={5}> Edit Header </Heading>
            <Text color={useColorModeValue('white', 'purple.100')} pb={3} > Last Updated on {currentFooterData.updatedAt} </Text>
            <form onSubmit={handleSubmit}>
            <Box
                bg={useColorModeValue('blue.900', 'gray.1000')}
                color={useColorModeValue('gray.200', 'gray.200')}
            >

                <Container as={Stack} maxW={'7xl'} py={2} h={"100%"}>
                    <SimpleGrid
                        templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
                        spacing={2}>
                        {currentFooterData && (
                            <Stack spacing={6}>
                                <Box align="center">
                                    <Image src="https://skywaynepal.com/static/media/logo2.ac770f9fccbae96efac0.jpg" w={60} />
                                </Box>
                                <Editable id="column1Line1"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.column1Line1} fontSize={'sm'} px={1} rounded={'10px'}>
                                    <EditablePreview />
                                    <EditableInput type="text" name="column1Line1" onChange={handleInputChange} />
                                </Editable>
                                <Editable id="column1Line2"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.column1Line2} fontSize={'sm'} px={1} rounded={'10px'}>
                                    <EditablePreview />
                                    <EditableInput type="text" name="column1Line2" onChange={handleInputChange}/>
                                </Editable>
                                <Editable id="column1Line3"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.column1Line3} fontSize={'sm'} px={1} rounded={'10px'}>
                                    <EditablePreview />
                                    <EditableInput type="text" name="column1Line3" onChange={handleInputChange}/>
                                </Editable>
                                {/* FACEBOOK */}
                                <Stack direction={'column'} spacing={6}>
                                    <Stack direction={'row'} spacing={6}>
                                        <SocialButton label={'Facebook'} href={'#'}>
                                            <FaFacebook />
                                        </SocialButton>
                                        <Editable id="facebookLink"  marginx={2} bg={'purple.700'} placeholder={currentFooterData.facebookLink} fontSize={'sm'} px={1} rounded={'10px'}>
                                            <EditablePreview />
                                            <EditableInput type="text" name="facebookLink" onChange={handleInputChange} />
                                        </Editable>
                                    </Stack>
                                    {/* MESSENGER */}
                                    <Stack direction={'row'} spacing={6}>
                                        <SocialButton label={'messengerLink'} href={'#'}>
                                            <FaFacebookMessenger />
                                        </SocialButton>
                                        <Editable id="messengerLink"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.messengerLink} fontSize={'sm'} px={1} rounded={'10px'}>
                                            <EditablePreview />
                                            <EditableInput type="text" name="messengerLink" onChange={handleInputChange}/>
                                        </Editable>
                                    </Stack>
                                    {/* WHATSAPP */}
                                    <Stack direction={'row'} spacing={6}>
                                        <SocialButton label={'whatsappLink'} href={'#'}>
                                            <FaWhatsapp />
                                        </SocialButton>
                                        <Editable id="whatsappLink"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.whatsappLink} fontSize={'sm'} px={1} rounded={'10px'}>
                                            <EditablePreview />
                                            <EditableInput type="text" name="whatsappLink" onChange={handleInputChange}/>
                                        </Editable>
                                    </Stack>

                                    {/* TWITTER */}
                                    <Stack direction={'row'} spacing={6}>
                                        <SocialButton label={'twitterLink'} href={'#'}>
                                            <FaTwitter />
                                        </SocialButton>
                                        <Editable id="twitterLink"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.twitterLink} fontSize={'sm'} px={1} rounded={'10px'}>
                                            <EditablePreview />
                                            <EditableInput type="text" name="twitterLink" onChange={handleInputChange}/>
                                        </Editable>
                                    </Stack>

                                    {/* YOUTUBE */}
                                    <Stack direction={'row'} spacing={6}>
                                        <SocialButton label={'youtubeLink'} href={'#'}>
                                            <FaYoutube />
                                        </SocialButton>
                                        <Editable id="youtubeLink"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.youtubeLink} fontSize={'sm'} px={1} rounded={'10px'}>
                                            <EditablePreview />
                                            <EditableInput type="text" name="youtubeLink" onChange={handleInputChange}/>
                                        </Editable>
                                    </Stack>

                                    {/* YOUTUBE */}
                                    <Stack direction={'row'} spacing={6}>
                                        <SocialButton label={'instagramLink'} href={'#'}>
                                            <FaInstagram />
                                        </SocialButton>
                                        <Editable id="instagramLink"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.instagramLink} fontSize={'sm'} px={1} rounded={'10px'}>
                                            <EditablePreview />
                                            <EditableInput type="text" name="instagramLink" onChange={handleInputChange}/>
                                        </Editable>
                                    </Stack>
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
                                    _hover={{
                                        bg: 'blue.600',
                                    }}
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
                                <IconButton
                                    bg={useColorModeValue('blue.700', 'blue.400')}
                                    color={useColorModeValue('white', 'gray.800')}
                                    _hover={{
                                        bg: 'blue.600',
                                    }}
                                    aria-label="Subscribe"
                                    icon={<FaFilePdf />}
                                    onClick={() => navigate("/brochure")}
                                />
                                {/* FILE DOWNLOAD */}
                                <Center>
                                    <Stack direction={'row'} spacing={6}>
                                        {currentFooterData && (
                                            <Editable id="fileDownloadText"   marginx={2} bg={'purple.700'}  placeholder={currentFooterData.fileDownloadText} fontSize={'sm'} px={1} rounded={'10px'}>
                                                <EditablePreview />
                                                <EditableInput type="text" name="fileDownloadText" onChange={handleInputChange}/>
                                            </Editable>
                                        )}
                                    </Stack>
                                </Center>
                            </Stack>
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