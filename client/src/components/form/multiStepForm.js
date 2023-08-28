import { useState } from 'react'
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
  Switch
} from '@chakra-ui/react'

import { useToast } from '@chakra-ui/react'

const Form1 = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)
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
          <Input id="job-code" placeholder="Job code" />
        </FormControl>
        <FormControl display='flex' alignItems='center' mr="5%" py={2}>
          <Center>
            <FormLabel htmlFor='email-alerts' mb='0'>
              Don't have a job code
            </FormLabel>
            <Switch id='email-alerts' />
          </Center>
        </FormControl>
      </Flex>
      {/* NAME ADDRESS */}
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="full-name" fontWeight={'normal'}>
            Full name
          </FormLabel>
          <Input id="full-name" placeholder="Full name" />
        </FormControl>

        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Address
          </FormLabel>
          <Input id="Address" placeholder="Address" />
        </FormControl>
      </Flex>
      {/* NATIONALITY PASSPORT */}
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="passport" fontWeight={'normal'}>
            Nationality
          </FormLabel>
          <Input id="nationality" placeholder="Nationality" />
        </FormControl>

        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="passport" fontWeight={'normal'}>
            Passport number
          </FormLabel>
          <Input id="passport-number" placeholder="Passport number" />
        </FormControl>

        <FormControl id="gender" py={2}>
          <FormLabel>Gender</FormLabel>
          <Select placeholder='Select one'>
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
          <Input id="place-of-issue" placeholder="Place of issue" />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="expiry-date" fontWeight={'normal'}>
            Expiry date
          </FormLabel>
          <Input id="expiry-date" type='date' placeholder="Expiry date" />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="date-of-birth" fontWeight={'normal'}>
            Date of birth
          </FormLabel>
          <Input id="date-of-birth" type='date' placeholder="Date of birth" />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="height" fontWeight={'normal'}>
            Height
          </FormLabel>
          <Input id="height" placeholder="Height" />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="weight" fontWeight={'normal'}>
            Weight
          </FormLabel>
          <Input id="weight" placeholder="Weight" />
        </FormControl>
      </Flex>
      <Flex>
        <FormControl mr="5%" py={2}>
          <FormControl id="speaking" >
            <FormLabel>Marital Status</FormLabel>
            <Select placeholder='Married'>
              <option>Single</option>
              <option>Married</option>
            </Select>
          </FormControl>
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="children" fontWeight={'normal'}>
            Children
          </FormLabel>
          <Input id="children" placeholder="Children" />
        </FormControl>
        <FormControl mr="5%" py={2}>
          <FormLabel htmlFor="religion" fontWeight={'normal'}>
            Religion
          </FormLabel>
          <Input id="religion" placeholder="Religion" />
        </FormControl>
      </Flex>
    </Box>
  )
}

const Form2 = () => {
  const languages = ["Arabic", "English", "Hindi"]

  return (
    <Box color={useColorModeValue('blue.700', 'gray.1000')}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Qualification
      </Heading>
      <Heading as='h2' size='md' align={'left'} py={2}>Language Proficeincy</Heading>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} gap={5} id='arabic'>
        {languages.map((language, index) => (
          <>
            <>
              <Center>

                <Heading as='h4' align="center" size='sm' py={2} >{language}</Heading>
              </Center>
              <FormControl id="speaking" >
                <FormLabel>Speaking</FormLabel>
                <Select placeholder='Select one'>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </Select>
              </FormControl>
              <FormControl id="listening">
                <FormLabel>Listening</FormLabel>
                <Select placeholder='Select one'>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </Select>
              </FormControl>
              <FormControl id="reading">
                <FormLabel>Reading</FormLabel>
                <Select placeholder='Select one'>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </Select>
              </FormControl>
              <FormControl id="writing">
                <FormLabel>Writing</FormLabel>
                <Select placeholder='Select one'>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                </Select>
              </FormControl>
            </>
          </>
        ))}
      </Grid>
      <Spacer />
      <Heading as='h2' size='md' align={'left'} py={2}>Education</Heading>
      <RadioGroup defaultValue="under_slc" py={2}>
        <Stack direction={{ base: "column", sm: "column", md: "row", lg: "row" }}>
          <Radio value="under_slc">Under SLC</Radio>
          <Radio value="slc">SLC</Radio>
          <Radio value="+2">+2</Radio>
          <Radio value="bachelors">Bachelors</Radio>
          <Radio value="masters">Masters</Radio>
        </Stack>
      </RadioGroup>
      <Spacer />
      <Heading as='h2' size='md' align={'left'} py={2}>Work Experience In Nepal</Heading>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5} id='nepalWorkExp'>
        <FormControl id="field" py={2}>
          <FormLabel>Field</FormLabel>
          <Input
            placeholder="Field"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="employer" py={2}>
          <FormLabel>Employer</FormLabel>
          <Input
            placeholder="Employer"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="duration" py={2} >
          <FormLabel>Duration</FormLabel>
          <Input
            placeholder="Duration"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Address" py={2}>
          <FormLabel>Address</FormLabel>
          <Input
            placeholder="Address"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
      </Grid>
      <Spacer />
      <Heading as='h2' size='md' align={'left'} py={2}>Overseas Work Experience</Heading>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5} id='overseasWorkExp'>
        <FormControl id="field" py={2}>
          <FormLabel>Field</FormLabel>
          <Input
            placeholder="Field"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="employer" py={2}>
          <FormLabel>Employer</FormLabel>
          <Input
            placeholder="Employer"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="duration" py={2} >
          <FormLabel>Duration</FormLabel>
          <Input
            placeholder="Duration"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="Country" py={2}>
          <FormLabel>Country</FormLabel>
          <Input
            placeholder="Country"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
      </Grid>

      <Heading as='h3' size='md' align={'left'} py={2} >Other Skills</Heading>
      <Textarea placeholder='Write your other skills.' />
    </Box>
  )
}

const Form3 = () => {
  return (
    <Box color={useColorModeValue('blue.700', 'gray.1000')}>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Contact Information
      </Heading>
      <SimpleGrid columns={1} spacing={6}>

        <FormControl id="email" mt={1}>

          <FormControl mr="5%" py={2}>
            <FormLabel htmlFor="agent-name" fontWeight={'normal'}>
              Agent name
            </FormLabel>
            <Input id="agent-name" placeholder="Agent name" />
          </FormControl>
          <Flex py={2} >
            <FormControl mr="5%">
              <FormLabel htmlFor="phone-number" fontWeight={'normal'}>
                Phone number
              </FormLabel>
              <Input id="phone-number" placeholder="Phone number" />
            </FormControl>
            <FormControl mr="5%">
              <FormLabel htmlFor="email" fontWeight={'email'}>
                Email
              </FormLabel>
              <Input id="emaile" placeholder="Email" />
            </FormControl>
          </Flex>

          <Flex py={2}>
            <FormControl mr="5%">
              <FormLabel htmlFor="home-number" fontWeight={'normal'}>
                Home number
              </FormLabel>
              <Input id="home-number" placeholder="Home number" />
            </FormControl>
            <FormControl mr="5%">
              <FormLabel htmlFor="relatives-number" fontWeight={'normal'}>
                Relative's number
              </FormLabel>
              <Input id="relatives-number" placeholder="Relatives number" />
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
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
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
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
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