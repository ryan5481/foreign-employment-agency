import { useNavigate } from 'react-router-dom'
import ScrollDiv from '../../components/animation/scrollDiv'
import {
    Box,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    List,
    ListItem,
} from '@chakra-ui/react'

const jobsList = [
    {
        imageUrl: "https://assets.aboutamazon.com/dims4/default/3924cae/2147483647/strip/false/crop/4048x1609+0+0/resize/1486x591!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F37%2F41%2Fb9b693c243978d81d7da62581288%2Fkuwait.jpg",
        title: "Restaurant Manager",
        category: "Operations",
        countryAndCity: "Kuwait, Doha",
        salary: "NRs. 200,000",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis porro, quae, quisquam quos reprehenderit velit? Natus, totam.",
        type: "Full time",
        housingFacility: "Yes",
        workHoursPerWeek: 45,
        responsiblities: {
            1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            4: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            5: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            6: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            7: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            8: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            9: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            10: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",

        },
        skillsRequired: {
            1: "Ad aliquid amet at delectus",
            2: "Ad aliquid amet at delectus",
            3: "Ad aliquid amet at delectus",
            4: "Ad aliquid amet at delectus",
            5: "Ad aliquid amet at delectus",
            6: "Ad aliquid amet at delectus",
            7: "Ad aliquid amet at delectus",
            8: "Ad aliquid amet at delectus",
            9: "Ad aliquid amet at delectus",
            10: "Ad aliquid amet at delectus",
        }
    }
]

const JobDescription = () => {
    const navigate = useNavigate()
    return (
        <Flex p={5} w="full" alignItems="center" justifyContent="center" className="animated-div" bg={useColorModeValue('teal.50', 'gray.1000')}>
            {/* <ScrollDiv> */}
                <Box
                    bg={useColorModeValue('white', 'gray.800')}
                    w={'100%'}
                    borderWidth="1px"
                    rounded="10px"
                    shadow="lg"
                    position="relative"
                >

                    <Flex>
                        <Image
                            roundedTop={'md'}
                            alt={'job description image'}
                            src={
                                "https://assets.aboutamazon.com/dims4/default/3924cae/2147483647/strip/false/crop/4048x1609+0+0/resize/1486x591!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F37%2F41%2Fb9b693c243978d81d7da62581288%2Fkuwait.jpg"
                            }
                            fit={'cover'}
                            align={'center'}
                            w={{ sm: '100%', lg: '80%' }}
                            h={{ base: '50%', sm: '200px', lg: '250px' }}
                        />
                    </Flex>
                    <Box p="6">
                        <Flex mt="1" justifyContent="center" alignContent="center">
                            <Box
                                fontSize="2xl"
                                fontWeight="semibold"
                                as="h4"
                                lineHeight="tight"
                                isTruncated
                                textAlign="center"
                            >
                                <Stack spacing={{ base: 6, md: 10 }}>
                                    <Box as={'header'}>
                                        <Heading
                                            lineHeight={1.1}
                                            fontWeight={600}
                                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
                                            color={useColorModeValue('blue.500', 'blue.300')}
                                        >
                                            Restaurant Operations Manager
                                        </Heading>
                                        <Text
                                            color={useColorModeValue('gray.900', 'gray.400')}
                                            fontWeight={300}
                                            fontSize={'2xl'}
                                            pt={5}
                                        >
                                            NRs. 200,000 per month
                                        </Text>
                                    </Box>

                                    <Stack
                                        spacing={{ base: 4, sm: 6 }}
                                        direction={'column'}
                                        divider={
                                            <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
                                        }>
                                        <VStack spacing={{ base: 4, sm: 6 }}>
                                            <Text
                                                color={useColorModeValue('gray.500', 'gray.400')}
                                                fontSize={'2xl'}
                                                fontWeight={'300'}>
                                                Short description short description short description short description short description.
                                            </Text>

                                        </VStack>
                                        <Box textAlign={'left'}>
                                            <Text
                                                fontSize={{ base: '20px', lg: '24px' }}
                                                color={useColorModeValue('blue.500', 'blue.300')}
                                                fontWeight={'700'}
                                                textTransform={'uppercase'}
                                                mb={'4'}
                                            >
                                                Details
                                            </Text>

                                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} fontSize={{ base: '14px', lg: '18px' }}>
                                                <List spacing={2}>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Country / City:
                                                        </Text>{' '}
                                                        Qatar, Doha
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Category:
                                                        </Text>{' '}
                                                        Operations
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Type:
                                                        </Text>{' '}
                                                        Full Time
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Work Hours:
                                                        </Text>{' '}
                                                        9:00 - 18:00
                                                    </ListItem>

                                                </List>
                                                <List spacing={2}>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Day Off:
                                                        </Text>{' '}
                                                        Saturday, Sunday
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Housing:
                                                        </Text>{' '}
                                                        Yes
                                                    </ListItem>
                                                    <ListItem>
                                                        <Text as={'span'} fontWeight={'bold'}>
                                                            Food:
                                                        </Text>{' '}
                                                        No
                                                    </ListItem>
                                                </List>
                                            </SimpleGrid>
                                        </Box>
                                        <Box textAlign={'left'}>
                                            <Text
                                                fontSize={{ base: '20px', lg: '24px' }}
                                                color={useColorModeValue('blue.500', 'blue.300')}
                                                fontWeight={'700'}
                                                textTransform={'uppercase'}
                                                mb={'4'}>
                                                Responsiblities
                                            </Text>
                                            <List spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                <ListItem>
                                                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    3. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    4. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    6. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    7.  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    8. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    9. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    10.  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                            </List>
                                        </Box>
                                        <Box textAlign={'left'}>
                                            <Text
                                                fontSize={{ base: '20px', lg: '24px' }}
                                                color={useColorModeValue('blue.500', 'blue.300')}
                                                fontWeight={'700'}
                                                textTransform={'uppercase'}
                                                mb={'4'}>
                                                Skills Required
                                            </Text>
                                            <List spacing={2} fontSize={{ base: '14px', lg: '18px' }} fontWeight={'400'}>
                                                <ListItem>
                                                    1. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    2. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    3. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    4. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    6. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    7.  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    8. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    9. Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                                <ListItem>
                                                    10.  Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                                </ListItem>
                                            </List>
                                        </Box>
                                    </Stack>
                                    <Box
                                        align='center'
                                    >
                                        <Button variant='solid' colorScheme='blue' rounded='full' w={200} h={45} size={'md'} onClick={() => navigate("/resume")}>
                                            Apply now
                                        </Button>

                                    </Box>
                                </Stack>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            {/* </ScrollDiv> */}
        </Flex>
    )
}

export default JobDescription

