import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-hook-inview'
import axios from 'axios'


import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Center,
  ScaleFade
} from '@chakra-ui/react'

export default function CallToActionWithVideo() {
  const [currentAboutUsData, setCurrentAboutUsData] = useState([])
  const navigate = useNavigate()
  const [ref: thisRef, inView: boxVisible] = useInView()
  const thisRef = useRef(null);
  const [boxVisible, setBoxVisible] = useState()

  const GetAboutUsData = async () => {
    const res = await axios.get('http://localhost:8000/get-aboutuspage')
    if (res.data && res.data.headerData) {
        setCurrentAboutUsData(res.data.headerData)
    } else {
        alert("Failed to fetch header data")
    }
}


const Get50Words = async(inputText) => {
  const words = await inputText.split(/\s+/);
  const first50Words = words.slice(0, 50);
  const result = first50Words.join(' ');
  return result;
}

useEffect(() => {
  GetAboutUsData()
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    setBoxVisible(entry.isIntersecting)
    console.log('entry', entry)
  })
  observer.observe(thisRef.current)
}, [])

  return (

    <Container maxW={'full'} bg={useColorModeValue('blue.500', 'gray.1000')} 
    color='white'>
      <ScaleFade initialScale={0.8} in={boxVisible} >

        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={{ base: 10, md: 20 }}
          direction={{ base: 'column', md: 'row' }}
          
        >
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            <Box
              position={'relative'}
              height={'400px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
              h={{ sm: '200', lg: '400px' }}
              >
          
              <Center>
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={
                    `data:image/jpeg;base64,${currentAboutUsData.aboutUsImage}`}
                    _hover={{
                      transform: 'scale(1.05)',
                  }}
                  transition="0.4s ease-in-out"
                  ref={thisRef}
                />            </Center>
            </Box>
          </Flex>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} align="center" >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >

              <Text as={'span'}  >
                About Us
              </Text>
            </Heading>
            <Text  >
           {currentAboutUsData.text1?.split(/\s+/).slice(0, 100).join(' ') + " ..."}
            </Text>

            <Button
              rounded={'full'}
              size={'lg'}
              fontWeight={'bold'}
              px={6}
              w={"200px"}
              placeItems="center"
              bg={'blue.400'}
              color={useColorModeValue('blue.500', 'gray.900')}
              _hover={{ bg: 'whiteAlpha.900', color:'blue.600' }}
              onClick={() => navigate("/about")}
              bg={'whiteAlpha.800'}
            >
              Read More
            </Button>
          </Stack>
          
        </Stack>
      </ScaleFade>
    </Container>
  )
}
