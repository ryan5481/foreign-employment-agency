import React, { useState, useEffect, useRef } from "react"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import {
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
    Center,
    Editable,
    EditableInput,
    EditablePreview,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    CheckCircleIcon,
    MoonIcon,
    SunIcon
} from '@chakra-ui/icons'

interface Props {
    children: React.ReactNode
}

export default function EditNavbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate()

    //GET
    const [menuItems, setMenuItems] = useState([]);

    const fecthNavBarItems = async () => {
        try {
            const res = await axios.get("http://localhost:8000/get-menu-items")
            const data = res.data.data
            setMenuItems(data)

        } catch (error) {
            console.error("Error: ", error)
        }
    }

    useEffect(() => {
        fecthNavBarItems()
    }, [])

    return (
        <Box
            h={'92.5vh'}
            bg={useColorModeValue('purple.800', 'purple.800')}
            color={'purple.100'}
            justifyContent='center'
            top={'10vh'}
        >
            <Box className='header'>
                <Flex
                    bg={useColorModeValue('white', 'blue.800')}
                    color={useColorModeValue('gray.800', 'white')}
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
                            w={260}
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}
                        // onClick={() => navigate("/")}
                        />

                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <Center>
                                <DesktopNav 
                                menuItems={menuItems}
                                fecthNavBarItems={fecthNavBarItems}
                                 />
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
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>

                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
            </Box>
        </Box>
    )
}

const DesktopNav = (props) => {
    const linkHoverColor = useColorModeValue('gray.200', 'white')
    const popoverContentBgColor = useColorModeValue('white', 'gray.800')
    const navigate = useNavigate();
    const [isFocused, setIsFocused] = useState(null); // Initialize as null
    //PUT
    const [subLabels, setSubLabels] = useState('')
    const [subHrefs, setSubHrefs] = useState('')

    const initialLabels = props.menuItems.map(item => item.label || '');
    const initialHrefs = props.menuItems.map(item => item.href || '');
    const [labels, setLabels] = useState(initialLabels);
    const [hrefs, setHrefs] = useState(initialHrefs);
    
    const handleEditNavbar = async (e, itemId, index) => {
        e.preventDefault()
        const updatedLabel = labels[index]
        const updatedHref = hrefs[index]

        const requestData = {
            _id: itemId,
            label: updatedLabel,
            href: updatedHref,
          };
        try {
          // Send a PUT request to the backend to update the label
          const response = await axios.put(`http://localhost:8000/admin/edit-menu-item`, requestData, {
            headers: {
                'Content-Type': 'application/json', // Specify JSON content type
              },
          });
    
          if (response.status === 200) {
            props.fetchNavBarItems();
          }
        } catch (error) {
          console.error('Error updating label:', error);
        }
      };
  

    return (
        <Stack direction={'row'} spacing={4} fontWeight="bold"
            colorScheme='purple'
        >
            {props.menuItems.map((navItem, index) => (
                <>
                    <form onSubmit={handleEditNavbar}>

                        <Box key={navItem._id}
                            fontWeight="bold"
                            onFocus={() => setIsFocused(navItem.label)}
                            onBlur={() => setIsFocused(null)}
                            tabIndex={0}
                        >
                            <Popover trigger={'hover'} placement={'bottom-start'}  >
                                <PopoverTrigger>
                                    <Box
                                        as="a"
                                        p={2}
                                        fontSize={'md'}
                                        fontWeight={500}
                                    >
                                        <Editable
                                            id={navItem.label}
                                            placeholder={navItem.label}
                                            px={1} rounded={'10px'}
                                            isPreviewFocusable={true}
                                        >
                                            <EditablePreview />
                                            <EditableInput 
                                            type="text" name='label' 
                                            onChange={(e) => {
                                                const updatedLabels = [...labels]
                                                updatedLabels[index] = e.target.value
                                                setLabels(updatedLabels)
                                            }} 
                                            />
                                        </Editable>
                                        <Editable id={navItem.href} placeholder={navItem.href} px={1} rounded={'10px'}>
                                            <EditablePreview fontWeight="thin" />
                                            <EditableInput 
                                            type="text" 
                                            name='href' 
                                            onChange={(e) => {
                                                const updatedHrefs = [...hrefs]
                                                updatedHrefs[index] = e.target.value
                                                setHrefs(updatedHrefs)
                                            }} 
                                            />
                                        </Editable>
                                        {isFocused === navItem.label && (
                                                <Icon
                                                    color={'green.400'}
                                                    _hover={{ color: "green" }}
                                                    w={8}
                                                    h={8}
                                                    pt={1}
                                                    pb={2}
                                                    as={CheckCircleIcon}
                                                    onClick={(e)=>handleEditNavbar(e, navItem._id, index)}
                                                />
                                        )}
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
                                                />
                                            ))}
                                        </Stack>
                                    </PopoverContent>
                                )}
                            </Popover>
                        </Box>
                    </form>

                </>
            ))}
        </Stack>
    )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    const linkHoverColor = useColorModeValue('gray.200', 'white');
    const [isFocused, setIsFocused] = useState(null); // Initialize as null

    return (
        <Box
            as="a"
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            color={'blue.500'}
            _hover={{ color: linkHoverColor, bg: useColorModeValue('purple.300', 'gray.900'), rounded: '10px' }}
        >
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all 0.3s ease'}
                        _groupHover={{ color: 'white.400' }}
                        fontWeight={500}>
                        <Editable
                            id={label}
                            placeholder={label}
                            px={2}
                            rounded={'10px'}
                            value={label}
                            onChange={(value) => {
                                // Handle changes here
                            }}
                            onFocus={() => setIsFocused(label)}
                            onBlur={() => setIsFocused(null)}
                            tabIndex={0}
                        >
                            <EditablePreview />
                            <EditableInput type="text" name="field1" />
                        </Editable>
                        <Editable id={href} placeholder={href} px={1} rounded={'10px'} onFocus={() => setIsFocused(label)}
                            onBlur={() => setIsFocused(null)}
                            tabIndex={0} >
                            <EditablePreview fontWeight="thin" />
                            <EditableInput type="text" name='href' />
                        </Editable>
                    </Text>
                </Box>
                {isFocused === label && (
                    <Icon color={'green.400'} _hover={{ color: "green" }} w={8} h={8} pt={1} pb={2} as={CheckCircleIcon} />
                )}
            </Stack>

        </Box>
    );
};


const MobileNav = () => {
    return (
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }} fontWeight="bold">
            {NAV_ITEMS.map((navItem) => (
                // <MobileNavItem key={navItem.label} {...navItem} onClick={navItem.slug} />
                <Editable id="field1" placeholder='' bg={'purple.500'} px={1} rounded={'10px'}>
                    <EditablePreview />
                    <EditableInput type="text" name="field1" />
                </Editable>
            ))}
        </Stack>
    )
}

const MobileNavItem = ({ label, children }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
    const [isEditing, setIsEditing] = useState(false);

    const handleEditStart = () => {
        setIsEditing(true);
    };

    const handleEditEnd = () => {
        setIsEditing(false);
    };

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Box
                onMouseDown={handleEditStart}
                py={2}
                as="a"
                justifyContent="space-between"
                alignItems="center"
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
                    <Editable
                        id={label}
                        placeholder={label}
                        px={2}
                        rounded={'10px'}
                        value={label}
                        onChange={(value) => {
                            // Handle changes here
                        }}
                        isPreviewFocusable={false}
                        isEditing={isEditing}
                        onSubmit={handleEditEnd}
                    >
                        <EditablePreview />
                        <EditableInput type="text" name="field1" />
                    </Editable>
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
    );
};


interface NavItem {
    label: string,
    subLabel?: string,
    children?: Array<NavItem>
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Home',
        href: '',
        urlPath: "",
    },

    {
        label: 'Jobs',
        href: 'jobs',
    },

    {
        label: 'Resume',
        href: "resume"
    },

    {
        label: 'Documentation',
        href: 'license',
        children: [
            {
                label: 'Licenses',
                subLabel: '',
                href: 'license',
            },
            {
                label: 'Newspaper Ads',
                subLabel: '',
                href: 'newspaper',
            },
        ],
    },
    {
        label: 'About Us',
        href: 'about',
        children: [
            {
                label: 'About Nepal',
                subLabel: '',
                href: 'about-nepal',
            },
            {
                label: 'Why Choose Us',
                subLabel: '',
                href: 'choose-us',
            },
        ],
    },

    {
        label: 'Gallery',
        href: 'gallery',
    },
    {
        label: 'Contact Us',
        href: 'contact',
    },

]