import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import bcrypt from "bcrypt"
import axios from 'axios'
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
    Text,
    AvatarBadge,
    IconButton,
    Center,
    useToast
} from '@chakra-ui/react'
const baseUrl = process.env.REACT_APP_BASE_URL 

export default function ChangePassword() {
    const toast = useToast()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useSelector((state) => state.user)
    const [currentPassword, setCurrentPassword] = useState('');
const [newPassword, setNewPassword] = useState('');
const [retypePassword, setRetypePassword] = useState('');
const [isOldPasswordCorrect, setIsOldPasswordCorrect] = useState(false);

    useEffect(() => {
        if(id){
            GetPass()
        }
    }, [id])

    const GetPass = async () => {
        // console.log('GetPass function called');
        try{
            const res = await axios.get(`${baseUrl}/admin/get-pass/${id}`)
            setCurrentPassword(res.data.pass)
            
        }catch(error){
            console.log(error)
        }
    }

    const checkOldPassword = async() => {
        const isOldPassCorrect = await bcrypt.compare(currentEncryptPass, "Hello@123")
    }
    console.log(isOldPassCorrect)
   
    const handelCancelButtonClick = () => {
        navigate("/profile");
    }
    
    const handelSubmit = async() => {
        try{
        const res = await axios.put(`${baseUrl}/admin/change-password`)
        if (res) {
                toast({
                    title: 'Success.',
                    description: 'Password Updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                navigate("/profile");
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
            console.error("Error updating image: ", error)
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

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
                    Change Password
                </Heading>
                <FormControl id="currentPassword">
                    
                </FormControl>
                <FormControl id="currentPassword">
                    <FormLabel>Current Password</FormLabel>
                    <Input
                        placeholder="Current password"
                        _placeholder={{ color: useColorModeValue('gray.600', 'gray.300') }}
                        type="password"
                    />

                </FormControl>
                <FormControl id="newPassword">
                    <FormLabel>New Password</FormLabel>
                    <Input
                        placeholder="New password"
                        _placeholder={{ color: useColorModeValue('gray.600', 'gray.300') }}
                        type="password"
                    />
                </FormControl>
                <FormControl id="retypeNewPassword">
                    <FormLabel>Current Password</FormLabel>
                    <Input
                        placeholder="Re-type new password"
                        _placeholder={{ color: useColorModeValue('gray.600', 'gray.300') }}
                        type="password"
                    />

                </FormControl>
                {/* <Text textAlign={"left"} fontWeight={"bold"} color = {useColorModeValue('blue.400', 'blue.300')}>

                <Link>Forgot password</Link>
                </Text> */}
                
                <Stack spacing={6} direction={['column', 'row']}>
                    <Button
                    
                        bg={'red.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'red.500',
                        }}
                        onClick={handelCancelButtonClick}
                        >
                        Cancel
                    </Button>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handelSubmit}>
                        Change Password
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
} 