import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Editable,
  EditablePreview,
  EditableInput,
  Center,
  useToast,
  HStack
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
const baseUrl = process.env.REACT_APP_BASE_URL 
const EditAboutNepal = () => {

  const toast = useToast()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [displaySelectedImage, setDisplaySelectedImage] = useState(null);
  const imageInputRef = useRef();

  const [heroImage, setHeroImage] = useState('')
  const [title1, setTitle1] = useState('')
  const [tagline, setTagline] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [paragraph, setParagraph] = useState('')
  const [title2, setTitle2] = useState('')
  const [key1, setKey1] = useState('')
  const [value1, setValue1] = useState('')
  const [key2, setKey2] = useState('')
  const [value2, setValue2] = useState('')
  const [key3, setKey3] = useState('')
  const [value3, setValue3] = useState('')
  const [key4, setKey4] = useState('')
  const [value4, setValue4] = useState('')
  const [key5, setKey5] = useState('')
  const [value5, setValue5] = useState('')
  const [key6, setKey6] = useState('')
  const [value6, setValue6] = useState('')
  const [key7, setKey7] = useState('')
  const [value7, setValue7] = useState('')
  const [key8, setKey8] = useState('')
  const [value8, setValue8] = useState('')
  const [title3, setTitle3] = useState('')
  const [point1, setPoint1] = useState('')
  const [point2, setPoint2] = useState('')
  const [point3, setPoint3] = useState('')
  const [point4, setPoint4] = useState('')
  const [point5, setPoint5] = useState('')
  const [point6, setPoint6] = useState('')
  const [point7, setPoint7] = useState('')
  const [point8, setPoint8] = useState('')

  //GET
  const fetchAboutNepalData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/get-about-nepal`);
      const data = res.data.data;
      setData(data)
      setHeroImage(`data:image/jpeg;base64,${data.heroImage}`)
      setTitle1(data.title1)
      setTagline(data.tagline)
      setShortDescription(data.shortDescription)
      setParagraph(data.paragraph)
      setTitle2(data.title2)
      setKey1(data.key1)
      setValue1(data.value1)
      setKey2(data.key2)
      setValue2(data.value2)
      setKey3(data.key3)
      setValue3(data.value3)
      setKey4(data.key4)
      setValue4(data.value4)
      setKey5(data.key5)
      setValue5(data.value5)
      setKey6(data.key6)
      setValue6(data.value6)
      setKey7(data.key7)
      setValue7(data.value7)
      setKey8(data.key8)
      setValue8(data.value8)
      setTitle3(data.title3)
      setPoint1(data.point1)
      setPoint2(data.point2)
      setPoint3(data.point3)
      setPoint4(data.point4)
      setPoint5(data.point5)
      setPoint6(data.point6)
      setPoint7(data.point7)
      setPoint8(data.point8)
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  console.log()

  const handleImageSelect = (event) => {
    setSelectedImage(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      setDisplaySelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  const handleUpdateData = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      if (selectedImage) {
        formData.append('heroImage', selectedImage, selectedImage.filename);
      }
      formData.append('_id', data._id);
      formData.append('title1', title1);
      formData.append('tagline', tagline);
      formData.append('shortDescription', shortDescription);
      formData.append('paragraph', paragraph);
      formData.append('title2', title2);
      formData.append('key1', key1);
      formData.append('value1', value1);
      formData.append('key2', key2);
      formData.append('value2', value2);
      formData.append('key3', key3);
      formData.append('value3', value3);
      formData.append('key4', key4);
      formData.append('value4', value4);
      formData.append('key5', key5);
      formData.append('value5', value5);
      formData.append('key6', key6);
      formData.append('value6', value6);
      formData.append('key7', key7);
      formData.append('value7', value7);
      formData.append('key8', key8);
      formData.append('value8', value8);
      formData.append('title3', title3);
      formData.append('point1', point1);
      formData.append('point2', point2);
      formData.append('point3', point3);
      formData.append('point4', point4);
      formData.append('point5', point5);
      formData.append('point6', point6);
      formData.append('point7', point7);
      formData.append('point8', point8);

      const res = await axios.put(`${baseUrl}/admin/edit-about-nepal`, formData);
      if (res.status === 200) {
        toast({
          title: 'Success.',
          description: 'Data Updated.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top'
        });
        fetchAboutNepalData()
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
  };

  useEffect(() => {
    fetchAboutNepalData();
  }, []);



  return (
    <Container maxW={'7xl'} color={useColorModeValue('blue.700', 'gray.400')} 
    >
      <form onSubmit={handleUpdateData}>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={displaySelectedImage ||
              heroImage
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
            onClick={() => imageInputRef.current.click()}
            cursor="pointer"
            transition="0.15s ease-in-out"
            _hover={{
              filter: "brightness(0.6)"
            }}
          />
          <input
            type="file"
            style={{ display: 'none' }}
            id="fileInput"
            accept="image/*"
            ref={imageInputRef}
            onChange={handleImageSelect}
          />
          <Box as={'header'}>

            <Editable id="imageTitle" placeholder={data.title1} fontWeight={700} lineHeight={1.2} fontSize="5xl" >
              <Center>
                <EditablePreview />
                <EditableInput px={2} rounded={'10px'} type="text" name="title1" value={data.title1}
                  onChange={(e) => setTitle1(e.target.value)}
                />
              </Center>
            </Editable>
            <Editable id="imageTitle" placeholder={data.tagline} color={useColorModeValue('gray.400', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'} >
              <Center>
                <EditablePreview />
                <EditableInput px={2} rounded={'10px'} type="text" name="tagline" value={data.tagline}
                  onChange={(e) => setTagline(e.target.value)}
                />
              </Center>
            </Editable>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
              <Editable id="imageTitle" placeholder={data.shortDescription} color={useColorModeValue('blue.500', 'gray.400')} fontSize={'2xl'}
                fontWeight={'300'}
              >
                <Center>
                  <EditablePreview />
                  <EditableInput
                  px={2} rounded={'10px'}
                  type="text" 
                    name="shortDescription"
                    value={data.shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                  />
                </Center>
              </Editable>
              <Editable id="paragraph" placeholder={data.paragraph}>
                <Center>
                  <EditablePreview />
                  <EditableInput as="textarea" minH={"200px"} minW={"100%"}
                    fontSize={'lg'} name="paragraph" value={data.paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
                  />
                </Center>
              </Editable>
            <Box>
              <Editable
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
                id="title2" placeholder={data.title2}>
                <Center>
                  <EditablePreview />
                  <EditableInput
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    fontSize={'lg'} name="title2" value={data.title2}
                    onChange={(e) => setTitle2(e.target.value)}
                  />
                </Center>
              </Editable>

              <VStack>
                <HStack spacing={2}>
                  <Editable id="key1" fontWeight={'bold'} placeholder={data.key1}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key1" value={data.key1}
                        onChange={(e) => setKey1(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value1" placeholder={data.value1}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value1" value={data.value1}
                        onChange={(e) => setValue1(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
                <HStack spacing={2}>
                  <Editable id="key2" fontWeight={'bold'} placeholder={data.key2}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key2" value={data.key2}
                        onChange={(e) => setKey2(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value2" placeholder={data.value2}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value2" value={data.value2}
                        onChange={(e) => setValue2(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
                <HStack spacing={2}>
                  <Editable id="key3" fontWeight={'bold'} placeholder={data.key3}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key3" value={data.key3}
                        onChange={(e) => setKey3(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value3" placeholder={data.value3}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value3" value={data.value3}
                        onChange={(e) => setValue3(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
                <HStack spacing={2}>
                  <Editable id="key4" fontWeight={'bold'} placeholder={data.key4}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key4" value={data.key4}
                        onChange={(e) => setKey4(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value4" placeholder={data.value4}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value4" value={data.value4}
                        onChange={(e) => setValue4(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
                <HStack spacing={2}>
                  <Editable id="key5" fontWeight={'bold'} placeholder={data.key5}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key5" value={data.key5}
                        onChange={(e) => setKey5(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value5" placeholder={data.value5}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value5" value={data.value5}
                        onChange={(e) => setValue5(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
                <HStack spacing={2}>
                  <Editable id="key6" fontWeight={'bold'} placeholder={data.key6}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key6" value={data.key6}
                        onChange={(e) => setKey6(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value6" placeholder={data.value6}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value6" value={data.value6}
                        onChange={(e) => setValue6(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
                <HStack spacing={2}>
                  <Editable id="key7" fontWeight={'bold'} placeholder={data.key7}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key7" value={data.key7}
                        onChange={(e) => setKey7(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value7" placeholder={data.value7}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value7" value={data.value7}
                        onChange={(e) => setValue7(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
                <HStack spacing={2}>
                  <Editable id="key8" fontWeight={'bold'} placeholder={data.key8}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} fontWeight={'bold'} name="key8" value={data.key8}
                        onChange={(e) => setKey8(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="value8" placeholder={data.value8}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="value8" value={data.value8}
                        onChange={(e) => setValue8(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </HStack>
              </VStack>
            </Box>
            <Box>
              <Editable
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}
                id="title3"
                placeholder={data.title3}>
                <Center>
                  <EditablePreview />
                  <EditableInput
                    fontSize={{ base: '16px', lg: '18px' }}
                    color={useColorModeValue('yellow.500', 'yellow.300')}
                    fontWeight={'500'}
                    textTransform={'uppercase'}
                    mb={'4'}
                    id="title3"
                    placeholder={data.title3}
                    name="title3"
                    value={data.title3}
                    onChange={(e) => setTitle3(e.target.value)}
                  />
                </Center>
              </Editable>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} pb={10}>
                <VStack spacing={2}>
                  <Editable id="point1" placeholder={data.point1}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point1" value={data.point1}
                        onChange={(e) => setPoint1(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="point3" placeholder={data.point3}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point3" value={data.point3}
                        onChange={(e) => setPoint3(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="point5" placeholder={data.point5}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point5" value={data.point5}
                        onChange={(e) => setPoint5(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="point7" placeholder={data.point7}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point7" value={data.point7}
                        onChange={(e) => setPoint7(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </VStack>
                <VStack spacing={2}>
                  <Editable id="point2" placeholder={data.point2}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point2" value={data.point2}
                        onChange={(e) => setPoint2(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="point4" placeholder={data.point4}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point4" value={data.point4}
                        onChange={(e) => setPoint4(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="point6" placeholder={data.point6}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point6" value={data.point6}
                        onChange={(e) => setPoint6(e.target.value)}
                      />
                    </Center>
                  </Editable>
                  <Editable id="point8" placeholder={data.point8}>
                    <Center>
                      <EditablePreview />
                      <EditableInput
                        fontSize={'lg'} name="point8" value={data.point8}
                        onChange={(e) => setPoint8(e.target.value)}
                      />
                    </Center>
                  </Editable>
                </VStack>
              </SimpleGrid>
            </Box>
          </Stack>

        </Stack>
      </form>
      <HStack pb={2} spacing={6} direction={['column', 'row']} justify="center" mb={5} >
        <Button
          bg={'red.400'}
          color={'white'}
          w="150px"
          _hover={{
            bg: 'red.500',
          }}
          onClick={() => navigate("/edit-home")}
        >
          Cancel
        </Button>
        <Button
          bg={'blue.400'}
          color={'white'}
          w="150px"
          _hover={{
            bg: 'blue.500',
          }}
          type='submit'
          onClick={handleUpdateData}
          >
          Save Changes
        </Button>
      </HStack>
    </Container>
  )
}

export default EditAboutNepal