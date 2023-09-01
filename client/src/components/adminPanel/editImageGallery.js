
import { Image, Badge, Input, Box, Grid, Button, Heading, AspectRatio, Text, FormControl, IconButton, useDisclosure, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter, Textarea, VStack, useColorModeValue, Editable } from '@chakra-ui/react';
import { SmallCloseIcon, CheckCircleIcon } from "@chakra-ui/icons"
import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"

const EditImageGallery = (props) => {
    const [selectedimageId, setSelectedimageId] = useState(null);
    //upload new
    const [newSelectedImageFile, setNewSelectedImageFile] = useState(null);
    const [newSelectedPreviewImage, setNewSelectedPreviewImage] = useState(null);
    //update image
    const [imageToUpdateWith, setImageToUpdateWith] = useState(null);
    const [imageUpdatePreview, setImageUpdatePreview] = useState(null);

    const [imageTitle, setImageTitle] = useState('');
    const [imageDescription, setImageDescription] = useState('');

    const newImageUploadInputRef = useRef();
    const updateImageInputRef = useRef();

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [imageToDelete, setImageToDelete] = useState(null);
    const cancelRef = useRef()

    const handleNewImageSelect = (event) => {
        setNewSelectedImageFile(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setNewSelectedPreviewImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleImageReplaceSelect= (event) => {
        setImageToUpdateWith(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setImageUpdatePreview(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleUploadNewImage = async () => {
        if (newSelectedImageFile && imageTitle) {
            const formData = new FormData();
            formData.append('galleryImage', newSelectedImageFile);
            formData.append('imageTitle', imageTitle);
            formData.append('imageDescription', imageDescription);

            try {
                await axios.post("http://localhost:8000/admin/add-gallery-image", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                props.fetchGalleryImages();
                setNewSelectedImageFile(null);
                setImageTitle('');
                setImageDescription('');
            } catch (error) {
                console.error('Error adding sector:', error);
            }
        }
    }

    const handleImageDelete = async () => {
        if (imageToDelete) {
            try {
                const res = await axios.delete(`http://localhost:8000/admin/delete-gallery-image/${imageToDelete}`)
                if (res) {
                    props.fetchGalleryImages();
                    onClose();
                    console.log("Item deleted.")
                }
            } catch (error) {
                console.error("Error deleting the item: ", error)
            }
        }
    }

    const handleImageReplace = async (imageId) => {
        if (imageToUpdateWith || imageTitle || imageDescription) {
            const formData = new FormData()
            formData.append("_id", imageId)
            formData.append("galleryImage", imageToUpdateWith)
            formData.append("imageTitle", imageTitle)
            formData.append("imageDescription", imageDescription)
            try {
                await axios.put("http://localhost:8000/admin/update-gallery-image", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                props.fetchGalleryImages();
                setImageToUpdateWith(null);
                setSelectedimageId(null);
            } catch (error) {

                console.error("Error updating image: ", error)
            }
        }
    }

    return (
        <><Box bg={useColorModeValue('purple.100', 'gray.100')}
        color={useColorModeValue('purple.800', 'gray.100')}
        >
            <Heading m={2} fontSize={'4xl'} fontFamily={'body'} pt={5}
                color={useColorModeValue('purple.800', 'gray.100')}
            >
                Gallery
            </Heading>
            <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>

                {props.imageGalleryData.map((imageData, index) => {
                    return (<>
                        <Box>

                            <Box
                                maxW='sm'
                                borderWidth='1px'
                                borderRadius='lg'
                                overflow='hidden'
                                shadow={'xl'}
                                cursor='pointer'
                                bg='gray.100'
                            >
                                <VStack>
                                    {/* <form onSubmit={handleImageReplace(imageData._id)} > */}
                                    <Image
                                        src={ `data:image/jpeg;base64,${imageData.galleryImage}`}
                                        alt={imageData.imageTitle}
                                        objectFit="contain"
                                        h='250px'
                                        overflow="hidden"
                                        transition="0.15s ease-in-out"
                                        _hover={{
                                            brightness: '0.8',
                                        }}
                                        onClick={() => updateImageInputRef.current.click()}
                                    />
                                    <input
                                        type='file'
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        ref={updateImageInputRef}
                                        onChange={handleImageReplaceSelect}
                                    />
                                    <Box p='6'>
                                        <Box display='flex' alignItems='baseline'>
                                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                                New
                                            </Badge>
                                        </Box>
                                        <Input
                                            border='1px solid'
                                            rounded='5px'
                                            color='purple.800'
                                            colorScheme='purple'
                                            mt='1'
                                            fontWeight='semibold'
                                            as='h4'
                                            value={imageData.imageTitle}
                                            onChange={(e) => setImageTitle(e.target.value)}
                                        />
                                        <Button
                                            mt="2"
                                            colorScheme='purple'
                                            type='submit'
                                            onClick={() => handleImageReplace(imageData._id)}
                                        >Update Image</Button>
                                    </Box>
                                    {/* </form> */}
                                </VStack>

                            </Box>
                            <Box
                                w='30px'
                                as={IconButton}
                                size='sm'
                                colorScheme='red'
                                rounded="full"
                                bottom='94%'
                                left='47%'
                                zIndex='100'
                                boxShadow="2xl"
                                onClick={() => {
                                    setImageToDelete(imageData._id)
                                    onOpen()
                                }}
                            >
                                <SmallCloseIcon
                                    color='gray.50'
                                    w='30px'
                                />
                            </Box>
                        </Box>

                    </>)
                })}
                {props.imageGalleryData.length <= 100 ?
                    (<Box
                        maxW='sm'
                        borderWidth='1px'
                        borderRadius='lg'
                        overflow='hidden'
                        shadow={'xl'}
                        bg={'gray.100'}
                        cursor='pointer'>
                            <Image
                                src={newSelectedPreviewImage || 'https://image.pngaaa.com/768/791768-middle.png'}
                                alt='Add Image'
                                rounded='10px'
                                objectFit="contain"
                                h="250px"
                                transition="0.15s ease-in-out"
                                _hover={{
                                    brightness: '0.8',
                                }}
                                onClick={() => newImageUploadInputRef.current.click()}
                            />
                        <input
                            type='file'
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={newImageUploadInputRef}
                            onChange={handleNewImageSelect}
                        />

                        <form>
                        <FormControl mt='7' id='imageTitle'>
                            <Input
                                size='sm'
                                rounded="10px"
                                color='gray.100'
                                fontWeight="bold"
                                fontSize="16px"
                                placeholder="New title"
                                _placeholder={{ color: "purple.800", fontWeight: "normal", fontSize: "sm" }}
                                textAlign="center"
                                value={imageTitle}
                                onChange={(e) => setImageTitle(e.target.value)}
                            ></Input>
                            <Textarea
                                size='sm'
                                rounded="10px"
                                color='gray.100'
                                fontWeight="bold"
                                fontSize="16px"
                                placeholder="New description"
                                _placeholder={{ color: "purple.800", fontWeight: "normal", fontSize: "sm" }}
                                textAlign="center"
                                value={imageDescription}
                                onChange={(e) => setImageDescription(e.target.value)}
                            ></Textarea>

                            <Button
                                colorScheme='purple'
                                m={1}
                                type='submit'
                                onClick={handleUploadNewImage}
                            >Add Image</Button>
                        </FormControl>
                        </form>
                    </Box>) : (null)}

            </Grid>
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
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button
                                ref={cancelRef} onClick={onClose}
                            >
                                Cancel
                            </Button>
                            <Button colorScheme='red'
                                onClick={handleImageDelete} ml={3}
                            >
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </Box>
        </>
    )
}

export default EditImageGallery