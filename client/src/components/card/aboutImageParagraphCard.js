import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import
{ Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
const baseUrl = process.env.REACT_APP_BASE_URL 

export default function AboutImageParagraphCard() {
  const [data, setData] = useState([])

  const fetchAboutNepalData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get-about-nepal`);
      const data = res.data.data;
      setData(data)
      // setHeroImage(`data:image/jpeg;base64,${data.heroImage}`)
  
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchAboutNepalData();
  }, []);
  return (
    <Container maxW={'7xl'} color={useColorModeValue('blue.700', 'gray.400')}>
     
        <Stack spacing={{ base: 6, md: 10 }}>
        <Image
            rounded={'md'}
            alt={'product image'}
            src={`data:image/jpeg;base64,${data.heroImage}`}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {data.title1}
            </Heading>
            <Text
              color={useColorModeValue('gray.400', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              {data.tagline}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('blue.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                  {data.shortDescription}
              </Text>
              <Text fontSize={'lg'}>
              {data.paragraph}              
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {data.title2}
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key1}
                  </Text>{' '}
                  {data.value1}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key2}
                  </Text>{' '}
                  {data.value2}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key3}
                  </Text>{' '}
                  {data.value3}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key4}
                  </Text>{' '}
                  {data.value4}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key5}
                  </Text>{' '}
                  {data.value5}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key6}
                  </Text>{' '}
                  {data.value6}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key7}
                  </Text>{' '}
                  {data.value7}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                  {data.key8}
                  </Text>{' '}
                  {data.value8}
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {data.title3}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={10}>
                <List spacing={2}>
                  <ListItem>{data.point1}</ListItem>
                  <ListItem>{data.point3}</ListItem>{' '}
                  <ListItem>{data.point5}</ListItem>
                  <ListItem>{data.point7}</ListItem>
                </List>
                <List spacing={2}>
                <ListItem>{data.point2}</ListItem>
                <ListItem>{data.point4}</ListItem>
                <ListItem>{data.point6}</ListItem>
                <ListItem>{data.point8}</ListItem>

                </List>
              </SimpleGrid>
            </Box>
          </Stack>

        </Stack>
    </Container>
  )
}