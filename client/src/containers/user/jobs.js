import React, { useEffect, useState } from 'react'
import axios from "axios"

import { Box, Button, Heading, useColorModeValue, Grid, Image, Stack, Badge, Divider, ButtonGroup, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"

import Pagination from '../../components/pagination'
import HeroWithBg from '../../components/card/heroWithBg'
import CategoryCard from '../../components/card/categoryCard'


const Jobs = () => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()


    const fetchJobsList = async () => {
        try {
            const res = await axios.get('http://localhost:8000/jobslist');
            setData(res.data.jobsList);
            console.log(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchJobsList();
    }, [])

    return (
        <Box
            bg={useColorModeValue('teal.50', 'gray.800')}
            color={useColorModeValue('blue.500', 'gray.800')}
        >
            <HeroWithBg />
            <div>
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'} pt={5}>
                    Latest Jobs
                </Heading>
                <Button variant='solid' colorScheme='blue' rounded='full' onClick={fetchJobsList}>Refresh</Button>
                <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr', '2xl': '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                    <>{data ? ( data.map((job, index) => {
                            return (<>

                                <Card maxW='sm' >
                                    <CardBody w='100%' h='10' bg='' >
                                        <Image
                                            src={job.src}
                                            alt={job.alt}
                                            borderRadius='lg'
                                        />
                                        <Box display='flex' alignItems='baseline' p="2">
                                            <Badge borderRadius='full' colorScheme='teal'>
                                                New
                                            </Badge>
                                        </Box>
                                        <Stack mt='1' spacing='3'>
                                            <Heading size='md'>{job.alt}</Heading>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter alignContent={'middle'} align="center">
                                        <ButtonGroup spacing='3' >
                                            <Button variant='ghost' colorScheme='blue' rounded='full' onClick={() => navigate("/job-description")}>
                                                Details
                                            </Button>
                                            <Button variant='solid' colorScheme='blue' rounded='full' onClick={() => navigate("/resume")}>
                                                Apply now
                                            </Button>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </>)
                        })) : <p>Loading ...</p>}
                       

                    </>
                </Grid>


            </div>
        </Box>
    )
}

export default Jobs

