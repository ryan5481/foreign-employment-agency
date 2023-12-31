import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
const baseUrl = process.env.REACT_APP_BASE_URL 

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      minH="150"
      minW="350"
      px={2}
      py={5}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string,
  name: string,
  title: string,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} color={useColorModeValue('white', 'gray.400')}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.200', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

////////////MAIN FUNCTION /////////////////

const TestimonialCard = () => {
  //FETCH
  const [testimonyData, setTestimonyData] = useState([])

  const fetchTestimonies = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get-testimonies`);
      const newData = await res.data.data
      setTestimonyData(newData)
      // console.log(testimonyData)
      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };


  useEffect(() => {
    fetchTestimonies();
  }, [])

  return (
    <Box bg={useColorModeValue('blue.600', 'gray.700')}
    >
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} color='white'>
          <Heading>What Our Clients Say</Heading>
          <Text>We have been finding overseas jobs for clients from all over Nepal</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'column', lg:"column", xl:"row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          color={useColorModeValue('blue.700', 'gray.1000')}
        >
          {testimonyData.map((testimony, id) => (
            <Testimonial  >
              <Box
                _hover={{
                  transform: 'scale(1.1)',
                  transition: '0.2s ease-in-out',
                }}
              >
                <TestimonialContent
                >
                  <TestimonialHeading>{testimony.imageTitle}</TestimonialHeading>
                  <TestimonialText>
                    {testimony.description}
                  </TestimonialText>
                </TestimonialContent>
              </Box>
              <TestimonialAvatar
                src={
                  `data:image/jpeg;base64,${testimony.testimonyImage}`
                }
                name={testimony.name}
                title={testimony.address}
              />
            </Testimonial>
          ))}
        </Stack>

      </Container>
    </Box>
  )
}

export default TestimonialCard