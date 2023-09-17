import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import {
    Box, Button, Heading, useColorModeValue, Grid, Image, Stack, FormControl, FormLabel, Select, Card, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CardBody, CardFooter, AspectRatio, Input, Center,
    StackDivider, Text, VStack, List, useToast, SimpleGrid, Spinner, AlertDialog, cancelRef, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, HStack
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { ViewIcon, DeleteIcon, EditIcon, CloseIcon } from '@chakra-ui/icons'
const baseUrl = process.env.REACT_APP_BASE_URL 

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

    const formBgColorMode = useColorModeValue("gray.50", "gray.700")
    const formTextColorMode = useColorModeValue("purple.800", "gray.100")

    const initialFormData = {
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
    }
    const [formData, setFormData] = useState(initialFormData);

    //POST

    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0])
        if (event.target.files && event.target.files[0]) {
            setDisplaySelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleNewInputChange = (event) => {
        event.preventDefault()
        const { id, value } = event.target
        const newValue = value === 'Yes' ? true :
            value === 'No' ? false :
                value
        setFormData((prevData) => ({

            ...prevData,
            [id]: newValue
            // };

        }))
    }

    const handlePostNewJob = async () => {
        try {
            if (selectedImage === null) {
                toast({
                    title: 'Error',
                    description: 'Please select an image.',
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                });
                activatePostNewJob(true)
            }

            const updatedFormData = new FormData();

            // Append all the form data to the updated FormData
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'jobImage') {
                    updatedFormData.append(key, selectedImage);
                } else {
                    updatedFormData.append(key, value);
                }
            });
            // console.log("FORMDATA:" + updatedFormData)
            const res = await axios.post(`${baseUrl}/admin/publishjob`, updatedFormData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data", // Set Content-Type
                    },
                })
            if (res.status === 200) {
                toast({
                    title: 'Success.',
                    description: 'Job published.',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                });
                setDisplaySelectedImage(null)
                setFormData(initialFormData)
                activatePostNewJob(true)
                fetchJobsList()
            } else {
                toast({
                    title: 'Error',
                    description: res.data.msg,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top'
                });
            // window.location.reload()
            }
        } catch (error) {
            console.error("Error: ", error)
            toast({
                title: 'Error',
                description: 'Error. Please Try again.',
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top'
            });
            // window.location.reload()
            activatePostNewJob(true)
        }
    }


    //GET
    const fetchJobsList = async () => {
        try {
            console.log("Fetching job list...");
            const res = await axios.get(`${baseUrl}/jobslist`);
            let newData = res.data.jobsList
            setData(newData.reverse());
            // console.log(data)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };



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
                const res = await axios.delete(`${baseUrl}/admin/delete-job/${jobToDelete}`)
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

    return (
        <>
            <Box
                bg={useColorModeValue('blue.300', 'gray.800')}
                color={useColorModeValue('gray.50', 'gray.800')}
                h={"full"}
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
                                // window.location.reload()
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
                                templateColumns={{ sm: '1fr', md:'1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
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
                                <Text w="40px">View</Text>
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
                                            templateColumns={{ sm: '1fr', md:'1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
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
                                            <Center w="60px">
                                                <ViewIcon
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
                                <ModalContent minW={"90%"} >
                                    <ModalHeader alignContent={"right"} >
                                    </ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>

                                        <Box
                                            rounded="10px"
                                            position="relative"
                                            p={10}
                                        >

                                            <Stack
                                                direction={{ base: 'column', sm: 'column', md: "row", lg: "row" }}
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
                                                <Box >
                                                    <Text
                                                        lineHeight={1.1}
                                                        fontWeight={600}
                                                        fontSize={{ base: 'xl', sm: '3xl', lg: '4xl' }}
                                                    >{selectedJob.jobTitle}</Text>
                                                    <Text
                                                        pt={1}
                                                        fontWeight={300}
                                                        fontSize={'xl'}
                                                    >
                                                        Job id: {selectedJob.jobCode}
                                                    </Text>

                                                    <Text
                                                        fontWeight={300}
                                                        fontSize={'xl'}
                                                        pt={2}
                                                        isTruncated
                                                    >NRs. {selectedJob.salary} per month</Text>

                                                    <Text fontWeight={300}
                                                        fontSize={'xl'}

                                                    >{selectedJob.shortDescription}</Text>
                                                </Box>
                                            </Stack>


                                            <Stack spacing={{ base: 6, md: 10 }}>


                                                <Stack
                                                    minW={"100%"}
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

                                                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} fontSize={{ base: '14px', lg: '18px' }}>
                                                            <List spacing={2}>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Location:
                                                                    </Text>
                                                                    <Text
                                                                        w="150"
                                                                        id='location'
                                                                        fontWeight={'normal'}
                                                                    >{selectedJob.location}</Text>
                                                                </HStack>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Field:
                                                                    </Text>
                                                                    <Text
                                                                        w="150"
                                                                        fontWeight={'normal'}
                                                                    >{selectedJob.category}</Text>
                                                                </HStack>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Type:
                                                                    </Text>
                                                                    <Text
                                                                        w="150"
                                                                        fontWeight={'normal'}
                                                                    >{formData.isFullTime ? 'Full time' : 'Part time'}</Text>
                                                                </HStack>

                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Work hours:
                                                                    </Text>
                                                                    <Text
                                                                        fontWeight={'normal'}
                                                                    >{selectedJob.workHours}</Text>
                                                                </HStack>

                                                            </List>
                                                            <List spacing={2}>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Days off:
                                                                    </Text>
                                                                    <Text
                                                                        fontWeight={'normal'}
                                                                    >{selectedJob.daysOff}</Text>
                                                                </HStack>

                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Housing:
                                                                    </Text>
                                                                    <Text
                                                                        w="150"
                                                                        fontWeight={'normal'}
                                                                    >{formData.housing ? 'Yes' : 'No'}</Text>
                                                                </HStack>
                                                                <HStack>
                                                                    <Text as={'span'} fontWeight={'bold'}>
                                                                        Fooding:
                                                                    </Text>
                                                                    <Text
                                                                        w="150"
                                                                        fontWeight={'normal'}
                                                                    >{formData.fooding ? 'Yes' : 'No'}</Text>
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
                                                            <Text textAlign={"left"}>
                                                                {selectedJob && selectedJob.reqQualification ? (
                                                                    selectedJob.reqQualification
                                                                        .split(". ")
                                                                        .filter((sentence) => sentence.trim() !== "")
                                                                        .map((sentence, index) => (
                                                                            <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                        ))
                                                                ) : (
                                                                    <span>No qualification information available</span>
                                                                )}
                                                            </Text>
                                                        </VStack>
                                                    </Box>


                                                    <Box textAlign={'left'}>
                                                        <Text
                                                            fontSize={{ base: '20px', lg: '24px' }}
                                                            fontWeight={'700'}
                                                            textTransform={'uppercase'}
                                                            mb={'4'}>
                                                            Skills Required
                                                        </Text>
                                                        <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                            <Text textAlign={"left"}>
                                                                {selectedJob && selectedJob.skillsRequired ? (
                                                                    selectedJob.skillsRequired
                                                                        .split(". ")
                                                                        .filter((sentence) => sentence.trim() !== "")
                                                                        .map((sentence, index) => (
                                                                            <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                        ))
                                                                ) : (
                                                                    <span>No skills information available</span>
                                                                )}
                                                            </Text>
                                                        </VStack>
                                                    </Box>
                                                    <Box textAlign={'left'}>
                                                        <Text
                                                            fontSize={{ base: '20px', lg: '24px' }}
                                                            fontWeight={'700'}
                                                            textTransform={'uppercase'}
                                                            mb={'4'}>
                                                            responsiblities
                                                        </Text>

                                                        <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                            <Text textAlign={"left"}>
                                                                {selectedJob && selectedJob.responsiblities ? (
                                                                    selectedJob.responsiblities
                                                                        .split(". ")
                                                                        .filter((sentence) => sentence.trim() !== "")
                                                                        .map((sentence, index) => (
                                                                            <p key={index}> {index + 1 + ". "} {sentence}</p>
                                                                        ))
                                                                ) : (
                                                                    <span>No responsiblities information available</span>
                                                                )}
                                                            </Text>
                                                        </VStack>
                                                    </Box>
                                                </Stack>
                                                <Box
                                                    align='center'
                                                >
                                                </Box>
                                            </Stack>
                                        </Box>
                                        {/* </ScrollDiv> */}
                                    </ModalBody>

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
                            bg={formBgColorMode}
                            color={formTextColorMode}
                            py={10}
                            maxW='80%'
                            rounded="10px"
                            mx='auto'
                        >

                            <Stack
                                direction={{ base: 'column', sm: 'column', md: "row", lg: "row" }}
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
                                        // fontSize={'2xl'}
                                    >

                                        <Text >NRs. </Text>
                                        <Input
                                            fontWeight={300}
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
                                                            as={"textarea"}
                                                            minH={'100px'}
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
                                                        Skills Required
                                                    </Text>
                                                    <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>

                                                        <Input
                                                            as={"textarea"}
                                                            minH={'100px'}
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
                                                        Responsiblities
                                                    </Text>
                                                    <VStack spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>

                                                        <Input
                                                            as={"textarea"}
                                                            minH={'100px'}
                                                            id='responsiblities'
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
                        </Box>
                    )}

                </Box>
            </Box>

        </>
    )
}

export default AllJobs

