import React from "react"
import {
    Box,
    Input,
    chakra,
    useColorModeValue,
    Stack,
    Center,
    Container,
    Text,
    VisuallyHidden,
    Editable,
    EditableInput,
    EditablePreview,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    ButtonGroup
} from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode,
    label: string,
    href: string,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const EditHeader = () => {
    const initialFocusRef = React.useRef()

    return (<>
        <Box
            h={'100vh'}
            p={2}
            bg={useColorModeValue('purple.200', 'purple.600')}
            color={'purple.100'}
            pt={100}
        >
            <Container
                bg='gray.900'
                as={Stack}
                maxW={'full'}
                maxH={50}
                py={2}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}
                color={'purple.100'}
            >
                <Stack direction={'row'} spacing={6}>
                    <Editable defaultValue="Regd.No. 66236/066/067" bg={'purple.500'} px={1} rounded={'10px'}>
                        <EditablePreview />
                        <EditableInput px={2} rounded={'10px'} />
                    </Editable>
                    <Editable defaultValue="© Lic. No.: 0123456789" bg={'purple.500'} px={1} rounded={'10px'}>
                        <EditablePreview />
                        <EditableInput />
                    </Editable>
                </Stack>

                <Stack direction={'row'} spacing={6}>
                    <Center>
                        <Editable defaultValue="info@skywaynepal.com" bg={'purple.500'} px={1} rounded={'10px'}>
                            <EditablePreview />
                            <EditableInput px={2} rounded={'10px'} />
                        </Editable>
                    </Center>
                    <Center>
                        <Editable defaultValue="+977-123456788" bg={'purple.500'} px={1} rounded={'10px'}>
                            <EditablePreview />
                            <EditableInput px={2} rounded={'10px'} />
                        </Editable>
                    </Center>

                    <Popover
                        initialFocusRef={initialFocusRef}
                        placement='bottom'
                        closeOnBlur={false}
                    >
                        <PopoverTrigger>
                            <Button><FaWhatsapp /></Button>
                        </PopoverTrigger>
                        <PopoverContent color={'purple.100'} bg='blue.800' borderColor='blue.800'>
                            <PopoverHeader color={'purple.100'} pt={4} fontWeight='bold' border='0'>
                                Edit WhatsApp ID
                            </PopoverHeader>
                            <PopoverArrow bg='blue.800' />
                            <PopoverCloseButton />
                            <Center>
                                <Editable defaultValue="9841001122" bg={'purple.500'} maxW={300} px={2} rounded={'10px'} >
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                            </Center>
                            <Center>
                                <PopoverFooter
                                    border='0'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='space-between'
                                    pb={4}>
                                    <Center>
                                        <Button colorScheme='green' size='sm'>Confirm</Button>
                                    </Center>
                                </PopoverFooter>
                            </Center>
                        </PopoverContent>
                    </Popover>
                    <Popover
                        initialFocusRef={initialFocusRef}
                        placement='bottom'
                        closeOnBlur={false}
                    >
                        <PopoverTrigger>
                            <Button><FaFacebookMessenger /></Button>
                        </PopoverTrigger>
                        <PopoverContent color={'purple.100'} bg='blue.800' borderColor='blue.800'>
                            <PopoverHeader color={'purple.100'} pt={4} fontWeight='bold' border='0'>
                                Edit WhatsApp ID
                            </PopoverHeader>
                            <PopoverArrow bg='blue.800' />
                            <PopoverCloseButton />
                            <Center>
                                <Editable defaultValue="9841001122" bg={'purple.500'} maxW={300} px={2} rounded={'10px'} >
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                            </Center>
                            <Center>
                                <PopoverFooter
                                    border='0'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='space-between'
                                    pb={4}>
                                    <Center>
                                        <Button colorScheme='green' size='sm'>Confirm</Button>
                                    </Center>
                                </PopoverFooter>
                            </Center>
                        </PopoverContent>
                    </Popover>
                    <Popover
                        initialFocusRef={initialFocusRef}
                        placement='bottom'
                        closeOnBlur={false}
                    >
                        <PopoverTrigger>
                            <Button><FaWhatsapp /></Button>
                        </PopoverTrigger>
                        <PopoverContent color={'purple.100'} bg='blue.800' borderColor='blue.800'>
                            <PopoverHeader color={'purple.100'} pt={4} fontWeight='bold' border='0'>
                                Edit WhatsApp ID
                            </PopoverHeader>
                            <PopoverArrow bg='blue.800' />
                            <PopoverCloseButton />
                            <Center>
                                <Editable defaultValue="9841001122" bg={'purple.500'} maxW={300} px={2} rounded={'10px'} >
                                    <EditablePreview />
                                    <EditableInput />
                                </Editable>
                            </Center>
                            <Center>
                                <PopoverFooter
                                    border='0'
                                    display='flex'
                                    alignItems='center'
                                    justifyContent='space-between'
                                    pb={4}>
                                    <Center>
                                        <Button colorScheme='green' size='sm'>Confirm</Button>
                                    </Center>
                                </PopoverFooter>
                            </Center>
                        </PopoverContent>
                    </Popover>
                </Stack>
            </Container>
        </Box>
        <Center>
            <Button colorScheme='green' size='sm'>Confirm</Button>
        </Center>
    </>)
}

export default EditHeader