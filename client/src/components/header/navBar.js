import {
    Box,
    Flex,
    Avatar,
    Text,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {SlPlane} from "react-icons/sl"
import { useNavigate } from "react-router-dom";


interface Props {
    children: React.ReactNode
}

const NavLink = (props: Props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

const NavBar = () => {
    const navigate = useNavigate();
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box onClick={() => navigate("/")}><SlPlane style={{width:"200px"}} /></Box>

                    <Flex alignItems={'center'}>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Home"
                            my={5}
                            w="100%"
                            onClick={() => navigate("/")}
                        >
                            Home
                        </Button>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Jobs"
                            my={5}
                            w="100%"
                            onClick={() => navigate("/jobs")}
                        >
                            Jobs
                        </Button>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Resume"
                            my={5}
                            w="100%"
                            onClick={() => navigate("/post-resume")}
                        >
                            Post Resume
                        </Button>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Docs"
                            my={5}
                            w="100%"
                            onClick={() => navigate("/docs")}
                        >
                            Docs
                        </Button>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="About"
                            my={5}
                            w="100%"
                            onClick={() => navigate("/about")}
                        >
                            About
                        </Button>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Gallery"
                            my={5}
                            w="100%"
                            onClick={() => navigate("/gallery")}
                        >
                            Gallery
                        </Button>
                        <Button
                            as="a"
                            variant="ghost"
                            aria-label="Contact"
                            my={5}
                            w="100%"
                            onClick={() => navigate("/contact")}
                        >
                            Contact Us
                        </Button>
                        <Stack direction={'row'} spacing={7}>

                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            {/* <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu> */}
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
}

export default NavBar