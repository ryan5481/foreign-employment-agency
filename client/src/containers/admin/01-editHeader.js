import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import {
    Box,
    useColorModeValue,
    Stack,
    HStack,
    Center,
    Heading,
    Editable,
    EditableInput,
    EditablePreview,
    Button,
} from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook, FaFacebookMessenger } from 'react-icons/fa'



const EditHeader = () => {
    const initialFocusRef = React.useRef()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        regdNo: "Regd.No. 66236/066/067",
        licNo: "© Lic. No.: 0123456789",
        email: "info@skywaynepal.com",
        phone: "+977-123456788",
      });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here, you can handle the form submission, e.g., send data to a backend server
        // console.log("Form submitted with data:", formData);
        // After successful submission, you can navigate to the desired page
        navigate("/adminpanel");
      };

    return (<>
        <Box
            h={'100vh'}
            p={2}
            bg={useColorModeValue('purple.500', 'purple.800')}
            color={'purple.100'}
            pt={100}
        >
            <form onSubmit={handleSubmit}>
            <Heading color={useColorModeValue('purple.50', 'purple.200')} p={10}> Edit Header </Heading>

            <Stack
                bg='gray.900'
                as={Stack}
                maxW={'full'}
                maxH={500}
                p={2}
                direction={{ base: 'column', md: 'row', sm: 'row' }}
                spacing={{ base: 4, md: 6, lg: 8 }}
                justify={{ base: 'center', md: 'space-between', sm: 'flex-start' }}
                align={{ base: 'center', md: 'center', sm: 'flex-start' }}
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
                </Stack>
                <Stack direction={{ base: 'column', md: 'row', sm: 'row' }}>
                    <Stack align={'center'} justify={'center'}>
                        <FaWhatsapp />
                        <Editable defaultValue="info@skywaynepal.com" bg={'purple.500'} px={1} rounded={'10px'}>

                            <EditablePreview />
                            <EditableInput px={2} rounded={'10px'} />
                        </Editable>
                    </Stack>
                    <Stack align={'center'} justify={'center'}>
                        <FaFacebook />
                        <Editable defaultValue="info@skywaynepal.com" bg={'purple.500'} px={1} rounded={'10px'}>

                            <EditablePreview />
                            <EditableInput px={2} rounded={'10px'} />
                        </Editable>
                    </Stack>
                    <Stack align={'center'} justify={'center'}>
                        <FaFacebookMessenger />
                        <Editable defaultValue="info@skywaynepal.com" bg={'purple.500'} px={1} rounded={'10px'}>

                            <EditablePreview />
                            <EditableInput px={2} rounded={'10px'} />
                        </Editable>
                    </Stack>
                </Stack>

            </Stack>
            <HStack spacing={6} direction={['column', 'row']} pt={5} justify="center">
                <Button

                    bg={'red.400'}
                    color={'white'}
                    w="300px"
                    _hover={{
                        bg: 'red.500',
                    }}
                    onClick={() => navigate("/adminpanel")}
                >
                    Cancel
                </Button>
                <Button
                    bg={'blue.400'}
                    color={'white'}
                    w="300px"
                    _hover={{
                        bg: 'blue.500',
                    }}
                    type='submit'>
                    Submit
                </Button>
            </HStack>
            </form>
        </Box>

    </>)
}

export default EditHeader