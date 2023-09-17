import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    Flex,
    Button,
    VStack,
    Box,
    Container,
    Textarea,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    Spacer,
    Center,
    Editable,
    EditablePreview,
    EditableInput,
    useColorModeValue,
    useToast,
   
} from "@chakra-ui/react"
import { CheckIcon } from "@chakra-ui/icons";
const baseUrl = process.env.REACT_APP_BASE_URL 

const EditWhyChooseUs = () => {
    const toast = useToast()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [selectedImage, setSelectedImage] = useState(null)
    const [displaySelectedImage, setDisplaySelectedImage] = useState(null);
    const imageInputRef = useRef();

    const [topImage, setTopImage] = useState('')
    const [imageTitle, setImageTitle] = useState('')
    const [textTitle, setTextTitle] = useState('')
    const [tagline, setTagine] = useState('')
    const [paragraph, setParagraph] = useState('')
    const [featureTitle1, setFeatureTitle1] = useState('')
    const [featureText1, setFeatureText1] = useState('')
    const [featureTitle2, setFeatureTitle2] = useState('')
    const [featureText2, setFeatureText2] = useState('')
    const [featureTitle3, setFeatureTitle3] = useState('')
    const [featureText3, setFeatureText3] = useState('')
    const [featureTitle4, setFeatureTitle4] = useState('')
    const [featureText4, setFeatureText4] = useState('')
    const [featureTitle5, setFeatureTitle5] = useState('')
    const [featureText5, setFeatureText5] = useState('')
    const [featureTitle6, setFeatureTitle6] = useState('')
    const [featureText6, setFeatureText6] = useState('')
    const [featureTitle7, setFeatureTitle7] = useState('')
    const [featureText7, setFeatureText7] = useState('')
    const [featureTitle8, setFeatureTitle8] = useState('')
    const [featureText8, setFeatureText8] = useState('')



    //GET
    const fetchWhyChooseUsData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-choose-us`);
            const data = res.data.data;

            setTopImage(`data:image/jpeg;base64,${data.heroImage}`)
            setImageTitle(data.imageTitle)
            setTextTitle(data.textTitle)
            setTagine(data.tagline)
            setParagraph(data.paragraph)
            setFeatureTitle1(data.featureTitle1)
            setFeatureText1(data.featureText1)
            setFeatureTitle2(data.featureTitle2)
            setFeatureText2(data.featureText2)
            setFeatureTitle3(data.featureTitle3)
            setFeatureText3(data.featureText3)
            setFeatureTitle4(data.featureTitle4)
            setFeatureText4(data.featureText4)
            setFeatureTitle5(data.featureTitle5)
            setFeatureText5(data.featureText5)
            setFeatureTitle6(data.featureTitle6)
            setFeatureText6(data.featureText6)
            setFeatureTitle7(data.featureTitle7)
            setFeatureText7(data.featureText7)
            setFeatureTitle8(data.featureTitle8)
            setFeatureText8(data.featureText8)
            setData(data);


        } catch (error) {
            console.error("Error: ", error);
        }
    };
    console.log()

    useEffect(() => {
        fetchWhyChooseUsData();
    }, []);

    //PUT
    const handleImageSelect = (event) => {
        setSelectedImage(event.target.files[0]);
        if (event.target.files && event.target.files[0]) {
            setDisplaySelectedImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const handleUpdateData = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            if (selectedImage) {
                formData.append('heroImage', selectedImage, selectedImage.filename);
            }
            formData.append('_id', data._id);
            formData.append('imageTitle', imageTitle);
            formData.append('textTitle', textTitle);
            formData.append('tagline', tagline);
            formData.append('paragraph', paragraph);
            formData.append('featureTitle1', featureTitle1);
            formData.append('featureText1', featureText1);
            formData.append('featureTitle2', featureTitle2);
            formData.append('featureText2', featureText2);
            formData.append('featureTitle3', featureTitle3);
            formData.append('featureText3', featureText3);
            formData.append('featureTitle4', featureTitle4);
            formData.append('featureText4', featureText4);
            formData.append('featureTitle5', featureTitle5);
            formData.append('featureText5', featureText5);
            formData.append('featureTitle6', featureTitle6);
            formData.append('featureText6', featureText6);
            formData.append('featureTitle7', featureTitle7);
            formData.append('featureText7', featureText7);
            formData.append('featureTitle8', featureTitle8);
            formData.append('featureText8', featureText8);

            const res = await axios.put(`${baseUrl}/admin/edit-choose-us`, formData);
            if (res.status === 200) {
                toast({
                    title: 'Success.',
                    description: 'Data Updated.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top'
                });
                fetchWhyChooseUsData()
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
            console.error('Error adding sector:', error);
            toast({
                title: 'Error.',
                description: "Could not connect to server.",
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top'
            });
        }
    };

    return (
        <>
            <form
                onSubmit={handleUpdateData}
            >
                <Box pb={5}>
                    <Box  >
                        <Flex
                            className='hero-pic'
                            w={'full'}
                            backgroundImage={
                                displaySelectedImage || topImage
                            }
                            backgroundSize={'cover'}
                            backgroundPosition={'center center'}
                            h={400}
                            onClick={() => imageInputRef.current.click()}
                            cursor="pointer"
                            transition="0.15s ease-in-out"
                            _hover={{
                                filter: "brightness(0.6)"
                            }}
                        >
                            <Box>

                            </Box>
                            <input
                                type="file"
                                style={{ display: 'none' }}
                                id="fileInput"
                                accept="image/*"
                                ref={imageInputRef}
                                onChange={handleImageSelect}
                            />
                            <VStack
                                w={'full'}
                                justify={'center'}
                                px={6}
                                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>


                                    <Stack direction={'row'}>
                                        <Button
                                            bg={'blue.400'}
                                            rounded={'full'}
                                            color={'white'}
                                            _hover={{ bg: 'blue.500' }}
                                        // onClick={() => navigate("/jobs")}
                                        >
                                            See all jobs
                                        </Button>
                                        <Button
                                            bg={'whiteAlpha.300'}
                                            rounded={'full'}
                                            color={'white'}
                                            _hover={{ bg: 'whiteAlpha.500' }}
                                        // onClick={() => navigate("/resume")}
                                        >
                                            Apply now
                                        </Button>
                                    </Stack>
                                </Stack>
                            </VStack>
                        </Flex>
                        <Editable id="imageTitle" placeholder={data.imageTitle} fontWeight={700} lineHeight={1.2} fontSize="3xl" >
                            <Center>
                                <EditablePreview />
                                <EditableInput px={2} rounded={'10px'} type="text" name="imageTitle" value={data.imageTitle} onChange={(e) => setImageTitle(e.target.value)} />
                            </Center>
                        </Editable>
                    </Box>
                    <Box>
                        <Box p={4} color={useColorModeValue('blue.700', 'gray.400')} justifySelf="center" >
                            <Stack spacing={4} as={Container} maxW={'3xl'} align={'center'} textAlign={'center'}>
                                <Editable w={"80%"} id="textTitle" placeholder={data.textTitle} fontWeight={700} lineHeight={1.2} fontSize="3xl" >
                                    <EditablePreview />
                                    <EditableInput px={2} rounded={'10px'} type="text" name="heading1" value={data.textTitle} onChange={(e) => setTextTitle(e.target.value)} />
                                </Editable>
                                <Editable w={"80%"} id="tagline" placeholder={data.tagline} lineHeight={1.2} fontSize="xl" color={useColorModeValue('blue.600', 'gray.400')} >
                                    <EditablePreview />
                                    <EditableInput px={2} rounded={'10px'} type="text" name="tagline" value={data.tagline} onChange={(e) => setTagine(e.target.value)} />
                                </Editable>
                            </Stack>
                            <Spacer />
                            <br />
                            <Center>

                                <Box maxW={"80%"} p={15}>
                                    <Center>
                                        <Editable id="paragraph" placeholder={data.paragraph} lineHeight={1.2} fontSize="xl" color={useColorModeValue('blue.600', 'gray.400')} >
                                            <EditablePreview />
                                            <EditableInput w={{ base: '300px', sm: '500px', md: '600px', lg: '1000px' }} h={{ base: '800px', sm: '600px', md: '400px', lg: '400px' }} as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="paragraph" value={data.paragraph} onChange={(e) => setParagraph(e.target.value)} />
                                        </Editable>
                                    </Center>
                                </Box>
                            </Center>

                            <Container maxW={'6xl'} mt={10}>
                                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} color={useColorModeValue('blue.700', 'gray.400')}>

                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle1" placeholder={data.featureTitle1} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle1" value={data.featureTitle1} onChange={(e) => setFeatureTitle1(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText1" placeholder={data.featureText1} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText1" value={data.featureText1} onChange={(e) => setFeatureText1(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>
                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle2" placeholder={data.featureTitle2} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle2" value={data.featureTitle2} onChange={(e) => setFeatureTitle2(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText2" placeholder={data.featureText2} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText2" value={data.featureText2} onChange={(e) => setFeatureText2(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>
                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle3" placeholder={data.featureTitle3} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle2" value={data.featureTitle3} onChange={(e) => setFeatureTitle3(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText3" placeholder={data.featureText3} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText3" value={data.featureText3} onChange={(e) => setFeatureText3(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>
                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle4" placeholder={data.featureTitle4} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle4" value={data.featureTitle4} onChange={(e) => setFeatureTitle4(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText4" placeholder={data.featureText4} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText4" value={data.featureText4} onChange={(e) => setFeatureText4(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>
                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle5" placeholder={data.featureTitle5} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle5" value={data.featureTitle5} onChange={(e) => setFeatureTitle5(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText5" placeholder={data.featureText5} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText5" value={data.featureText5} onChange={(e) => setFeatureText5(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>
                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle6" placeholder={data.featureTitle6} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle2" value={data.featureTitle6} onChange={(e) => setFeatureTitle6(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText6" placeholder={data.featureText6} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText6" value={data.featureText6} onChange={(e) => setFeatureText6(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>
                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle7" placeholder={data.featureTitle7} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle7" value={data.featureTitle7} onChange={(e) => setFeatureTitle7(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText7" placeholder={data.featureText7} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText7" value={data.featureText7} onChange={(e) => setFeatureText7(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>
                                    <HStack align={'top'}>
                                        <Box color={'green.400'} px={2}>
                                            <Icon as={CheckIcon} />
                                        </Box>
                                        <VStack align={'start'}>
                                            <Editable id="featureTitle8" placeholder={data.featureTitle8} fontWeight={600}  >
                                                <EditablePreview />
                                                <EditableInput px={2} rounded={'10px'} type="text" name="featureTitle2" value={data.featureTitle8} onChange={(e) => setFeatureTitle8(e.target.value)} />
                                            </Editable>
                                            <Editable align={'left'} id="featureText8" placeholder={data.featureText8} >
                                                <EditablePreview />
                                                <EditableInput as={Textarea} size="lg" px={2} rounded={'10px'} type="text" name="featureText8" value={data.featureText8} onChange={(e) => setFeatureText8(e.target.value)} />
                                            </Editable>
                                        </VStack>
                                    </HStack>

                                </SimpleGrid>
                            </Container>
                        </Box>
                    </Box>
                    <HStack pb={2} spacing={6} direction={['column', 'row']} justify="center">
                        <Button
                            bg={'red.400'}
                            color={'white'}
                            w="150px"
                            _hover={{
                                bg: 'red.500',
                            }}
                            onClick={() => navigate("/edit-home")}
                        >
                            Cancel
                        </Button>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            w="150px"
                            _hover={{
                                bg: 'blue.500',
                            }}
                            type='submit'>
                            Save Changes
                        </Button>
                    </HStack>
                </Box>
            </form>
        </>
    )
}

export default EditWhyChooseUs