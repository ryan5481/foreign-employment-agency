import { useNavigate } from 'react-router-dom'
import { UseSelector, useDispatch } from 'react-redux'
import { resetLoginDetails } from '../../redux/reducers/userSllice'

import {
  Menu, MenuButton, HStack, Avatar, VStack, MenuList, MenuItem, MenuDivider,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  useColorMode,
  Image,
  Center
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons'
import {FiChevronDown} from 'react-icons/fi'
import { useSelector } from 'react-redux'

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

export default function AdminNavBar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch()
  const{fullName} = useSelector((state) => state.user)
  const navigate = useNavigate()

  const handleSignOut = () => {
    dispatch(resetLoginDetails())
    navigate("/adminlogin")
  }

  const handelEditProfileButtonClick = () => {
    navigate("/profile")
}

  return (
    <Box className='header'>
      <Flex
        bg={'purple.900'}
        color={useColorModeValue('gray.100', 'gray.100')}
        minH={'70px'}
        py={{ base: 0 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderBottomColor={'blue.200'}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            src="https://skywaynepal.com/static/media/logo2.ac770f9fccbae96efac0.jpg"
            w={200}
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            onClick={() => navigate("/")}
          />

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <Center>
              <DesktopNav />
            </Center>
          </Flex>
        </Flex>
        {/* toggle dark/light modes */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          <Button onClick={toggleColorMode} m={2} >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          
        </Stack>
        <Menu w={"100%"}
        >
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
                  <Text fontSize="xs" color="gray.100">
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
              color={useColorModeValue('purple.700', 'purple.100')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem onClick={handelEditProfileButtonClick}>Edit Profile</MenuItem>
              {/* <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem onClick={() => handleSignOut()}>Sign out</MenuItem>
            </MenuList>
          </Menu>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkHoverColor = useColorModeValue('gray.200', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')
  const navigate = useNavigate();

  return (
    <Stack direction={'row'} spacing={4} fontWeight="bold">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} fontWeight="bold">
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={500}
                color='gray.100'
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                  bg: 'blue.400',
                  rounded: '10px',
                  shadow: 'md'
                }}
                onClick={() => navigate(navItem.urlPath || "/")}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                color='gray.600'
                rounded={'10px'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label} {...child}
                      _hover={{
                        textDecoration: 'none',
                        color: linkHoverColor,
                        bg: 'blue.400',
                        rounded: '10px',
                      }}
                      onClick={() => navigate("/" + navItem?.children?.urlPath)}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const linkHoverColor = useColorModeValue('gray.200', 'white')

  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      color={'blue.500'}
      _hover={{ color: linkHoverColor, bg: useColorModeValue('blue.400', 'gray.900'), rounded: '10px' }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all 0.3s ease'}
            _groupHover={{ color: 'white.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'} color={'white.400'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'white.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }} fontWeight="bold">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} onClick={navItem.slug} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string,
  subLabel?: string,
  children?: Array<NavItem>
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Header',
    href: '',
    urlPath: '/edit-header',
  },
  {
    label: 'NavBar',
    href: '',
    urlPath: '/edit-navbar',
  },
  {
    label: 'Home',
    href: '',
    urlPath: '/edit-homepage',
  },

  {
    label: 'Jobs',
    href: '/edit-jobspage',
  },

  {
    label: 'Resume',
    href: "/edit-resumepage"
  },

  {
    label: 'Documentation',
    href: '/edit-docspage',
  },
  {
    label: 'About Us',
    href: '/edit-aboutuspage',
  },

  {
    label: 'Gallery',
    href: '/edit-gallerypage',
  },
  {
    label: 'Contact Us',
    href: '/edit-contactuspage',
  },
  {
    label: 'Footer',
    href: '/edit-footer',
  },

]