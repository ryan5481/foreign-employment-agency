import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import {
    Box,
    VStack,
    Grid,
    Text,
    useColorModeValue,
    Spacer,
    Heading,
    Stack,
    Center,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button
} from "@chakra-ui/react"
import { ViewIcon, DeleteIcon} from '@chakra-ui/icons'
import { useNavigate } from "react-router-dom";
const baseUrl = process.env.REACT_APP_BASE_URL 

const EditResumePage = () => {
    const navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [resumes, setResumes] = useState([])
    const [selectedResume, setSelectedResume] = useState({})
    const [resumeToDelete, setResumeTodelete] = useState({})
    const cancelRef = useRef()
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false); // New state for delete dialog

    const handleDeleteDialogOpen = () => {
        setIsDeleteDialogOpen(true);
    };

    const handleDeleteDialogClose = () => {
        setIsDeleteDialogOpen(false);
    };

    const fetchResumes = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-resumes`)
            if (res) {
                const data = res.data.data
                setResumes(data.reverse())

            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleResumeDelete = async () => {
        if (resumeToDelete) {
            try {
                const res = await axios.delete(`${baseUrl}/admin/delete-resume/${resumeToDelete}`)
                if (res) {
                    fetchResumes();
                    handleDeleteDialogClose()
                    console.log("Item deleted.")
                }
            } catch (error) {
                console.error("Error deleting the item: ", error)
            }
        }
    }

    useEffect(() => {
        fetchResumes()
    }, [])

    function capitalizeWords(str) {
        return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }


    return (<>
        <Box p={1} pt={5} color="purple.800" bg={useColorModeValue('purple.300', 'purple.800')} h="100%">
            <Heading color={useColorModeValue('blue.800', 'gray.100')}>Resume Submissions</Heading>
            <VStack p={10} >
                {/* HEADER */}
                <Grid color={useColorModeValue('blue.800', 'gray.100')}
                    templateColumns={{ sm: '1fr', md:'1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
                    p={3}
                    gap={1}
                    textAlign={"left"}
                    fontWeight={"bold"}
                    borderTop="1px solid"
                    borderX="1px solid"
                    borderColor="lightGray"
                >

                    <Text w="40px" textAlign={"left"} >SN</Text>
                    <Text w="100px" textAlign={"center"} >Job code</Text>
                    <Text w="200px">Full name</Text>
                    <Text w="30px">Sex</Text>
                    <Text w="200px">Address</Text>
                    <Text w="100px">Education</Text>
                    <Text w="120px">Phone number</Text>
                    <Text w="120px">Submitted on</Text>
                    <Text w="120px">View resume</Text>
                    <Text w="120px">Delete entry</Text>

                </Grid>
                {/* RESUME ENTRIES DISPLAY */}
                {resumes.map((doc, index) => {
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
                                templateColumns={{ sm: '1fr', md:'1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr' }}
                                p={3}
                                gap={1}
                                style={rowStyle}
                                textAlign={"left"}
                                key={doc._id}
                            >

                                <Text w="40px" textAlign={"left"} >{index + 1}</Text>
                                <Text w="100px" textAlign={"center"} >{doc.jobCode}</Text>
                                <Text w="200px">{capitalizeWords(doc.fullName)}</Text>
                                <Text w="30px">{doc.gender.slice(0, 1).toUpperCase()}</Text>
                                <Text w="200px">{capitalizeWords(doc.address)}</Text>
                                <Text w="100px">{capitalizeWords(doc.education)}</Text>
                                <Text w="120px">{doc.phoneNumber}</Text>
                                <Text w="120px">{doc.createdAt.slice(0, 10)}</Text>
                                <Center w="30px">
                                    <ViewIcon
                                        style={{ cursor: 'pointer' }}
                                        _hover={{ color: 'blue.400' }}
                                        onClick={() => {
                                            onOpen()
                                            setSelectedResume(doc)
                                        }} />
                                </Center>
                                <Center w="30px">
                                    <DeleteIcon
                                        style={{ cursor: 'pointer' }}
                                        _hover={{ color: 'blue.400' }}
                                        onClick={() => {
                                            setResumeTodelete(doc._id)
                                            handleDeleteDialogOpen()
                                        }}
                                    />
                                </Center>
                            </Grid>
                        </Box>
                    </>)
                })}
            </VStack>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent minW={"80%"} >
                <ModalBody>
                    <Box
                        px={"10%"}
                        py={10}
                        color={useColorModeValue('blue.700', 'gray.1000')}
                    >
                        {/* <Heading w="100%" textAlign={'center'} fontSize={24} fontWeight="thin" mb="2%">
                            www.RadiantInfoTech.com
                        </Heading> */}
                        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
                            Resume
                        </Heading>
                        <Text fontSize={28} htmlFor="job-code" fontWeight={'normal'}>
                            Personal Information
                        </Text>
                        <Stack direction={{ base: "column", sm: "column", md: "row", lg: "row" }}>
                            <Text htmlFor="job-code" fontWeight={'bold'}>
                                Job code:
                            </Text>
                            <Text htmlFor="job-code" fontWeight={'normal'}>
                                {selectedResume.jobCode}
                            </Text>

                        </Stack>
                        {/* NAME ADDRESS */}
                        <Grid templateColumns={{sm: '1fr', md: '1fr 1fr', lg:"1fr 1fr 1fr 1fr"}} textAlign={"left"}>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Full name:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.fullName}
                            </Text>

                            <Text htmlFor="last-name" fontWeight={'bold'}>
                                Address:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.address}
                            </Text>
                        </Grid>
                        {/* NATIONALITY PASSPORT */}
                        <Grid templateColumns={{sm: '1fr', md: '1fr 1fr', lg:"1fr 1fr 1fr 1fr"}} textAlign={"left"}>
                            <Text htmlFor="passport" fontWeight={'bold'}>
                                Nationality:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.nationality}
                            </Text>

                            <Text htmlFor="passport" fontWeight={'bold'}>
                                Passport number:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.passportNumber}
                            </Text>

                            <Text htmlFor="children" fontWeight={'bold'}>Gender:</Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.gender}
                            </Text>
                        </Grid>
                        <Grid templateColumns={{sm: '1fr', md: '1fr 1fr', lg:"1fr 1fr 1fr 1fr"}} textAlign={"left"}>
                            <Text htmlFor="place-of-issue" fontWeight={'bold'}>
                                Place of issue:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.placeOfIssue}
                            </Text>
                            <Text htmlFor="expiry-date" fontWeight={'bold'}>
                                Expiry date:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.expiryDate}
                            </Text>
                        </Grid>
                        <Grid templateColumns={{sm: '1fr', md: '1fr 1fr', lg:"1fr 1fr 1fr 1fr"}} textAlign={"left"}>
                            <Text htmlFor="date-of-birth" fontWeight={'bold'}>
                                Date of birth:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.dateOfBirth}
                            </Text>
                            <Text htmlFor="height" fontWeight={'bold'}>
                                Height:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.height}
                            </Text>
                            <Text htmlFor="weight" fontWeight={'bold'}>
                                Weight:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.weight}
                            </Text>
                        </Grid>
                        <Grid templateColumns={{sm: '1fr', md: '1fr 1fr', lg:"1fr 1fr 1fr 1fr"}} textAlign={"left"}>
                            <Text htmlFor="children" fontWeight={'bold'}>
                                Marital Status:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.maritalStatus}
                            </Text>

                            <Text htmlFor="children" fontWeight={'bold'}>
                                Children:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.children}
                            </Text>
                            <Text htmlFor="religion" fontWeight={'bold'}>
                                Religion:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.jobCode}
                            </Text>
                        </Grid>
                        <Spacer />
                        <Grid templateColumns={{sm: '1fr', md: '1fr 1fr', lg:"1fr 1fr 1fr 1fr"}} textAlign={"left"}>
                            <Text fontSize={28} htmlFor="job-code" pt={2} fontWeight={'normal'}>
                                Qualifiations
                            </Text>
                        </Grid>
                        <Text fontSize={18} htmlFor="job-code" fontWeight={'bold'}>
                            Language
                        </Text>
                            <Text htmlFor="children" fontWeight={'bold'} fontSize={18}>
                                English
                            </Text>
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr', lg:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "}} textAlign={"left"}>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Speaking:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.english?.speaking}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Listening:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.english?.listening}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Reading:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.english?.reading}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Writing:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.english?.writing}
                            </Text>
                        </Grid>
                            <Text htmlFor="children" fontWeight={'bold'} fontSize={18}>
                                Arabic
                            </Text>
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr', lg:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "}} textAlign={"left"}>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Speaking:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.arabic?.speaking}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Listening:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.arabic?.listening}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Reading:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.arabic?.reading}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Writing:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.arabic?.writing}
                            </Text>
                        </Grid>
                            <Text htmlFor="children" fontWeight={'bold'} fontSize={18}>
                                Hindi
                            </Text>
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr', lg:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "}} textAlign={"left"}>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Speaking:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.hindi?.speaking}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Listening:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.hindi?.listening}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Reading:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.hindi?.reading}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Writing:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.hindi?.writing}
                            </Text>
                        </Grid>
                        <Grid templateColumns="1fr 1fr 1fr 1fr" textAlign={"left"} py={2} >
                            <Text htmlFor="children" fontWeight={'bold'}>
                                Education:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.education}
                            </Text>
                        </Grid>
                        <Text htmlFor="children" fontWeight={'bold'} fontSize={18}>
                            Work experience
                        </Text>
                            <Text htmlFor="children" fontWeight={'bold'} fontSize={18}>
                                In Nepal
                            </Text>
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr', lg:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "}} textAlign={"left"}>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Field:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpNepal?.field}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Employer:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpNepal?.employer}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Duration:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpNepal?.duration}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Location:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpNepal?.address}
                            </Text>
                        </Grid>
                            <Text htmlFor="children" fontWeight={'bold'} fontSize={18}>
                                Overseas
                            </Text>
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr', lg:"1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr "}} textAlign={"left"}>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Field:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpOverseas?.field}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Employer:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpOverseas?.employer}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Duration:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpOverseas?.duration}
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'bold'}>
                                Location:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume?.workExpOverseas?.country}
                            </Text>
                        </Grid>
                        <Text htmlFor="full-name" fontWeight={'bold'} pt={2}>
                            Other skills:
                        </Text>
                        <Text htmlFor="full-name" fontWeight={'normal'}>
                            {selectedResume?.otherSkills}
                        </Text>
                        <Text fontSize={28} htmlFor="job-code" pt={2} fontWeight={'normal'}>
                            Contact Information
                        </Text>
                        {/* NATIONALITY PASSPORT */}
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr'}} textAlign={"left"}>
                            <Text htmlFor="passport" fontWeight={'bold'}>
                                Agent name:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.agentName}
                            </Text>
                        </Grid>
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr'}} textAlign={"left"}>
                            <Text htmlFor="passport" fontWeight={'bold'}>
                                Applicant's phone number:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.phoneNumber}
                            </Text>
                            <Text htmlFor="passport" fontWeight={'bold'}>
                                Email:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.email}
                            </Text>
                        </Grid>
                        <Grid templateColumns={{base: '1fr 1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr'}} textAlign={"left"}>
                            <Text htmlFor="passport" fontWeight={'bold'}>
                                Home number:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.homeNumber}
                            </Text>
                            <Text htmlFor="passport" fontWeight={'bold'}>
                                Relative's number:
                            </Text>
                            <Text htmlFor="full-name" fontWeight={'normal'}>
                                {selectedResume.relativesNumber}
                            </Text>
                        </Grid>
                    </Box>
                </ModalBody>
                {/* <ModalFooter>
                                <Button colorScheme='blue' rounded='30px' mr={3} onClick={onClose}>
                                    Close
                                </Button>
                                <Button variant='solid' colorScheme='blue' rounded='30px' size={'md'}>
                                    Apply now
                                </Button>
                            </ModalFooter> */}
            </ModalContent>
        </Modal>
        {/* DELETE ALERT */}
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
                        <Button colorScheme="red" onClick={handleResumeDelete} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
        
    </>)
}

export default EditResumePage