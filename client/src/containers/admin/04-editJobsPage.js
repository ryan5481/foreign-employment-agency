import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import {
    Box, Button, Heading, useColorModeValue, Grid, Image, Stack, FormControl, FormLabel, Select, Card, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CardBody, CardFooter, AspectRatio, Input, Center,
    StackDivider, Text, VStack, List, useToast, SimpleGrid, Spinner, AlertDialog, cancelRef, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, HStack
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { ViewIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'

import Pagination from '../../components/pagination'
import HeroWithBg from '../../components/card/heroWithBg'
import CategoryCard from '../../components/card/categoryCard'

const AllJobs = ({ displayAll }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [data, setData] = useState([])
    const [reqQualificationsList, setReqQualificationsList] = useState([])
    const [reqSkillsList, setReqSkillsList] = useState([])
    const [reqResponsiblitiesList, setReqResponsiblitiesList] = useState([])
    const [selectedJob, setselectedJob] = useState({})
    const [jobToDelete, setJobTodelete] = useState({})
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const [isPostNewJobActive, activatePostNewJob] = useState(true)
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const cancelRef = useRef()
    const imageInputRef = useRef()
    const toast = useToast()
    const [selectedImage, setSelectedImage] = useState(null)
    const [displaySelectedImage, setDisplaySelectedImage] = useState(null);
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

    //POST

    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0])
        if (event.target.files && event.target.files[0]) {
            setDisplaySelectedImage(URL.createObjectURL(event.target.files[0]));
    }
}

    const handleNewInputChange = (event) => {
        const { id, value } = event.target
        const newValue = value === 'Yes' ? true :
                         value === 'No' ? false :
                         value
        setFormData((prevData) => ({
            // if (id === 'reqQualifications') {
            //     return {
            //         ...prevData,
            //         reqQualification: [...prevData.reqQualification, value]
            //     };
            // } else if(id === 'reqQualifications') {
            //     return {
            //         ...prevData,
            //         responsiblities: [...prevData.responsiblities, value]
            //     };
            // } else if(id === 'skillsRequired') {
            //     return {
            //         ...prevData,
            //         skillsRequired: [...prevData.skillsRequired, value]
            //     };
            // }
            // else {
                
                    ...prevData,
                    [id]: newValue
                // };
            
        }))
    }


    const handlePostNewJob = async () => {
        try {
            const updatedFormData = new FormData();

        // Append all the form data to the updated FormData
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'jobImage') {
                updatedFormData.append(key, selectedImage);
            } else if (Array.isArray(value)) {
                value.forEach((item, index) => {
                    updatedFormData.append(`${key}[${index}]`, item);
                });
            } else {
                updatedFormData.append(key, value);
            }
        });
        console.log("FORMDATA:" + updatedFormData)
            const res = await axios.post("http://localhost:8000/admin/publishjob", updatedFormData, 
            {
                headers: {
                    "Content-Type": "multipart/form-data", // Set Content-Type
                },
            })
            if (res.status === 200) {
                toast({
                    title: 'Form submitted.',
                    description: 'Your form has been successfully submitted.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                });
                window.location.reload()
                activatePostNewJob(true)
            } else {
                toast({
                    title: 'Error',
                    description: res.data.msg,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error("Error: ", error)
            toast({
                title: 'Error',
                description: 'There was an error.',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    }


    //GET
    const fetchJobsList = async () => {
        try {
            console.log("Fetching job list...");
            const res = await axios.get('http://localhost:8000/jobslist');
            let newData = res.data.jobsList
            setData(newData);
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
    const handleDeleteDialogOpen = () => {
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setIsDeleteDialogOpen(false);
    };

    const handleJobDelete = async () => {
        if (jobToDelete) {
            try {
                const res = await axios.delete(`http://localhost:8000/admin/delete-job/${jobToDelete}`)
                if (res) {
                    fetchJobsList();
                    handleDeleteDialogClose()
                    console.log("Job deleted.")
                }
            } catch (error) {
                console.error("Error deleting the job: ", error)
            }
        }
    }


    useEffect(() => {
        fetchJobsList();
    }, [])


    // function capitalizeWords(str) {
    //     return str
    //         .split(' ')
    //         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    //         .join(' ');
    // }


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
                    {isPostNewJobActive ? (<Box>

                        {/* JOBS LIST */}
                        <VStack p={10} >
                            {/* HEADER */}
                            <Grid color='blue.800'
                                templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
                                p={3}
                                gap={1}
                                textAlign={"left"}
                                fontWeight={"bold"}
                                borderTop="1px solid"
                                borderX="1px solid"
                                borderColor="lightGray"
                            >

                                <Text w="30px" textAlign={"left"} >SN</Text>
                                <Text w="120px" textAlign={"center"} >Job code</Text>
                                <Text w="200px">Job title</Text>
                                <Text w="80px">Salary</Text>
                                <Text w="150px">Category</Text>
                                <Text w="300px">Detail</Text>
                                <Text w="120px">Submitted on</Text>
                                <Text w="40px">Edit</Text>
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
                                            templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
                                            p={3}
                                            gap={1}
                                            style={rowStyle}
                                            textAlign={"left"}
                                            key={doc._id}
                                        >

                                            <Text w="30px" textAlign={"center"} >{index + 1}</Text>
                                            <Text w="120px" textAlign={"center"} >{doc.jobCode}</Text>
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
                                    <ModalCloseButton />
                                    <ModalBody>

                                        <Box
                                            w={'100%'}
                                            rounded="10px"
                                            position="relative"
                                        >
                                            <form onSubmit={handleEditJob}>
                                                <Stack
                                                    direction={{ base: 'row', sm: 'column', md: "row", lg: "row" }}
                                                    gap={5}
                                                    justify="center"
                                                    divider={
                                                        <StackDivider borderColor='gray.200' />
                                                    }>
                                                    <Box maxH="200px" >
                                                        <Center>
                                                            <Image
                                                                rounded={'md'}
                                                                alt={selectedJob.jobTitle}
                                                                src={
                                                                    `data:image/jpeg;base64,${selectedJob.jobImage}`
                                                                }
                                                                align='center'
                                                                maxH="200px"
                                                                objectFit="contain"
                                                                overflow="hidden"
                                                            />
                                                        </Center>
                                                    </Box>
                                                    <Box as={'header'}>
                                                        <Input
                                                            lineHeight={1.1}
                                                            fontWeight={600}
                                                            fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
                                                            value={selectedJob.jobTitle}
                                                            onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                                                        />
                                                        <Text
                                                            pt={1}
                                                            fontWeight={300}
                                                            fontSize={'xl'}
                                                        >
                                                            Job id: {selectedJob.jobCode}
                                                        </Text>
                                                        <HStack
                                                            fontWeight={300}
                                                            fontSize={'2xl'}
                                                        >
                                                            <Text fontSize={'2xl'}>NRs. </Text>
                                                            <Input
                                                                fontWeight={300}
                                                                fontSize={'2xl'}
                                                                pt={2}
                                                                w={170}
                                                                value={selectedJob.salary}
                                                                onChange={(e) => handleInputChange('salary', e.target.value)}

                                                            />
                                                            <Text >per month </Text>
                                                        </HStack>

                                                        <Input fontWeight={300}
                                                            fontSize={'2xl'}
                                                            value={selectedJob.shortDescription}
                                                            onChange={(e) => handleInputChange('shortDescription', e.target.value)}

                                                        />
                                                    </Box>
                                                </Stack>
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


                                                                <Stack
                                                                    spacing={{ base: 4, sm: 6 }}
                                                                    direction={'column'}
                                                                    divider={
                                                                        <StackDivider borderColor='gray.200' />
                                                                    }>


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
                                                                                <HStack>
                                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                                        Location:
                                                                                    </Text>
                                                                                    <Input
                                                                                        w="150"
                                                                                        value={selectedJob.location}
                                                                                        onChange={(e) => handleInputChange('location', e.target.value)}

                                                                                    />
                                                                                </HStack>
                                                                                <HStack>
                                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                                        Field:
                                                                                    </Text>
                                                                                    <Input
                                                                                        w="150"
                                                                                        value={selectedJob.category}
                                                                                        onChange={(e) => handleInputChange('category', e.target.value)}

                                                                                    />
                                                                                </HStack>
                                                                                <HStack>
                                                                                    <FormLabel fontWeight={'bold'}>Type</FormLabel>
                                                                                    <FormControl id="type" py={2}>
                                                                                        <Select
                                                                                            maxW="150"
                                                                                            value={formData.isFullTime ? 'Full time' : 'Part time'}
                                                                                            onChange={e => handleInputChange('isFullTime', e.target.value === 'Full time')}
                                                                                        >
                                                                                            <option>Full time</option>
                                                                                            <option>Part time</option>
                                                                                        </Select>
                                                                                    </FormControl>
                                                                                </HStack>
                                                                                <HStack>
                                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                                        Work hours:
                                                                                    </Text>
                                                                                    <Input
                                                                                        maxW="100"
                                                                                        value={selectedJob.workHours}
                                                                                        onChange={(e) => handleInputChange('workHours', e.target.value)}
                                                                                    />
                                                                                </HStack>

                                                                            </List>
                                                                            <List spacing={2}>
                                                                                <HStack>
                                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                                        Days off:
                                                                                    </Text>
                                                                                    <Input
                                                                                        maxW="170"
                                                                                        value={selectedJob.daysOff}
                                                                                        onChange={(e) => handleInputChange('daysOff', e.target.value)}
                                                                                    />
                                                                                </HStack>
                                                                                <HStack>
                                                                                    <FormLabel fontWeight={'bold'}>Housing</FormLabel>
                                                                                    <FormControl id="housing" py={2}>
                                                                                        <Select
                                                                                            maxW="150" value={formData.housing ? 'Yes' : 'No'}
                                                                                            onChange={e => handleInputChange('housing', e.target.value === 'Yes')}  >
                                                                                            <option>Yes</option>
                                                                                            <option>No</option>
                                                                                        </Select>
                                                                                    </FormControl>
                                                                                </HStack>
                                                                                <HStack>
                                                                                    <FormLabel fontWeight={'bold'}>Fooding</FormLabel>
                                                                                    <FormControl id="fooding" py={2}>
                                                                                        <Select
                                                                                            maxW="150"
                                                                                            value={formData.fooding ? 'Yes' : 'No'}
                                                                                            onChange={e => handleInputChange('fooding', e.target.value === 'Yes')}
                                                                                        >
                                                                                            <option>Yes</option>
                                                                                            <option>No</option>
                                                                                        </Select>
                                                                                    </FormControl>
                                                                                </HStack>
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
                                                                        <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                            {reqQualificationsList.map((qualify, index) => (
                                                                                <Input key={index} value={qualify}
                                                                                    onChange={(e) => handleInputChange('reqQualification', index, e.target.value)}
                                                                                />
                                                                            ))}

                                                                        </VStack>
                                                                    </Box>


                                                                    <Box textAlign={'left'}>
                                                                        <Text
                                                                            fontSize={{ base: '20px', lg: '24px' }}
                                                                            fontWeight={'700'}
                                                                            textTransform={'uppercase'}
                                                                            mb={'4'}>
                                                                            Qualifications Required
                                                                        </Text>
                                                                        <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                            {reqSkillsList.map((skill, index) => (
                                                                                <Input value={skill}
                                                                                    key={index}
                                                                                    onChange={(e) => handleInputChange("skillsRequired", index, e.target.value)}
                                                                                />
                                                                            ))}
                                                                        </VStack>
                                                                    </Box>
                                                                    <Box textAlign={'left'}>
                                                                        <Text
                                                                            fontSize={{ base: '20px', lg: '24px' }}
                                                                            fontWeight={'700'}
                                                                            textTransform={'uppercase'}
                                                                            mb={'4'}>
                                                                            Qualifications Required
                                                                        </Text>
                                                                        <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                            {reqResponsiblitiesList.map((responsiblity, index) => (
                                                                                <Input key={index} value={responsiblity}
                                                                                    onChange={(e) => handleInputChange("responsiblities", index, e.target.value)}
                                                                                />
                                                                            ))}
                                                                        </VStack>
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
                        {/* DELETE POP UP */}
                        <AlertDialog
                            isOpen={isDeleteDialogOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={handleDeleteDialogClose} // Close the delete dialog
                            isCentered
                        >
                            <AlertDialogOverlay>
                                <AlertDialogContent>
                                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                                        Delete Resume
                                    </AlertDialogHeader>

                                    <AlertDialogBody>
                                        Are you sure? You can't undo this action afterwards.
                                    </AlertDialogBody>

                                    <AlertDialogFooter>
                                        <Button ref={cancelRef} onClick={handleDeleteDialogClose}>
                                            Cancel
                                        </Button>
                                        <Button colorScheme="red" onClick={handleJobDelete} ml={3}>
                                            Delete
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Box>) : (
                        //  POST A NEW JOB FORM
                        <Box
                            bg='gray.50'
                            py={10}
                            maxW='80%'
                            rounded="10px"
                            mx='auto'
                        >
                            <form onSubmit={handleEditJob}>
                                <Stack
                                    direction={{ base: 'row', sm: 'column', md: "row", lg: "row" }}
                                    gap={5}
                                    justify="center"
                                    divider={
                                        <StackDivider borderColor='purple.500' />
                                    }>
                                    <Box maxH="200px" >
                                        <Center>
                                            <Image
                                                rounded={'md'}
                                                border={"1px solid"}
                                                alt={selectedJob.jobTitle}
                                                src={displaySelectedImage ||
                                                    `https://image.pngaaa.com/768/791768-middle.png`

                                                }
                                                align='center'
                                                maxH="200px"
                                                objectFit="contain"
                                                overflow="hidden"
                                                onClick={() => imageInputRef.current.click()}
                                            />
                                            <input
                                            id='jobImage'
                                            type='file'
                                            accept='image/*'
                                            ref={imageInputRef}
                                            style={{ display: "none" }}
                                            onChange={handleImageSelect}
                                            />
                                        </Center>
                                    </Box>
                                    <Box as={'header'}>
                                    <FormLabel fontWeight={'bold'}>Job title</FormLabel>
                                        <Input
                                            lineHeight={1.1}
                                            fontWeight={600}
                                            fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
                                            id='jobTitle'
                                            value={formData['jobTitle'] || ''}
                                            onChange={handleNewInputChange}
                                        />
                                        <FormLabel fontWeight={'bold'}>Salary</FormLabel>
                                        <HStack
                                            fontWeight={300}
                                            fontSize={'2xl'}
                                        >
                                            
                                            <Text fontSize={'2xl'}>NRs. </Text>
                                            <Input
                                                fontWeight={300}
                                                fontSize={'2xl'}
                                                pt={2}
                                                w={170}
                                                type='number'
                                                id='salary'
                                                value={formData['salary'] || ''}
                                                onChange={handleNewInputChange}

                                            />
                                            <Text >per month </Text>
                                        </HStack>
                                        <FormLabel fontWeight={'bold'}>Short description</FormLabel>
                                        <Input fontWeight={300}
                                            fontSize={'2xl'}
                                            id='shortDescription'
                                            value={formData['shortDescription'] || ''}
                                            onChange={handleNewInputChange}

                                        />
                                    </Box>
                                </Stack>
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


                                                <Stack
                                                    spacing={{ base: 4, sm: 6 }}
                                                    direction={'column'}
                                                    divider={
                                                        <StackDivider borderColor='gray.200' />
                                                    }>
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
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Location:
                                                                    </Text>
                                                                    <Input
                                                                        w="150"
                                                                        id='location'
                                                                        value={formData['location'] || ''}
                                                                        onChange={handleNewInputChange}
                                                                    />
                                                                </HStack>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Field:
                                                                    </Text>
                                                                    <Input
                                                                        w="150"
                                                                        id='category'
                                                                        value={formData['category'] || ''}
                                                                        onChange={handleNewInputChange}

                                                                    />
                                                                </HStack>
                                                                <HStack>
                                                                    <FormLabel fontWeight={'bold'}>Type</FormLabel>
                                                                    <FormControl id="type" py={2}>
                                                                        <Select
                                                                            maxW="150"
                                                                            value={formData['type'] || ''}
                                                                            onChange={handleNewInputChange}
                                                                        >
                                                                            <option>Full time</option>
                                                                            <option>Part time</option>
                                                                        </Select>
                                                                    </FormControl>
                                                                </HStack>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Work hours:
                                                                    </Text>
                                                                    <Input
                                                                        maxW="100"
                                                                        id='workHours'
                                                                        value={formData['workHours'] || ''}
                                                                        onChange={handleNewInputChange}
                                                                    />
                                                                </HStack>

                                                            </List>
                                                            <List spacing={2}>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Days off:
                                                                    </Text>
                                                                    <Input
                                                                        maxW="170"
                                                                        id='daysOff'
                                                                        value={formData['daysOff'] || ''}
                                                                        onChange={handleNewInputChange}
                                                                    />
                                                                </HStack>
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
                                                                <HStack>
                                                                    <FormLabel fontWeight={'bold'}>Fooding</FormLabel>
                                                                    <FormControl id="fooding" py={2}>
                                                                        <Select
                                                                            maxW="150"
                                                                            value={formData['fooding'] || ''}
                                                                            onChange={handleNewInputChange}
                                                                        >
                                                                            <option>Yes</option>
                                                                            <option>No</option>
                                                                        </Select>
                                                                    </FormControl>
                                                                </HStack>
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
                                                        <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                                <Input 
                                                                id='reqQualification'
                                                                value={formData['reqQualification'] || ''}
                                                                onChange={handleNewInputChange}
                                                                />
                                                        </VStack>
                                                    </Box>


                                                    <Box textAlign={'left'}>
                                                        <Text
                                                            fontSize={{ base: '20px', lg: '24px' }}
                                                            fontWeight={'700'}
                                                            textTransform={'uppercase'}
                                                            mb={'4'}>
                                                            Qualifications Required
                                                        </Text>
                                                        <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                            
                                                                <Input 
                                                                id='skillsRequired'
                                                                value={formData['skillsRequired'] || ''}
                                                                onChange={handleNewInputChange}
                                                                />
                                                         
                                                        </VStack> 
                                                    </Box>
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
                                                </Stack>
                                                <Box
                                                    align='center'
                                                >
                                                    <Button
                                                        w="7rem"
                                                        colorScheme="purple"
                                                        variant="solid"
                                                        onClick={() => {
                                                            handlePostNewJob()
                                                        }}>
                                                        Publish Job
                                                    </Button>
                                                </Box>
                                            </Stack>
                                        </Box>
                                    </Box>
                                </Box>
                            </form>
                        </Box>
                    )}

                </Box>
            </Box>

        </>
    )
}

export default AllJobs

