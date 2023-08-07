import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useInView } from 'react-hook-inview'

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
  const [ref: thisRef, inView: boxVisible] = useInView()

  const thisRef = useRef(null);
  const [boxVisible, setBoxVisible] = useState()
  console.log('BoxVisible', boxVisible)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setBoxVisible(entry.isIntersecting)
      console.log('entry', entry)
    })
    observer.observe(thisRef.current)
  }, [])
  const navigate = useNavigate()


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
            {/* <Blob
            w={'150%'}
            h={'150%'}
            position={'absolute'}
            top={'-20%'}
            left={0}
            zIndex={-1}
            color={useColorModeValue('red.50', 'red.400')}
          /> */}
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
                    "https://skywaynepal.com/static/media/unnamed.6cb5e6a65084a11ebc07.jpg"}
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
              Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top.
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
