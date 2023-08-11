import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation, Link } from 'react-router-dom'
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
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

export default function ChangePassword() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
   

    
    const handelCancelButtonClick = () => {
        navigate("/profile");
    }
    
    const handelSubmit = () => {
        navigate("/profile");
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
                <Text textAlign={"left"} fontWeight={"bold"} color = {useColorModeValue('blue.400', 'blue.300')}>

                <Link>Forgot password</Link>
                </Text>
                
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