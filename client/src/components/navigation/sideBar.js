import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { resetLoginDetails } from '../../redux/reducers/userSllice'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Button,
  useColorMode,

} from '@chakra-ui/react'
import{MoonIcon,
  SunIcon} from '@chakra-ui/icons'
import {
  FiHome,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import {BiSolidBriefcaseAlt2, BiSolidInfoSquare} from 'react-icons/bi'
import {PiNewspaperClippingFill} from 'react-icons/pi'
import {BsFillChatLeftTextFill} from 'react-icons/bs'
import {IoIosPaper} from 'react-icons/io'
import {FaImages} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {CgToolbarTop, CgToolbarBottom} from 'react-icons/cg'
import {TfiLayoutMenuSeparated} from 'react-icons/tfi'
import { IconType } from 'react-icons'


interface LinkItemProps {
  name: string,
  icon: IconType
}

interface NavItemProps extends FlexProps {
  icon: IconType,
  children: React.ReactNode
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const LinkItems: Array <LinkItemProps> = [
  { name: 'Header', icon: CgToolbarTop, href: '/edit-header' },
  { name: 'Navbar', icon: TfiLayoutMenuSeparated, href: '/edit-navbar' },
  { name: 'Home', icon: AiFillHome, href: '/edit-homepage' },
  { name: 'Jobs', icon: BiSolidBriefcaseAlt2, href: '/edit-jobspage' },
  { name: 'Resume', icon: PiNewspaperClippingFill, href: '/edit-resumepage' },
  { name: 'Documentation', icon: IoIosPaper, href: '/edit-certificatepage' },
  { name: 'About Us', icon: BiSolidInfoSquare, href: '/edit-aboutuspage' },
  { name: 'Gallery', icon: FaImages, href: '/edit-gallerypage' },
  { name: 'Contact Us', icon: BsFillChatLeftTextFill, href: '/edit-contactuspage' },
  { name: 'Footer', icon: CgToolbarBottom, href: '/edit-footer' },
]

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Image src="https://skywaynepal.com/static/media/logo2.ac770f9fccbae96efac0.jpg"></Image>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} href={link.href}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  )
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const{fullName} = useSelector((state) => state.user)

  const handleSignOut = () => {
    dispatch(resetLoginDetails())
    navigate("/adminlogin")
  }

  const handelEditProfileButtonClick = () => {
    navigate("/profile")
}

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Sky Way Nepal
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton p={1} size="lg" variant="ghost" aria-label="open menu" icon={<FiBell />} />
        <Button m={2} onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>        
          <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{fullName}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem onClick={handelEditProfileButtonClick}>Edit Profile</MenuItem>
              {/* <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem onClick={()=>handleSignOut()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const Sidebar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSignOut = () => {
    dispatch(resetLoginDetails())
    navigate("/adminlogin")
  }

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/* Content */}
      </Box>
    </Box>
  )
}

export default Sidebar