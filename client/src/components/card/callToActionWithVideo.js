import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-hook-inview'
import axios from 'axios'

import {
  Container,
  Stack,
  Grid,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  Center,
  ScaleFade
} from '@chakra-ui/react'
const baseUrl = process.env.REACT_APP_BASE_URL

export default function CallToActionWithVideo() {
  const [currentAboutUsData, setCurrentAboutUsData] = useState([])
  const navigate = useNavigate()

  const GetAboutUsData = async () => {
    const res = await axios.get(`${baseUrl}/get-aboutuspage`)
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
  
}, [])

  return (
    <Container maxW={'full'} bg={useColorModeValue('blue.500', 'gray.1000')} 
    color='white'>
        <Grid
          align={'center'}
          gap={5}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={{ base: 10, md: 20 }}
          templateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr' }}
        >
            <Box
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              // position={'relative'}
              height="100%"
              rounded={'2xl'}
              >
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  rounded={'2xl'}
                boxShadow={'2xl'}
                  src={
                    `data:image/jpeg;base64,${currentAboutUsData.aboutUsImage}`}
                    // _hover={{
                    //   transform: 'scale(1.05)',
                  // }}
                  // transition="0.4s ease-in-out"
                />
            </Box>
          <Box 
           spacing={{ base: 5, md: 10 }} align="center" >
            <Heading
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"

              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
              <Text as={'span'}  >
                About Us
              </Text>
            </Heading>
            <Text 
            my={5} 
            fontSize="18px" 
            data-aos="fade-left"
            data-aos-duration="1000"
            >
           {currentAboutUsData.text1?.split(/\s+/).slice(0, 100).join(' ') + " ..."}
            </Text>

            <Button
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-once="true"

              rounded={'full'}
              size={'lg'}
              fontWeight={'bold'}
              px={6}
              w={"200px"}
              placeItems="center"
              colorScheme="white"
              color={useColorModeValue('blue.500', 'gray.900')}
              onClick={() => navigate("/about")}
              bg={'whiteAlpha.800'}
            >
              Read More
            </Button>
          </Box>
        </Grid>
      
    </Container>
  )
}
