
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'
import { ReactNode } from 'react'
import EmailLink from '../utils/emailLink';

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
    const res = await axios.get('http://localhost:8000/get-header')
    if(res){
      // console.log("DATAAAA:" + data)
      setData(res.data.headerData)
    }else{
      alert("Failed to fech header data")
    }
  } 

  useEffect(() => {
    const handleResize = () => {
      GetHeaderData()
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
          <Text>{data.field1}</Text>
          <Text>{data.field2}</Text>
        </Stack>
        <Stack direction={'row'} spacing={6}>
          <Center>
          <Text >{data.email}</Text>
          </Center>
          <Center>
            <Text>{data.phoneNumber}</Text>
          </Center>
          <SocialButton label={data.whatsapp} href={'#'}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={data.facebook} href={'#'}>
            <FaFacebook />
          </SocialButton>
          <SocialButton label={'data.messanger'} href={'#'}>
            <FaFacebookMessenger />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  </>
  )
}

export default Header