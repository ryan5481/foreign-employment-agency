import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import {
    Grid, Heading, Text, Box, useColorModeValue, IconButton, Image, Input, FormControl, Button, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter
} from '@chakra-ui/react'
import { SmallCloseIcon, CheckCircleIcon } from "@chakra-ui/icons"


const EditCertificatePage = () => {
    //GET
    const [certificatesList, setCertificatesList] = useState([])

    //POST
    const newImageInputRef = useRef()
    const [certificateTitle, setCertificateTitle] = useState('')
    const [newCertificateImage, setNewCertificateImage] = useState(null)

    //PUT
    const [imageToUpdateWith, setImageToUpdateWith] = useState(null)
    const [certificateTitles, setCertificateTitles] = useState('')
    const updateImageInputRef = useRef()

    //DELETE
    const [imageToDelete, setImageToDelete] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef()

    const fetchCertificates = async () => {
        try {
            const res = await axios.get("http://localhost:8000/get-certificate-images")
            const data = res.data.data
            setCertificatesList(data)
            const initialCertificateTitles = data.map(cert => cert.certificateTitle || '')
            setCertificateTitles(initialCertificateTitles)
        } catch (error) {
            console.error("Error: ", error)
        }
    }

    //POST
    const handleNewCertificate = (event) => {
        setNewCertificateImage(event.target.files[0])
    }

    const handleUploadNewImage = async() => {
        if(newCertificateImage && certificateTitle){
            const formData = new FormData()
            formData.append("certificateImage", newCertificateImage)
            formData.append("certificateTitle", certificateTitle)
        
        try {
            await axios.post("http://localhost:8000/admin/add-certificate-image", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            fetchCertificates();
            setNewCertificateImage(null);
            setCertificateTitle('');
        } catch (error) {
            console.error('Error adding sector:', error);
        }
    }
    }

    //PUT
    const handleImageToUpdateSelect = (event, index) => {
        setImageToUpdateWith(event.target.files[0])
    }

    const handleReplaceCertificate = async (event, imageId, index) => {
        event.preventDefault()

        const updatedCertTitle = certificateTitles[index]
        const formData = new FormData()
        formData.append("_id", imageId)
        formData.append("certificateImage", imageToUpdateWith)
        formData.append("certificateTitle", updatedCertTitle)

        try {
            const data = await axios.put(`http://localhost:8000/admin/update-certificate-image`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            fetchCertificates();
            setImageToUpdateWith(null);
        } catch (error) {
            console.error("Error updating image: ", error)
        }
    }

    //DELETE
    const handleImageDelete = async () => {
        if (imageToDelete) {
            try {
                const res = await axios.delete(`http://localhost:8000/admin/delete-certificate-image/${imageToDelete}`)
                if (res) {
                    fetchCertificates();
                    onClose();
                    console.log("Item deleted.")
                }
            } catch (error) {
                console.error("Error deleting the item: ", error)
            }
        }
    }

    useEffect(() => {
        fetchCertificates()
    }, [])

    return (
        <Box
            bg={useColorModeValue('teal.50', 'gray.800')}
            color={useColorModeValue('purple.800', 'purple.100')}
            h='100%'
        >

            <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
                p={5}>

                <Text as={'span'} >
                    Licenses and Certificates
                </Text>
            </Heading>
            <Grid templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr' }} gap={1} p={3} align="center">
                {certificatesList.map((cert, index) => {
                    return (
                        <>
                            <form
                                key={cert._id}
                                onSubmit={(event) => handleReplaceCertificate(event, cert._id, index)}
                            >
                                <Box justifyItems='center' w='xl' p="6" roundedTop='5px'>

                                    {/* RED CROSS ICON */}
                                    <Box
                                        w='30px'
                                        as={IconButton}
                                        size='sm'
                                        colorScheme='red'
                                        rounded="full"
                                        left='49%'
                                        top="16px"
                                        boxShadow="2xl"
                                        onClick={() => {
                                            setImageToDelete(cert._id)
                                            onOpen()
                                        }}
                                    >
                                        <SmallCloseIcon
                                            color='gray.50'
                                            w='30px'
                                        />
                                    </Box>
                                    <FormControl w='sm'>
                                        {/* IMAGE */}
                                        <Image
                                            roundedTop='5px'
                                            src={`data:image/jpeg;base64,${cert.certificateImage}`}
                                            alt={cert.certificateTitle}
                                            onClick={() => updateImageInputRef.current.click()}
                                        />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            style={{ display: 'none' }}
                                            ref={updateImageInputRef}
                                            onChange={handleImageToUpdateSelect}
                                        />
                                        <Box bg='white'>
                                            <Input
                                                roundedBottom='5px'
                                                colorScheme="purple"
                                                fontSize="2xl"
                                                fontWeight="semibold"
                                                textAlign="center"
                                                value={certificateTitles[index]}
                                                onChange={(event) => {
                                                    const updatedCertTitles = [...certificateTitles]
                                                    updatedCertTitles[index] = event.target.value
                                                    setCertificateTitles(updatedCertTitles)
                                                }}
                                            >
                                            </Input>
                                        </Box>
                                        <Button
                                            w='100%'
                                            colorScheme="purple"
                                            type="submit"

                                        >Update</Button>
                                    </FormControl>
                                </Box>
                            </form>
                        </>

                    )
                })}
                <FormControl w="300px">
                    {/* IMAGE */}
                    <Image
                        roundedTop='5px'
                        src={"https://image.pngaaa.com/768/791768-middle.png"}
                        alt="Upload image"
                        onClick={() => newImageInputRef.current.click()}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        ref={newImageInputRef}
                        onChange={handleNewCertificate}
                    />
                    <Box bg='white' id='certificateTitle'>
                        <Input
                            roundedBottom='5px'
                            colorScheme="purple"
                            fontSize="2xl"
                            fontWeight="semibold"
                            textAlign="center"
                            value={certificateTitle}
                            onChange={(event)=> setCertificateTitle(event.target.value)}
                        >
                        </Input>
                    </Box>
                    <Button
                        w='100%'
                        colorScheme="purple"
                        type="submit"
                        onClick={handleUploadNewImage}
                    >Add Image</Button>
                </FormControl>
            </Grid>
            {/* DELETE ALERT */}
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isCentered
            >
                <AlertDialogOverlay >
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Image
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                ref={cancelRef} onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme='red'
                                ml={3}
                                onClick={handleImageDelete}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
    )
}

export default EditCertificatePage