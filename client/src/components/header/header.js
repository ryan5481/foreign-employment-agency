
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import env from "react-dotenv"
import {
  Box,
  Center,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'
import { ReactNode } from 'react'
const baseUrl = process.env.REACT_APP_BASE_URL


const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
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

const Header = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [data, setData] = useState([])


  const GetHeaderData = async() => {
    // const res = await axios.get(`${baseUrl}/get-contact`)
       const res = await axios.get(`${baseUrl}/get-contact`)

    if(res){
      // console.log("DATAAAA:" + data)
      setData(res.data.data)
    }else{
      alert("Failed to fech header data")
    }
  } 

  useEffect(() => {
    GetHeaderData()
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint value if needed
    };

    // Initial check on mount
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function openMessengerChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const appId = 'your-app-id';
    const messengerUrl = `https://m.me/${data.oneTapMessengerLink}`;
    window.open(messengerUrl, 'Messenger Chat', 'width=600,height=400');
  }

  function openFaceBookPage(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const appId = 'your-app-id';
    const facebookUrl = `https://facebook.com/${data.facebookId}`;
    window.open(facebookUrl, 'Facebook Page', 'width=600,height=400');
  }

  function openWhatsappChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const appId = 'your-app-id';
    const whatsappPhoneNumber = `https://wa.me/${data.whatsappId}`;
    window.open(whatsappPhoneNumber, 'Whatsapp Chat', 'width=600,height=400');
  }

  if (isMobileView) {
    return null; // Render nothing if in mobile view
  }
  return (
  <>
    <Box 
      bg={'gray.900'}
      color='gray.50'
      h={50}
      w="full"
      fontSize={{ sm: 'xxs', md: 'sm' }}
    >
      <Container
        as={Stack}
        maxW={'full'}
        maxH={50}
        py={2}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <Text>{data.regdField}</Text>
          <Text>{data.licenseField}</Text>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <Center>
          <a href={`mailto:${data.email}`}>{data.email}</a>
          </Center>
          <Center>
          <a href={`tel:${data.phoneNumber1}`}>{data.phoneNumber1}</a>
          </Center>
          <SocialButton label={data.whatsappId} href={'#'} >
            <FaWhatsapp onClick={() => openWhatsappChat(data.facebookId)} />
          </SocialButton>
          <SocialButton label={data.facebookId} href={'#'}  >
            <FaFacebook onClick={() => openFaceBookPage(data.facebookId)} />
          </SocialButton>
          <SocialButton label={data.oneTapMessengerLink} href={'#'} >
            <FaFacebookMessenger onClick={() => openMessengerChat(data.messengerId)} />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  </>
  )
}

export default Header