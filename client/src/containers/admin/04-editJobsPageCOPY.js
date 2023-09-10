import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import {
    Box, Button, Heading, useColorModeValue, Grid, Image, Stack, FormControl, FormLabel, Select, Card, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CardBody, CardFooter, AspectRatio, Input, Center,
    StackDivider, Text, VStack, List, useToast, SimpleGrid, Spinner, AlertDialog, cancelRef, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, HStack
} from '@chakra-ui/react'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'


const AllJobs = ({ displayAll }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState([])
    const [reqQualificationsList, setReqQualificationsList] = useState([])
    const [reqSkillsList, setReqSkillsList] = useState([])
    const [reqResponsiblitiesList, setReqResponsiblitiesList] = useState([])
    const [selectedJob, setselectedJob] = useState({})
    const [formData, setFormData] = useState({
        jobTitle: '',
        salary: '',
        category: '',
        location: '',
        isFullTime: false,
        workHours: '',
        daysOff: '',
        accomodation: false,
        fooding: false,
        shortDescription: '',
        reqQualification: [],
        responsiblities: [],
        skillsRequired: [],
        jobImage: null
    })
    //GET
    const fetchJobsList = async () => {
        try {
            console.log("Fetching job list...");
            const res = await axios.get('http://localhost:8000/jobslist');
            let newData = res.data.jobsList
            setData(newData.reverse());
            // console.log(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };
    //EDIT
    const handleInputChange = (field, index, value) => {
        if (index === undefined) {
            // For single values
            setFormData(prevData => ({
                ...prevData,
                [field]: value
            }));

            setselectedJob(prevJob => ({
                ...prevJob,
                [field]: value
            }));
        } else {
            // For array values
            setFormData(prevData => {
                const newData = { ...prevData };
                newData[field][index] = value;
                return newData;
            });

            setselectedJob(prevJob => {
                const newJob = { ...prevJob };
                newJob[field][index] = value;
                return newJob;
            });
        }
    };

    const handleEditJob = async (jobId) => {
        try {
            const updatedFormData = new FormData();

            // Add the updated values from the formData state
            updatedFormData.append("_id", jobId);
            updatedFormData.append("jobTitle", formData.jobTitle);
            updatedFormData.append("salary", formData.salary);
            updatedFormData.append("category", formData.category);
            updatedFormData.append("location", formData.location);
            updatedFormData.append("isFullTime", formData.isFullTime);
            updatedFormData.append("workHours", formData.workHours);
            updatedFormData.append("daysOff", formData.daysOff);
            updatedFormData.append("fooding", formData.fooding);
            updatedFormData.append("shortDescription", formData.shortDescription);

            formData.reqQualification.forEach((qualification, index) => {
                updatedFormData.append(`reqQualification[${index}]`, qualification);
            });

            formData.responsiblities.forEach((responsibility, index) => {
                updatedFormData.append(`responsiblities[${index}]`, responsibility);
            });

            formData.skillsRequired.forEach((skill, index) => {
                updatedFormData.append(`skillsRequired[${index}]`, skill);
            });
            await axios.put("http://localhost:8000/edit-homepage/update-topcarousel-image", updatedFormData, {

            })
            fetchJobsList();
            setselectedJob(null);
        } catch (error) {

            console.error("Error updating image: ", error)
        }

    }
    //DELETE
    useEffect(() => {
        fetchJobsList();
    }, [])

    return (
        <>
            <Box
                bg={useColorModeValue('blue.500', 'gray.800')}
                color={useColorModeValue('gray.50', 'gray.800')}
            >
                <Box p={1} pt={5} color="purple.800" bg={useColorModeValue('purple.100', 'purple.800')} h="100%">
                    <Heading color={useColorModeValue('blue.800', 'gray.100')}>Jobs</Heading>
                    <HStack
                        p={2}
                        justify="center"
                    >
                        <Button
                            colorScheme='purple'
                            variant='solid'
                            onClick={() => {
                                window.location.reload()
                                activatePostNewJob(true)
                            }}
                        >All jobs</Button>
                        <Button
                            colorScheme='purple'
                            variant='outline'
                            onClick={() => activatePostNewJob(false)}
                        >Post a new job</Button>
                    </HStack>
                    <Box>

                        {/* JOBS LIST */}
                        <VStack p={10} >
                            {/* HEADER */}
                            <Grid color='blue.800'
                                templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
                                p={3}
                                gap={1}
                                textAlign={"left"}
                                fontWeight={"bold"}
                                borderTop="1px solid"
                                borderX="1px solid"
                                borderColor="lightGray"
                            >

                                <Text w="30px" textAlign={"left"} >SN</Text>
                                <Text w="120px" textAlign={"left"} >Job code</Text>
                                <Text w="200px">Job title</Text>
                                <Text w="80px">Salary</Text>
                                <Text w="150px">Category</Text>
                                <Text w="300px">Detail</Text>
                                <Text w="120px">Submitted on</Text>
                                {/* <Text w="40px">Edit</Text> */}
                                <Text w="60px">Delete</Text>

                            </Grid>
                            {/* RESUME ENTRIES DISPLAY */}
                            {data.map((doc, index) => {
                                const isEven = index % 2 === 0;
                                const rowStyle = {
                                    backgroundColor: isEven ? 'lightgray' : 'white', // Set your desired colors here
                                    padding: '3px',
                                    gap: '1px',
                                };
                                return (<>
                                    <Box
                                        borderX="1px solid"
                                        borderColor="lightGray"
                                    >
                                        <Grid
                                            templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
                                            p={3}
                                            gap={2}
                                            style={rowStyle}
                                            textAlign={"left"}
                                            key={doc._id}
                                        >

                                            <Text w="30px" textAlign={"left"} >{index + 1}</Text>
                                            <Text w="120px" textAlign={"left"} >{doc.jobCode}</Text>
                                            <Text w="200px">{doc.jobTitle}</Text>
                                            <Text w="80px">{doc.salary}</Text>
                                            <Text w="150px">{doc.category}</Text>
                                            <Text w="300px" isTruncated >{doc.shortDescription}</Text>
                                            <Text w="120px">{doc.createdAt.slice(0, 10)}</Text>
                                            <Center w="40px">
                                                <EditIcon
                                                    style={{ cursor: 'pointer' }}
                                                    _hover={{ color: 'blue.400' }}
                                                    onClick={() => {
                                                        onOpen()
                                                        setselectedJob(doc)
                                                        setReqQualificationsList(doc.reqQualification)
                                                        setReqSkillsList(doc.skillsRequired)
                                                        setReqResponsiblitiesList(doc.responsiblities)
                                                    }} />
                                            </Center>
                                            <Center w="60px">
                                                <DeleteIcon
                                                    style={{ cursor: 'pointer' }}
                                                    _hover={{ color: 'blue.400' }}
                                                    onClick={() => {
                                                        setJobTodelete(doc._id)
                                                        handleDeleteDialogOpen()

                                                    }}
                                                />
                                            </Center>
                                        </Grid>
                                    </Box>
                                </>)
                            })}
                        </VStack>

                        {/* JOB DESCRIPTION MODAL */}
                        <Box mt={"3%"}  >
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay />
                                <ModalContent minW={"80%"} >
                                    <ModalBody>

                                        <Box
                                            w={'100%'}
                                            rounded="10px"
                                            position="relative"
                                        >
                                            <form onSubmit={handleEditJob}>

                                                <Box as={'header'}>
                                                    <Input
                                                        lineHeight={1.1}
                                                        fontWeight={600}
                                                        fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
                                                        value={selectedJob.jobTitle}
                                                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                                                    />
                                                </Box>
                                                <HStack>
                                                    <FormLabel fontWeight={'bold'}>Housing</FormLabel>
                                                    <FormControl id="housing" py={2}>
                                                        <Select
                                                            maxW="150"
                                                            value={formData['housing'] || ''}
                                                            onChange={handleNewInputChange}  >
                                                            <option>Yes</option>
                                                            <option>No</option>
                                                        </Select>
                                                    </FormControl>
                                                </HStack>
                                                <Box textAlign={'left'}>
                                                    <Text
                                                        fontSize={{ base: '20px', lg: '24px' }}
                                                        fontWeight={'700'}
                                                        textTransform={'uppercase'}
                                                        mb={'4'}>
                                                        Qualifications Required
                                                    </Text>
                                                    <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>

                                                        <Input id='responsiblities'
                                                            value={formData['responsiblities'] || ''}
                                                            onChange={handleNewInputChange}
                                                        />

                                                    </VStack>
                                                </Box>

                                            </form>
                                        </Box>
                                        {/* </ScrollDiv> */}
                                    </ModalBody>
                                    <ModalFooter alignSelf="center">
                                        <Button colorScheme='blue' rounded='30px' mb={3} type='submit'>
                                            Save Changes
                                        </Button>
                                    </ModalFooter>
                                </ModalContent>
                            </Modal>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default AllJobs

