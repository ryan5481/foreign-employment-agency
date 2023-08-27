import React, { useState } from "react";

import {
  Button,
  Grid,
  Checkbox,
  Spacer,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Textarea,
  Center,
  Select,
  Spacer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Checkbox,
  CheckboxGroup
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

const ResumeForm = () => {
  const dummyPfp =
    "https://tse1.mm.bing.net/th?id=OIP.mrnwgUJLZElTBKNfz89bZQAAAA";
  const [pfpImage, setPfpImage] = useState(null);
  const [pfpImageRender, setPfpImageRender] = useState(dummyPfp);
  const setPfpImageFunction = (e) => {
    setPfpImage(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      setPfpImageRender(URL.createObjectURL(e.target.files[0]));
    }
  };

  const languages = ["Arabic", "English", "Hindi"]

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      p={5}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>

      <Stack
        spacing={4}
        w={'full'}
        maxW="85%"
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Post Resume
        </Heading>
        <FormControl id="userName">
          <FormLabel>Photo</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <div className="pfp-input loginElement">
                <input
                  name="pfpImgName"
                  type="file"
                  id="pfpInput"
                  onChange={(e) => setPfpImageFunction(e)}
                  hidden
                />
                <label htmlFor="pfpInput" className=" pfpInput-img">
                  <img
                    src={pfpImageRender}
                    className="profileButton pfpInput-img"
                    style={{ height: "200px", border: "5px", borderRadius: "5px" }}

                  ></img>
                  <div className="img-overlay-mid">
                    <div className="img-overlay-text">Upload Photo</div>
                  </div>
                </label>
              </div>
              {/* <Image boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' /> */}
              {/* <AvatarBadge  as={IconButton}  size="sm"  rounded="full"  top="-10px"  colorScheme="red"   aria-label="remove Image"  icon={<SmallCloseIcon />} /> */}

            </Center>
            {/* <div style={{ verticalAlign: "center" }}>  <Button w="320px" htmlFor="pfpInput">Select Image</Button>   </div> */}
          </Stack>
        </FormControl>
        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr' }} gap={6}>
          <FormControl>
            <FormLabel>Country Applying For</FormLabel>
            <Select placeholder='Select country'>
              <option>United Arab Emirates</option>
              <option>Qatar</option>
              <option>Oman</option>
              <option>Malaysia</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Position Applying For</FormLabel>
            <Select placeholder='Select position'>
              <option>Construction</option>
              <option>Security Guard</option>
              <option>Care Giver</option>
              <option>Hotel and Catering</option>
            </Select>
          </FormControl>
        </Grid>

        <Spacer />
        <Spacer />
        <Heading as='h2' size='sm' align={'left'}>Personal Details</Heading>
        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }} gap={6}>
          <FormControl id="fullName" isRequired>
            <FormLabel>Full name</FormLabel>
            <Input
              placeholder="Full Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>


          <FormControl>
            <FormLabel>Gender</FormLabel>
            <Select placeholder='Select gender'>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Nationality</FormLabel>
            <Select placeholder='Select country'>
              <option>Nepal</option>
              <option>India</option>
              <option>Bangladesh</option>
              <option>Pakistan</option>
            </Select>
          </FormControl>

          <FormControl id="placeOfBirth" isRequired>
            <FormLabel>Place of birth</FormLabel>
            <Input
              placeholder="Kathmandu"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="religion" isRequired>
            <FormLabel>Religion</FormLabel>
            <Input
              placeholder="religion"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <FormControl id="dateOfBirth" isRequired>
              <FormLabel>Date of birth</FormLabel>
              <Input
                _placeholder={{ color: 'gray.500' }}
                type="date"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Age</FormLabel>
              <NumberInput size='md' maxW={24} defaultValue={15} min={18} max={30}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <FormControl id='height' >
              <FormLabel>Height</FormLabel>
              <NumberInput size='md' maxW={24} defaultValue={160}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </Grid>


          <FormControl id="passportNumber" isRequired>
            <FormLabel>Passport Number</FormLabel>
            <Input
              placeholder="Passport Number"
              _placeholder={{ color: 'gray.500' }}
              type="number"
            />
          </FormControl>
          <FormControl id="placeOfIssue" isRequired>
            <FormLabel>Place of Issue</FormLabel>
            <Input
              placeholder="Place of Issue"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="expiryDate" isRequired>
            <FormLabel>Expiry Date</FormLabel>
            <Input
              _placeholder={{ color: 'gray.500' }}
              type="date"
            />
          </FormControl>
          <FormControl id="maritalStatus">
            <FormLabel>Marital status</FormLabel>
            <Select placeholder='Select one'>
              <option>Single</option>
              <option>Married</option>
              <option>Seperated</option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel>Children</FormLabel>
            <NumberInput size='md' maxW={24} min={0} defaultValue={0}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <FormControl id="phoneNumber" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="Phone number"
              _placeholder={{ color: 'gray.500' }}
              type="number"
            />
          </FormControl>
          <FormControl id="relativesNumber" isRequired>
            <FormLabel>Relative's Number</FormLabel>
            <Input
              placeholder="Relative's Number"
              _placeholder={{ color: 'gray.500' }}
              type="number"
            />
          </FormControl>
          <FormControl id="agentName" isRequired>
            <FormLabel>Agent's Name</FormLabel>
            <Input
              placeholder="Agent's Name"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Email"
              _placeholder={{ color: 'gray.500' }}
              type="number"
            />
          </FormControl>
        </Grid>
        <Spacer />
        <Spacer />
        <Heading as='h2' size='sm' align={'left'}>Language Proficeincy</Heading>
        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} gap={5} id='arabic'>
          {languages.map((language, index) => (
            <>
              <>
                <Heading as='h4' align="center" size='sm'  >{language}</Heading>
                <FormControl id="speaking">
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
        <Spacer />

        <Heading as='h2' size='sm' align={'left'}>Education</Heading>
        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} columnGap={0} gap={5} id='education'>
          <CheckboxGroup>
            <Checkbox defaultChecked>Under SLC</Checkbox>
            <Checkbox >SLC</Checkbox>
            <Checkbox >+2</Checkbox>
            <Checkbox >Bachelors</Checkbox>
            <Checkbox >Masters</Checkbox>
          </CheckboxGroup>
        </Grid>
        <Spacer />
        <Heading as='h2' size='sm' align={'left'}>Work Experience In Nepal</Heading>
        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5} id='nepalWorkExp'>
          <FormControl id="employer" >
            <FormLabel>Employer</FormLabel>
            <Input
              placeholder="Employer"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="duration" >
            <FormLabel>Duration</FormLabel>
            <Input
              placeholder="Duration"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="Address" >
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="Address"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
        </Grid>
        <Spacer />
        <Heading as='h2' size='sm' align={'left'}>Overseas Work Experience</Heading>
        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr ' }} gap={5} id='overseasWorkExp'>
          <FormControl id="employer" >
            <FormLabel>Employer</FormLabel>
            <Input
              placeholder="Employer"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="duration" >
            <FormLabel>Duration</FormLabel>
            <Input
              placeholder="Duration"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
          <FormControl id="Country" >
            <FormLabel>Country</FormLabel>
            <Input
              placeholder="Country"
              _placeholder={{ color: 'gray.500' }}
              type="text"
            />
          </FormControl>
        </Grid>

        <Heading as='h3' size='sm' align={'left'}>Other Skills</Heading>
        <Textarea placeholder='Write your other skills.' />



        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancel
          </Button>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}

export default ResumeForm