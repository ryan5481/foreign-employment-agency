import React, { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import {
    Box,
    Heading,
    Image,
    Text,
    Flex,
    useColorModeValue,
    Container
} from '@chakra-ui/react'
import ScrollDiv from '../animation/scrollDiv'
const baseUrl = process.env.REACT_APP_BASE_URL 

const BlogArticleCard = () => {
    const[image1, setImage1] = useState()
    const[heading1, setHeading1] = useState()
    const[text1, setText1] = useState()
    const[description1, setDescription1] = useState()

    const fetchData = async () => {
        const res = await axios.get(`${baseUrl}/get-valuableclients`)
        if (res) {
            const data = res.data.data
            setImage1(`data:image/jpeg;base64,${data.valuableClientsImage1}`) 
            setHeading1(data.heading1)
            setText1(data.text1)
            setDescription1(data.description1)

        }
    }

    useEffect(() => {
        fetchData()
    })
    return (
        <Box>

            <Container maxW={'100%'} p="12"
                maxH={'130vh'}
                bg={useColorModeValue('blue.600', 'gray.1000')}
                color='white'
                className="animated-div"
            >
                <ScrollDiv>
                    <Heading as="h1">Our Valuable Clients</Heading>
                    <Box
                        marginTop={{ base: '1', sm: '5' }}
                        display="flex"

                        flexDirection={{ base: 'column', sm: 'row' }}
                        justifyContent="space-between">
                        <Box
                            display="flex"
                            flex="1"
                            marginRight="3"
                            position="relative"
                            alignItems="center">
                            <Box
                                width={{ base: '100%', sm: '85%' }}
                                zIndex="2"
                                marginLeft={{ base: '0', sm: '5%' }}
                                marginTop="5%">
                                <Box borderRadius="lg" overflow="hidden" maxH={"600px"}>
                                    <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                        <Image
                                            borderRadius="lg"
                                            maxH={"500px"}
                                            src={image1}
                                            alt="Overseas Co-operation Certificate"
                                            objectFit="contain"
                                            width="100%"
                                            transition="0.3s ease-in-out"
                                            _hover={{
                                                transform: 'scale(1.05)',
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                            <Box zIndex="1" width="100%" position="absolute" height="100%">
                                <Box
                                    bgGradient={useColorModeValue(
                                        'radial(white 1px, transparent 1px)',
                                        'radial(white 1px, transparent 1px)',
                                    )}
                                    backgroundSize="20px 20px"
                                    opacity="0.6"
                                    height="100%"
                                />
                            </Box>
                        </Box>
                        <Box
                            display="flex"
                            flex="1"
                            flexDirection="column"
                            justifyContent="center"
                            marginTop={{ base: '3', sm: '0' }}>

                            <Heading marginTop="1">
                                <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                    {heading1}
                                </Text>
                            </Heading>
                            <Text
                                color={useColorModeValue('gray.200', 'gray.400')}
                                fontSize={'2xl'}
                                fontWeight={'300'}>
                                {text1}
                            </Text>
                            <Text
                                as="p"
                                marginTop="2"
                                color={useColorModeValue('gray50', 'gray.200')}
                                fontSize="lg">
                                    {description1}
                            </Text>
                        </Box>
                    </Box>
                </ScrollDiv>
            </Container>
        </Box>
    )
}

export default BlogArticleCard