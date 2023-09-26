import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom';
import {
    Box, Button, Heading, useColorModeValue, Grid, Image, Stack, Badge, Divider, ButtonGroup, Card, useDisclosure, Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, CardBody, CardFooter, AspectRatio, Flex, Center,
    StackDivider, Text, VStack, List, ListItem, SimpleGrid, Spinner
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



const AllJobs = ({ displayAll }) => {
    const location = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalJobData, setModalJobData] = useState({})
    const [reqQualifications, setReqQualifications] = useState([])
    const [reqSkills, setReqSkills] = useState([])
    const [reqResponsiblities, setReqResponsiblities] = useState([])
    const [data, setData] = useState([])
    const navigate = useNavigate()
    const baseUrl = process.env.REACT_APP_BASE_URL


    const selectedCategory = location.state?.selectedCategory;

    const fetchJobsList = async () => {
        try {

            if (selectedCategory) {
                const res = await axios.get(`${baseUrl}/jobslist?category=${selectedCategory}`);
                let newData = res.data.jobsList
                setData(newData.reverse());


            } else {
                const res = await axios.get(`${baseUrl}/jobslist`);
                let newData = res.data.jobsList
                setData(newData.reverse());
            }


        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleApplyNowClick = (jobId) => {
        navigate(`/resume?jobId=${jobId}`);
    };

    useEffect(() => {
        fetchJobsList();
    }, [])


    const itemsToDisplay = displayAll ? data : data.slice(0, 5)

    return (
        <>
            <Box
                bg={useColorModeValue('blue.500', 'gray.800')}
                color='gray.100'
            >
                <div>
                    {selectedCategory ? (<Heading fontSize={'4xl'} fontFamily={'body'} pt={5}>
                        Latest {selectedCategory} Jobs
                    </Heading>) : (<Heading fontSize={'4xl'} fontFamily={'body'} pt={5}>
                        Latest Jobs
                    </Heading>)}


                    {/* {data && data.length !== 0 ?  ( */}
                    <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr', '2xl': '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                        <>{itemsToDisplay ? (itemsToDisplay.map((job, index) => {
                            return (<>

                                <Card maxW='sm' key={job.jobCode} >
                                    <CardBody w='100%' h='10' bg='' >
                                        <AspectRatio>
                                            <Image
                                                src={`data:image/jpeg;base64,${job.jobImage}`}
                                                alt={job.jobTitle}
                                                borderRadius='lg'
                                            />
                                        </AspectRatio>
                                        {
                                            new Date(job.updatedAt) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) ? (
                                                <Box display='flex' alignItems='baseline' p="2" >
                                                    <Badge borderRadius='full' colorScheme='red'>
                                                        New
                                                    </Badge>
                                                </Box>
                                            ) : (null)
                                        }
                                        <Stack mt='1' spacing='3'>
                                            <Heading size='md'>{job.jobTitle}</Heading>
                                        </Stack>
                                    </CardBody>
                                    <Divider />
                                    <CardFooter alignContent={'middle'} align="center">
                                        <ButtonGroup spacing='3' >
                                            <Center>

                                                <Button
                                                    variant='ghost'
                                                    colorScheme='blue'
                                                    rounded='full'
                                                    onClick={() => {
                                                        onOpen()
                                                        setModalJobData(job)
                                                        setReqQualifications(job.reqQualification)
                                                        setReqSkills(job.skillsRequired)
                                                        setReqResponsiblities(job.responsiblities)
                                                    }}
                                                >
                                                    Details
                                                </Button>
                                                <Button variant='solid' colorScheme='blue' rounded='full'
                                                    onClick={() => handleApplyNowClick(job.jobCode)}
                                                >
                                                    Apply now
                                                </Button>
                                            </Center>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </>)
                        })) : <Spinner
                            thickness='4px'
                            speed='0.65s'
                            color='blue.500'
                            size='xl' />}
                        </>
                    </Grid>
                    {/* ) : (<Text>Jobs not available at this moment.</Text>) } */}

                    {displayAll == false && (<Flex w="full" alignItems="center" justifyContent="center">
                        <Box pb={"15px"}>
                            <Button
                                bg={'whiteAlpha.800'}
                                rounded={'full'}
                                color={'blue.500'}
                                _hover={{ bg: 'whiteAlpha.900', color: 'blue.600' }}
                                onClick={() => navigate("/jobs")}
                            >
                                View All Jobs
                            </Button>
                        </Box>
                    </Flex>)
                    }

                </div>
                {/* JOB DESCRIPTION MODAL */}
                <Box pos='relative' zIndex={"9999"} mt={"3%"}  >
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent minW={"80%"} >
                            <ModalBody>

                                <Box
                                    w={'100%'}
                                    rounded="10px"
                                    position="relative"
                                >
                                    <Box>
                                        <Center>
                                            <Image
                                                maxH={"md"}
                                                roundedTop={'md'}
                                                alt={modalJobData.jobTitle}
                                                src={
                                                    `data:image/jpeg;base64,${modalJobData.jobImage}`
                                                }
                                                fit={'cover'}
                                                align={'center'}
                                                w={{ sm: '90%', lg: '50%' }}
                                            />
                                        </Center>
                                    </Box>
                                    <Box px={{ base: '5', sm: '5', md: '20', lg: '250' }}
                                        py={5}
                                    >
                                        <Box mt="1" justifyContent="center" alignContent="center">
                                            <Box
                                                fontSize="2xl"
                                                fontWeight="semibold"
                                                as="h4"
                                                lineHeight="tight"
                                                textAlign="center"
                                            >
                                                <Stack spacing={{ base: 6, md: 10 }}>
                                                    <Box as={'header'}>
                                                        <Heading
                                                            lineHeight={1.1}
                                                            fontWeight={600}
                                                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                                                        >
                                                            {modalJobData.jobTitle}
                                                        </Heading>
                                                        <Text
                                                            fontSize={'md'}
                                                            fontWeight={'300'}>
                                                            Job code: {modalJobData.jobCode}
                                                        </Text>
                                                        <Text
                                                            fontWeight={300}
                                                            fontSize={'2xl'}
                                                            pt={5}
                                                        >
                                                            NRs. {modalJobData.salary} per month
                                                        </Text>
                                                    </Box>

                                                    <Stack
                                                        spacing={{ base: 4, sm: 6 }}
                                                        direction={'column'}
                                                        divider={
                                                            <StackDivider borderColor='gray.200' />
                                                        }>
                                                        <VStack spacing={{ base: 4, sm: 6 }}>
                                                            <Text
                                                                fontSize={'2xl'}
                                                                fontWeight={'300'}>
                                                                {modalJobData.shortDescription}
                                                            </Text>

                                                        </VStack>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}
                                                            >
                                                                Details
                                                            </Text>

                                                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} fontSize={{ base: '14px', lg: '18px' }}>
                                                                <List spacing={2}>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Country / City:
                                                                        </Text>{' '}
                                                                        {modalJobData.location}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Field:
                                                                        </Text>{' '}
                                                                        {modalJobData.category}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Type:
                                                                        </Text>{' '}
                                                                        {modalJobData.isFulltime = true ? "Fulltime" : "Part-time"}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Work Hours:
                                                                        </Text>{' '}
                                                                        {modalJobData.workHours}
                                                                    </ListItem>

                                                                </List>
                                                                <List spacing={2}>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Day Off:
                                                                        </Text>{' '}
                                                                        Saturday, Sunday
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Housing:
                                                                        </Text>{' '}
                                                                        {modalJobData.housing = true ? "Yes" : "No"}
                                                                    </ListItem>
                                                                    <ListItem>
                                                                        <Text as={'span'} fontWeight={'bold'}>
                                                                            Food:
                                                                        </Text>{' '}
                                                                        {modalJobData.fooding == true ? "Yes" : "No"}
                                                                    </ListItem>
                                                                </List>
                                                            </SimpleGrid>
                                                        </Box>

                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Qualifications Required
                                                            </Text>
                                                            <Box spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.reqQualification ? (
                                                                        modalJobData.reqQualification
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No qualification information available</span>
                                                                    )}
                                                                </Text>
                                                            </Box>
                                                        </Box>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Skills Required
                                                            </Text>
                                                            <Box spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.skillsRequired ? (
                                                                        modalJobData.skillsRequired
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No skills information available</span>
                                                                    )}
                                                                </Text>
                                                            </Box>
                                                        </Box>
                                                        <Box textAlign={'left'}>
                                                            <Text
                                                                fontSize={{ base: '20px', lg: '24px' }}
                                                                fontWeight={'700'}
                                                                textTransform={'uppercase'}
                                                                mb={'4'}>
                                                                Responsiblities
                                                            </Text>
                                                            <Box spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Text textAlign={"left"}>
                                                                    {modalJobData && modalJobData.responsiblities ? (
                                                                        modalJobData.responsiblities
                                                                            .split(". ")
                                                                            .filter((sentence) => sentence.trim() !== "")
                                                                            .map((sentence, index) => (
                                                                                <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                            ))
                                                                    ) : (
                                                                        <span>No responsiblities information available</span>
                                                                    )}
                                                                </Text>
                                                            </Box>
                                                        </Box>
                                                    </Stack>
                                                    <Box
                                                        align='center'
                                                    >
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                {/* </ScrollDiv> */}
                            </ModalBody>
                            <ModalFooter>
                                <Button colorScheme='blue' rounded='30px' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='solid' colorScheme='blue' rounded='30px' size={'md'} onClick={() => handleApplyNowClick(modalJobData.jobCode)}>
                                    Apply now
                                </Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Box>
        </>
    )
}

export default AllJobs

