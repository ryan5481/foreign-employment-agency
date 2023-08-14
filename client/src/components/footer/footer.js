import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'
import axios from 'axios'
import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Image,
    Center
} from '@chakra-ui/react'
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

const Footer = () => {
    const navigate = useNavigate()
    const [currentFooterData, setCurrentFooterData] = useState([])

    const GetFooterData = async () => {
        const res = await axios.get('http://localhost:8000/get-footer')
        if (res) {
            setCurrentFooterData(res.data.footerData)
           
        } else {
            alert("Failed to fech footer data")
        }
    }

    useEffect(() => {
        GetFooterData()
    }, [])

    return (
        <Box
            bg={useColorModeValue('blue.900', 'gray.1000')}
            color={useColorModeValue('gray.200', 'gray.200')}
            p={1}
        >
            <Container as={Stack} maxW={'7xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }}
                    spacing={2}>
                    <Stack spacing={6}>
                        <Box align="center">
                            <Image src="https://skywaynepal.com/static/media/logo2.ac770f9fccbae96efac0.jpg" w={60} />
                        </Box>
                        <Text fontSize={'sm'}>{currentFooterData.column1Line1}</Text>
                        <Text fontSize={'sm'}>{currentFooterData.column1Line2}</Text>
                        <Text fontSize={'sm'}>{currentFooterData.column1Line3}</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'Facebook'} navigate={() => currentFooterData.facebookLink}>
                                <FaFacebook />
                            </SocialButton>
                            <SocialButton label={'Messenger'} href={currentFooterData.messengerLink}>
                                <FaFacebookMessenger />
                            </SocialButton>
                            <SocialButton label={'Whatsapp'} href={currentFooterData.whatsappLink}>
                                <FaWhatsapp />
                            </SocialButton>
                            <SocialButton label={'Twitter'} href={currentFooterData.twitterLink}>
                                <FaTwitter />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={currentFooterData.youtubeLink}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={currentFooterData.instagramLink}>
                                <FaInstagram />
                            </SocialButton>
                        </Stack>
                    </Stack>
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
                            <Center>
                                <Text>{currentFooterData.fileDownloadText}</Text>
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
    )
}
export default Footer