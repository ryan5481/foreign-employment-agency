import { Fragment, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Progress,
  Grid,
  RadioGroup,
  Radio,
  Spacer,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  Stack,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  Center,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import axios from "axios"
const baseUrl = process.env.REACT_APP_BASE_URL 


const Form1 = ({ formData, setFormData }) => {
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const jobIdFromQuery = queryParams.get('jobId');

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }

  return (
    <Box
      color={useColorModeValue('blue.700', 'gray.1000')}
    >
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Personal Information
      </Heading>
      <Flex>

        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="job-code" fontWeight={'normal'}>
            Job code
          </FormLabel>
          <Input id="jobCode" placeholder="Job code" value={jobIdFromQuery || ''} readOnly />
        </FormControl>
        {/* <FormControl display='flex' alignItems='center' mr="5%" py={2}>
          <Center>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Don't have a job code
            </FormLabel>
            <Switch id='email-alerts' />
          </Center>
        </FormControl> */}
      </Flex>
      {/* NAME ADDRESS */}
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="full-name" fontWeight={'normal'}>
            Full name
          </FormLabel>
          <Input id="fullName" placeholder="Full name" required="true" value={formData['fullName'] || ''} onChange={handleInputChange} />
        </FormControl>

        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="address" fontWeight={'normal'}>
            Address
          </FormLabel>
          <Input id="address" placeholder="Address" value={formData['address'] || ''} onChange={handleInputChange} />
        </FormControl>
      </Flex>
      {/* NATIONALITY PASSPORT */}
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="nationality" fontWeight={'normal'}>
            Nationality
          </FormLabel>
          <Input id="nationality" placeholder="Nationality" value={formData['nationality'] || ''} onChange={handleInputChange} />
        </FormControl>

        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="passport-number" fontWeight={'normal'}>
            Passport number
          </FormLabel>
          <Input id="passportNumber" placeholder="Passport number" value={formData['passportNumber'] || ''} onChange={handleInputChange} />
        </FormControl>

        <FormControl id="gender" py={2}>
          <FormLabel>Gender</FormLabel>
          <Select placeholder='Select one' value={formData['gender'] || ''} onChange={handleInputChange} >
            <option>Male</option>
            <option>Female</option>
          </Select>
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="place-of-issue" fontWeight={'normal'}>
            Place of issue
          </FormLabel>
          <Input id="placeOfIssue" placeholder="Place of issue" value={formData['placeOfIssue'] || ''} onChange={handleInputChange} />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="expiry-date" fontWeight={'normal'}>
            Expiry date
          </FormLabel>
          <Input id="expiryDate"  placeholder="Expiry date" value={formData['expiryDate'] || ''} onChange={handleInputChange} />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="date-of-birth" fontWeight={'normal'}>
            Date of birth
          </FormLabel>
          <Input id="dateOfBirth"  placeholder="Date of birth" value={formData['dateOfBirth'] || ''} onChange={handleInputChange} />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="height" fontWeight={'normal'}>
            Height
          </FormLabel>
          <Input id="height" type='number' placeholder="In ft" value={formData['height'] || ''} onChange={handleInputChange} />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="weight" fontWeight={'normal'}>
            Weight
          </FormLabel>
          <Input id="weight" type='number' placeholder="In kg" value={formData['weight'] || ''} onChange={handleInputChange} />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormControl id="maritalStatus" >
            <FormLabel>Marital Status</FormLabel>
            <Select placeholder='Married' value={formData['maritalStatus'] || ''} onChange={handleInputChange}>
              <option>Single</option>
              <option>Married</option>
            </Select>
          </FormControl>
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="children" fontWeight={'normal'}>
            Children
          </FormLabel>
          <Input id="children" placeholder="Children" type='number' value={formData['children'] || ''} onChange={handleInputChange} />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="religion" fontWeight={'normal'}>
            Religion
          </FormLabel>
          <Input id="religion" placeholder="Religion" value={formData['religion'] || ''} onChange={handleInputChange} />
        </FormControl>
      </Flex>
    </Box>
  )
}

const Form2 = ({ formData, setFormData }) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }

  return (
    <Box color={useColorModeValue('blue.700', 'gray.1000')}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Qualification
      </Heading>
      <Heading as='h2' size='md' align={'left'} py={2}>Language Proficeincy</Heading>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} gap={5} id='arabic'>
        <Fragment>
          <Center>
            <Heading as='h4' align="center" size='sm' py={2} >Arabic</Heading>
          </Center>
          <FormControl id="arabic.speaking" >
            <FormLabel>Speaking</FormLabel>
            <Select placeholder='Select one' value={formData['arabic.speaking'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="arabic.listening" value={formData['arabic.listening'] || ''} onChange={handleInputChange}>
            <FormLabel>Listening</FormLabel>
            <Select placeholder='Select one'>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="arabic.reading">
            <FormLabel>Reading</FormLabel>
            <Select placeholder='Select one' value={formData['arabic.reading'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="arabic.writing">
            <FormLabel>Writing</FormLabel>
            <Select placeholder='Select one' value={formData['arabic.writing'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
        </Fragment>
      </Grid>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} gap={5} id='english'>
        <Fragment>
          <Center>
            <Heading as='h4' align="center" size='sm' py={2} >English</Heading>
          </Center>
          <FormControl id="english.speaking" >
            <FormLabel>Speaking</FormLabel>
            <Select placeholder='Select one' value={formData['english.speaking'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="english.listening" value={formData['english.listening'] || ''} onChange={handleInputChange}>
            <FormLabel>Listening</FormLabel>
            <Select placeholder='Select one'>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="english.reading">
            <FormLabel>Reading</FormLabel>
            <Select placeholder='Select one' value={formData['english.reading'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="english.writing">
            <FormLabel>Writing</FormLabel>
            <Select placeholder='Select one' value={formData['english.writing'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
        </Fragment>
      </Grid>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} gap={5} id='hindi'>
        <Fragment>
          <Center>
            <Heading as='h4' align="center" size='sm' py={2} >Hindi</Heading>
          </Center>
          <FormControl id="hindi.speaking" >
            <FormLabel>Speaking</FormLabel>
            <Select placeholder='Select one' value={formData['hindi.speaking'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="hindi.listening" value={formData['hindi.listening'] || ''} onChange={handleInputChange}>
            <FormLabel>Listening</FormLabel>
            <Select placeholder='Select one'>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="hindi.reading">
            <FormLabel>Reading</FormLabel>
            <Select placeholder='Select one' value={formData['hindi.reading'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
          <FormControl id="hindi.writing">
            <FormLabel>Writing</FormLabel>
            <Select placeholder='Select one' value={formData['hindi.writing'] || ''} onChange={handleInputChange}>
              <option>Excellent</option>
              <option>Good</option>
              <option>Fair</option>
              <option>Poor</option>
            </Select>
          </FormControl>
        </Fragment>
      </Grid>
     
      <Spacer />
      <Heading as='h2' size='md' align={'left'} py={2}>Education</Heading>
      <RadioGroup defaultValue='SLC'
        id='education'
        value={formData['education'] || ''}
        onChange={(value) => handleInputChange({target: {id: 'education', value}})}
        py={2}>
        <Stack direction={{ base: "column", sm: "column", md: "row", lg: "row" }}>
          <Radio value="Under SLC">Under SLC</Radio>
          <Radio value="SLC">SLC</Radio>
          <Radio value="+2">+2</Radio>
          <Radio value="Bachelors">Bachelors</Radio>
          <Radio value="Masters">Masters</Radio>
        </Stack>
      </RadioGroup> 
      <Spacer />
      <Heading as='h2' size='md' align={'left'} py={2}>Work Experience In Nepal</Heading>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5} id='nepalWorkExp'>
        <FormControl id="workExpNepal.field" py={2}>
          <FormLabel>Field</FormLabel>
          <Input
            placeholder="Field"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={formData['workExpNepal.field'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="workExpNepal.employer" py={2}>
          <FormLabel htmlFor='nepali-employer' >Employer</FormLabel>
          <Input
            placeholder="Employer"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={formData['workExpNepal.employer'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="workExpNepal.duration" py={2} >
          <FormLabel >Duration</FormLabel>
          <Input
            placeholder="In years"
            _placeholder={{ color: 'gray.500' }}
            type="number"
            value={formData['workExpNepal.duration'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="workExpNepal.address" py={2}>
          <FormLabel>Address</FormLabel>
          <Input
            placeholder="Address"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={formData['workExpNepal.address'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>
      <Spacer />
      <Heading as='h2' size='md' align={'left'} py={2}>Overseas Work Experience</Heading>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5} id='overseasWorkExp'>
        <FormControl id="workExpOverseas.field" py={2}>
          <FormLabel>Field</FormLabel>
          <Input
            placeholder="Field"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={formData['workExpOverseas.field'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="workExpOverseas.employer" py={2}>
          <FormLabel>Employer</FormLabel>
          <Input
            placeholder="Employer"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={formData['workExpOverseas.employer'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="workExpOverseas.duration" py={2} >
          <FormLabel>Duration</FormLabel>
          <Input
            placeholder="In years"
            _placeholder={{ color: 'gray.500' }}
            type="number"
            value={formData['workExpOverseas.duration'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl id="workExpOverseas.country" py={2}>
          <FormLabel>Country</FormLabel>
          <Input
            placeholder="Country"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={formData['workExpOverseas.country'] || ''} 
            onChange={handleInputChange}
          />
        </FormControl>
      </Grid>

      <Heading as='h3' size='md' align={'left'} py={2} >Other Skills</Heading>
      <Textarea 
      placeholder='Write your other skills.' 
      id='otherSkills' 
      value={formData['otherSkills'] || ''} 
      onChange={handleInputChange}/>
    </Box>
  )
}

const Form3 = ({ formData, setFormData }) => {

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }))
  }
  return (
    <Box color={useColorModeValue('blue.700', 'gray.1000')}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Contact Information
      </Heading>
      <SimpleGrid columns={1} spacing={6}>

        <FormControl mt={1}>

          <FormControl mr="5%" py={2}>
            <FormLabel htmlFor="agent-name" fontWeight={'normal'}>
              Agent name
            </FormLabel>
            <Input id="agentName" placeholder="Agent name" value={formData['agentName'] || ''} onChange={handleInputChange} />
          </FormControl>
          <Flex py={2} >
            <FormControl mr="5%">
              <FormLabel htmlFor="phone-number" fontWeight={'normal'}>
                Phone number
              </FormLabel>
              <Input id="phoneNumber" type='number' placeholder="Phone number" value={formData['phoneNumber'] || ''} onChange={handleInputChange}/>
            </FormControl>
            <FormControl mr="5%">
              <FormLabel htmlFor="email" fontWeight={'email'}>
                Email
              </FormLabel>
              <Input id="email"  placeholder="Email" value={formData['email'] || ''} onChange={handleInputChange} />
            </FormControl>
          </Flex>

          <Flex py={2}>
            <FormControl mr="5%">
              <FormLabel htmlFor="home-number" fontWeight={'normal'} >
                Home phone number
              </FormLabel>
              <Input id="homeNumber"  type='number' placeholder="Home number" value={formData['homeNumber'] || ''} onChange={handleInputChange}/>
            </FormControl>
            <FormControl mr="5%">
              <FormLabel htmlFor="relatives-number" fontWeight={'normal'}>
                Relative's number
              </FormLabel>
              <Input id="relativesNumber" type='number' placeholder="Relatives number" value={formData['relativesNumber'] || ''} onChange={handleInputChange}/>
            </FormControl>

          </Flex>
        </FormControl>
      </SimpleGrid>
    </Box>
  )
}

const MultiStepForm = () => {
  const toast = useToast()
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33.33)
  const [formData, setFormData] = useState({
          jobCode: '',
          fullName: '',
          gender: '',
          address: '',
          nationality: '',
          passportNumber: '',
          placeOfIssue: '',
          expiryDate: '',
          dateOfBirth: '',
          height: '',
          weight: '',
          maritalStatus: '',
          religion: '',
          arabic: {
            speaking: '',
            listening: '',
            reading: '',
            writing: '',
          },
          english: {
            speaking: '',
            listening: '',
            reading: '',
            writing: '',
          },
          hindi: {
            speaking: '',
            listening: '',
            reading: '',
            writing: '',
          },
          education: '',
          workExpNepal:  {
            field: '',
            employer: '',
            duration: '',
            address: '',
          },
          workExpOverseas:  {
            field: '',
            employer: '',
            duration: '',
            country: '',
          },
          otherSkills: '',
          phoneNumber: '',
          email: '',
          homeNumber: '',
          relativesNumber: ''
  });
  const navigate = useNavigate()

  const handleFormSubmit = async () => {
    try {
      const res = await axios.post(`${baseUrl}/submit-resume`, formData)
      if (res.status === 200) {
        toast({
          title: 'Form submitted.',
          description: 'Your form has been successfully submitted.',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top'
        });
        navigate("/")
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {
      
    }
  }

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
        bg={useColorModeValue('gray.50', 'gray.1000')}
        color={useColorModeValue('blue.700', 'gray.1000')}
      >
        <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
        <FormControl>
        {step === 1 ? (
          <Form1 formData={formData} setFormData={setFormData} />
        ) : step === 2 ? (
          <Form2 formData={formData} setFormData={setFormData} />
        ) : (
          <Form3 formData={formData} setFormData={setFormData} />
        )}        
        </FormControl>
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1)
                  setProgress(progress - 33.33)
                }}
                isDisabled={step === 1}
                colorScheme="blue"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1)
                  if (step === 3) {
                    setProgress(100)
                  } else {
                    setProgress(progress + 33.33)
                  }
                }}
                colorScheme="blue"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  handleFormSubmit()
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  )
}

export default MultiStepForm