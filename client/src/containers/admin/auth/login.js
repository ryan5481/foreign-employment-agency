import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import axios from 'axios'
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Center,
  useColorModeValue,
} from '@chakra-ui/react'
import { assignUserRole, setLoginDetails } from '../../../redux/reducers/userSllice'
const baseUrl = process.env.REACT_APP_BASE_URL 

const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleInputChange = (event) => {
    // console.log(event); // Log the event to see if it's capturing changes
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // console.log('Form Data:', formData);
      const response = await axios.post(`${baseUrl}/adminlogin`, {
        email: formData.email,
        password: formData.password,
      })

      if(response){
        dispatch(assignUserRole("admin"))
        dispatch(setLoginDetails({
          email: response.data.email,
          id: response.data.id,
          fullName: response.data.fullName,
        })
        )
        navigate("/")
      }else{
        alert("Login failed!")
      }

      // console.log('POST response', response.data);
    } catch (error) {
      console.error('Error:', error.response);
    }
  }


  return (
    <Box>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} color={useColorModeValue('blue.500', 'gray.100')}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>

            <Center><Image w={300} src='https://skywaynepal.com/static/media/logo2.ac770f9fccbae96efac0.jpg'></Image></Center> 
            <Heading fontSize={'2xl'}>C Panel Login</Heading>
            <FormControl>
              <form onSubmit={handleSubmit}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" name="email" onChange={handleInputChange} />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" onChange={handleInputChange} />
                </FormControl>

                <Stack spacing={6}>
                  <Stack
                    direction={{ base: 'column', sm: 'row' }}
                    align={'start'}
                    justify={'space-between'}>
                    {/* <Checkbox>Remember me</Checkbox> */}
                    <Box
                      color={useColorModeValue('blue.500', 'gray.100')}
                      transition="color 0.2s"
                      _hover={{
                        color: 'blue.800',
                        cursor: 'pointer'
                      }}
                    >
                      <Text>Forgot password?</Text>
                    </Box>
                  </Stack>

                  <Button
                    colorScheme={'blue'}
                    variant={'solid'}
                    type='submit'
                  >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </FormControl>

          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    </Box>
  )
}

export default AdminLogin