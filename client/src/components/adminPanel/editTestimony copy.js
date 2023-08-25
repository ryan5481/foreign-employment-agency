import React, { useState, useEffect, useRef } from 'react'
import axios, { isCancel } from 'axios'
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  Input,
  useColorModeValue,
  Textarea,
  VStack,
  Button
} from '@chakra-ui/react'

interface Props {
  children: React.ReactNode
}


const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      w={{ base: "95%", md: "95%", lg: "400px" }}
      p={5}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={'xl'} w="100%"
    >
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      w="100%"
      h="100%"
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}

      fontSize={'sm'}>
      {children}
    </Text>
  )
}

const EditTestimony = () => {

  const [testimonyData, setTestimonyData] = useState([])

  //PUT
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [imageTitle, setImageTitle] = useState('');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const [imageTitles, setImageTitles] = useState('')
  const [names, setNames] = useState('')
  const [descriptions, setDescriptions] = useState('')
  const [addresses, setAddresses] = useState('')

  const imageInputRef = useRef();


  const fetchTestimonies = async () => {
    try {
      const res = await axios.get('http://localhost:8000/get-testimonies');
      const newData = await res.data.data
      setTestimonyData(newData)
      const initialImageTitles = newData.map(array => array.imageTitle || '')
      setImageTitles(initialImageTitles)
      const initialnames = newData.map(array => array.name || '')
      setNames(initialnames)
      const initialDescriptions = newData.map(array => array.description || '')
      setDescriptions(initialDescriptions)
      const initialAddresses = newData.map(array => array.address || '')
      setAddresses(initialAddresses)


      // setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false);
    }
  };


  // EDIT
  const handleTestimonyEdit = async (event, imageId, index) => {
    event.preventDefault()
    const updatedImageTitle = imageTitles[index]
    const updatedName= names[index]
    const updateddescription = setDescriptions[index]
    const updatedAddress = address[index]

      try {
        const data = await axios.put(`http://localhost:8000/edit-homepage/update-testimony`, {
          _id: imageId,
          imageTitle: updatedImageTitle,
          name:updatedName,
          description:updateddescription,
          address:updatedAddress
        })
        if(data){
          fetchTestimonies();
        setSelectedImageFile(null);
        }
      } catch (error) {

        console.error("Error updating image: ", error)
      }
    
  }

    const handleNewImageSelect = (event) => {
        setSelectedImageFile(event.target.files[0])
    }

  useEffect(() => {
    fetchTestimonies();
  }, [])

  return (
    <Box
      bg={useColorModeValue('blue.600', 'gray.700')}

    >
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'} color='white'>
          <Heading>What Our Clients Say</Heading>
          <Text>We have been finding overseas jobs for clients from all over Nepal</Text>
        </Stack>


        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          color={useColorModeValue('blue.700', 'gray.1000')}
          justify="center"
        >
          {testimonyData.map((testimony, index) => {
            return (<>
              <form key={testimony._id}
                onSubmit={(event) => handleTestimonyEdit(event, testimony._id)}
              >

                <VStack  >

                  <TestimonialContent>
                    <TestimonialHeading>
                      <Input
                        w="100%"
                        textAlign="center"
                        fontWeight="bold"
                        value={imageTitles[index]}
                        onChange={(e) => {
                          const updatedTitles = [...imageTitles]
                          updatedTitles[index] = e.target.value
                          setImageTitles(updatedTitles)
                      }}
                      >
                      </Input>
                    </TestimonialHeading>
                    <TestimonialText >
                      <Textarea
                        value={descriptions[index]}
                        onChange={(e) => {
                          const updatedDescriptions = [...descriptions]
                          updatedDescriptions[index] = e.target.value
                          setDescriptions(updatedDescriptions)
                      }}
                      >
                      </Textarea>
                    </TestimonialText>
                  </TestimonialContent>

                  <Avatar
                    mt={5}
                    src={`data:image/jpeg;base64,${testimony.testimonyImage}`}
                    alt={testimony.name}
                    onClick={() => imageInputRef.current.click()}
                  />
                  <input
                    type='file'
                    accept="image/*"
                    style={{ display: "none" }}
                    ref={imageInputRef}
                    onChange={handleNewImageSelect}
                  />
                  <Input
                    textAlign="center"
                    width="200"
                    color="gray.100"
                    fontWeight={600}
                    value={names[index]}
                    onChange={(e) => {
                      const updatedNames = [...names]
                      updatedNames[index] = e.target.value
                      setNames(updatedNames)
                  }}
                  ></Input>
                  <Input
                    textAlign="center"
                    width="200"
                    color="gray.100"
                    fontSize={'sm'}
                    value={addresses[index]}
                    onChange={(e) => {
                      const updatedAddresses = [...addresses]
                      updatedAddresses[index] = e.target.value
                      setAddresses(updatedAddresses)
                  }}
                  >
                  </Input>
                  <Button
                    type='submit'
                  >Save Changes</Button>
                </VStack>
              </form>
            </>)
          })}
        </Stack>

      </Container>
    </Box>
  )
}

export default EditTestimony