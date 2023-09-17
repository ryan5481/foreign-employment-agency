import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import {
  Grid, Heading, Text, useColorModeValue, useToast, Box, Image, Button, useDisclosure, IconButton, AlertDialog, AlertDialogOverlay, AlertDialogContent, AlertDialogHeader, AlertDialogBody, AlertDialogFooter
} from '@chakra-ui/react'
import { SmallCloseIcon } from "@chakra-ui/icons"
const baseUrl = process.env.REACT_APP_BASE_URL 

const EditNewspaperAds = () => {
  const toast = useToast()
  //GET
  const bgColorModeValue = useColorModeValue('blue.600', 'white');
  const [newspaperAds, setNewspaperAds] = useState([])
  //PUT
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [selectedimageId, setSelectedimageId] = useState(null);
  const [selectedEditPreviewFile, setSelectedEditPreviewFile] = useState(null);

  const imageInputRef = useRef();
  //DELETE
  const [imageToDelete, setImageToDelete] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef()
  //POST
  const newImageInputRef = useRef();
  const [selectedNewImageFile, setNewSelectedImageFile] = useState(null);
  const [selectedPreviewFile, setSelectedPreviewFile] = useState(null);




  //GET
  const fetchNewspaperAds = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get-newspaper-images`)
      const data = res.data.data
      setNewspaperAds(data)
    } catch (error) {
      console.error("Error: ", error)
    }
  }
  useEffect(() => {
    fetchNewspaperAds()
  }, [])

  //PUT
  const handleImageSelect = (e) => {
    setSelectedImageFile(e.target.files[0])
    if (e.target.files && e.target.files[0]) {
      setSelectedEditPreviewFile(URL.createObjectURL(e.target.files[0]));
    }
  }

  const handleImageReplace = async (imageId) => {
    if (selectedImageFile) {
      const formData = new FormData()
      formData.append("newsAdImage", selectedImageFile)
      formData.append("_id", imageId)

      try {
        const res = await axios.put(`${baseUrl}/admin/update-newspaper-image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        if (res.status === 200) {
          toast({
            title: 'Success.',
            description: 'Data Updated.',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top'
          });
          fetchNewspaperAds();
          setSelectedImageFile(null);
          setSelectedimageId(null);
        } else {
          toast({
            title: 'Error.',
            description: 'Failed to update data.',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top'
          });
        }

      } catch (error) {
        console.error('Error adding sector:', error);
        toast({
          title: 'Error.',
          description: "Could not connect to server.",
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
      }
    }
  }

      //DELETE
      const handleImageDelete = async () => {
        if (imageToDelete) {
          try {
            const res = await axios.delete(`${baseUrl}/admin/delete-newspaper-image/${imageToDelete}`)
            if (res.status === 200) {
              toast({
                title: 'Success.',
                description: 'image deleted.',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: 'top'
              });
              fetchNewspaperAds();
              onClose();
            } else {
              toast({
                title: 'Error.',
                description: 'Failed to delete image.',
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
              });
            }
    
          } catch (error) {
            console.error('Error adding sector:', error);
            toast({
              title: 'Error.',
              description: "Could not connect to server.",
              status: 'error',
              duration: 5000,
              isClosable: true,
              position: 'top'
            });
          }
        }
      }

      //POST
      const handleNewImageSelect = (event) => {
        setNewSelectedImageFile(event.target.files[0])
        if (event.target.files && event.target.files[0]) {
          setSelectedPreviewFile(URL.createObjectURL(event.target.files[0]));
        }

      }
      const handleUploadNewImage = async () => {
        if (selectedNewImageFile) {
          const formData = new FormData();
          formData.append('newsAdImage', selectedNewImageFile);

          try {
            await axios.post(`${baseUrl}/admin/add-newspaper-image`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            fetchNewspaperAds();
            setNewSelectedImageFile(null);
            setSelectedPreviewFile(null)
          } catch (error) {
            console.error('Error adding image:', error);
          }
        }
      }

      return (
        <Box p={10} color={useColorModeValue('blue.600', 'gray.1000')}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
            p={5}
          >

            <Text as={'span'} color={'blue.400'}>
              Newspaper Vacancy Snippets
            </Text>
          </Heading>
          <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: "1fr 1fr", xl: '1fr 1fr 1fr' }} p={3} justifySelf={'center'} alignSelf="center">
            {newspaperAds.map((ad, index) => {
              return (<>
                <Box
                  key={ad._id}
                  p={5}
                  m={5}
                  w={{ sm: 'xs', md: 'sm', lg: "sm" }}
                  alignItems="center"
                  justifyContent="center"
                  rounded="10px"
                  borderWidth="1px"
                  shadow="lg"
                  position="relative"
                  isCentered
                >
                  <Box minH={"92%"} >
                    <Box
                      as={IconButton}
                      size='sm'
                      colorScheme='red'
                      rounded="full"
                      top='20px'
                      left='50%'
                      zIndex='3'
                      boxShadow="2xl"
                      onClick={() => {
                        setImageToDelete(ad._id)
                        onOpen()
                      }}
                    >
                      <SmallCloseIcon
                        color='gray.50'
                        w='30px'
                      />
                    </Box>
                    <Image
                      src={`data:image/jpeg;base64,${ad.newsAdImage}`}
                      alt={ad.newsAdImage}
                      objectFit="fill"
                      width="100%"
                      transition="0.15s ease-in-out"
                                        _hover={{
                                            filter: "brightness(0.6)"
                                        }}
                      onClick={() => imageInputRef.current.click()}
                    />
                    <input
                      type='file'
                      accept="image/*"
                      style={{ display: "none" }}
                      ref={imageInputRef}
                      onChange={handleImageSelect}
                    />

                  </Box>
                  <Button
                    mt="2"
                    mb="5"
                    onClick={() => handleImageReplace(ad._id)}
                  >Update Image</Button>
                </Box>
              </>)
            })}
            <Box

              p={2}
              m={5}
              w={{ sm: 'xs', md: 'sm', lg: "sm" }}
              alignItems="center"
              justifyContent="center"
              rounded="10px"
              borderWidth="1px"
              shadow="lg"
              position="relative"
              isCentered
            >
              <Box h={"92%"}>
                <Image
                  rounded={"10px"}
                  src={selectedPreviewFile || `https://image.pngaaa.com/768/791768-middle.png`}
                  alt="Upload image"
                  objectFit="cover"
                  minH="100%"
                  w={"auto"}
                  transition="0.15s ease-in-out"
                  _hover={{
                    brightness: '0.8',
                  }}
                  onClick={() => newImageInputRef.current.click()}
                />
                <input
                  type='file'
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={newImageInputRef}
                  onChange={handleNewImageSelect}
                />

              </Box>
              <Button
                mt="2"
                onClick={handleUploadNewImage}
              >Upload Image</Button>
            </Box>
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
      )
    }

    export default EditNewspaperAds