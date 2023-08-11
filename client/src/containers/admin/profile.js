import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
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
    Avatar,
    AvatarBadge,
    IconButton,
    Center,
    Divider,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons'

export default function Profile() {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { fullName, email } = useSelector((state) => state.user)

    const [fullNameValue, setFullNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [isFullNamePlaceholderVisible, setIsFullNamePlaceholderVisible] = useState(true);
    const [isEmailPlaceholderVisible, setIsEmailPlaceholderVisible] = useState(true);

    const handleFullNameChange = (e) => {
        setFullNameValue(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    };
    const handleFullNameFocus = () => {
        setIsFullNamePlaceholderVisible(false);
    };
    const handleEmailFocus = () => {
        setIsEmailPlaceholderVisible(false);
    };
    const handleFullNameBlur = () => {
        if (fullNameValue === '') {
            setIsFullNamePlaceholderVisible(true);
        }
    };
    const handleEmailBlur = () => {
        if (emailValue === '') {
            setIsEmailPlaceholderVisible(true);
        }
    };
    const handelCancelButtonClick = () => {
        navigate(location.state?.from);
    }
    const navigateToChangePassword = () => {
        navigate("/password");
    }
    const handelSubmit = () => {
        // navigate("/adminpanel");
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
                    Edit Profile
                </Heading>
                <FormControl id="fullName">
                    <FormLabel>Profile Picture</FormLabel>
                    <Stack direction={['column', 'row']} spacing={6}>
                        <Center>
                            <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                                <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                />
                            </Avatar>
                        </Center>
                        <Center w="full">
                            <Button w="full">Change Image</Button>
                        </Center>
                    </Stack>
                </FormControl>
                <FormControl id="fullName">
                    <FormLabel>Full Name</FormLabel>
                    <Input
                        value={fullNameValue}
                        onChange={handleFullNameChange}
                        onFocus={handleFullNameFocus}
                        onBlur={handleFullNameBlur}
                        placeholder={isFullNamePlaceholderVisible ? fullName : ''}
                        _placeholder={{ color: useColorModeValue('gray.600', 'gray.300') }}
                        type="text"
                    />

                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email address</FormLabel>
                    <Input
                        value={emailValue}
                        onChange={handleEmailChange}
                        onFocus={handleEmailFocus}
                        onBlur={handleEmailBlur}
                        placeholder={isEmailPlaceholderVisible ? email : ''}
                        _placeholder={{ color: useColorModeValue('gray.600', 'gray.300') }}
                        type="email"
                    />
                </FormControl>
                
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
                        Submit
                    </Button>
                </Stack>
                <Divider/>
                <Button
                        bg={'gray.500'}
                        color={'white'}
                        w="full"
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={navigateToChangePassword}>
                        Change Password
                    </Button>
            </Stack>
        </Flex>
    )
}