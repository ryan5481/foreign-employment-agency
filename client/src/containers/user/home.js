import { useNavigate } from "react-router-dom"
import { Box, Heading, Grid, Flex, Button, useColorModeValue, Card, Divider, CardBody, Image, Badge, Stack, StackDivider, CardFooter, ButtonGroup } from "@chakra-ui/react"
import Carousel from "../../components/header/Carousel/carousel"
import CallToActionWithVideo from "../../components/card/callToActionWithVideo"
import ImageParagraph from "../../components/card/imageParagraph1"
import ImageParagraph2 from "../../components/card/imageParagraph2"
import StatisticsCard from "../../components/card/statsCard"
import TestimonialCard from "../../components/card/testimonialCard"
import CategoryCard from "../../components/card/categoryCard"
import BlogArticleCard from "../../components/card/blogArticleCard"
import SimpleCard from "../../components/card/simpleCard"
import Procedure from "../../components/stepper"
import CarouselSmall from "../../components/header/Carousel/carouselSmall"
import ImageCarousel from "../../components/header/Carousel/SmoothCarousel2"
import ResponsiveGrid from "../../components/card/statsCard"
import BarChart from "../../components/animation/barChart"
import SmoothCarousel from "../../components/header/Carousel/SmoothCarousel"
const Home = () => {
    const navigate = useNavigate()

    const jobsList = [
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Security Guard',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Chef',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Caretaker',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Construction Worker',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Green double couch with wooden legs',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Green double couch with wooden legs',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Green double couch with wooden legs',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Green double couch with wooden legs',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Green double couch with wooden legs',
            new: true
        },
        {
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt: 'Green double couch with wooden legs',
            new: true
        },
    ]
    const slicedJobsList = jobsList.slice(0, 5)
    const categories = [
        {
            imageUrl: "https:images.pexels.com/photos/2324837/pexels-photo-2324837.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Medical & Hospital"
        },
        {
            imageUrl: "https://images.pexels.com/photos/945177/pexels-photo-945177.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Cruize"
        },
        {
            imageUrl: "https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Construction"
        },
        {
            imageUrl: "https://images.pexels.com/photos/6060192/pexels-photo-6060192.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Oil & Gas Refinery"
        },
        {
            imageUrl: "https://images.pexels.com/photos/3769144/pexels-photo-3769144.jpeg?auto=compress&cs=tinysrgb&w=600600",
            title: "Hotel & Bars"
        },
        {
            imageUrl: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Engineering"
        },
        {
            imageUrl: "https://images.pexels.com/photos/1119152/pexels-photo-1119152.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Security"
        },
        {
            imageUrl: "https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Aviation"
        },
        {
            imageUrl: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Medical & Hospital"
        },
        {
            imageUrl: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Medical & Hospital"
        },
        {
            imageUrl: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Medical & Hospital"
        },
        {
            imageUrl: "https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=600",
            title: "Medical & Hospital"
        },
    ]

    return (
        <>
            <Box bg={useColorModeValue('teal.50', 'gray.1000')} alignContent={'center'}>
                <Box>
                    <Carousel />
                </Box>
                {/* ABOUT US */}
                <Box maxW={'full'} bg={useColorModeValue('blue.500', 'gray.1000')}>
                    <CallToActionWithVideo />
                </Box>
                {/* MESSAGES */}
                <Box>
                    <ImageParagraph />
                </Box>
                <Box>
                    <ImageParagraph2 />
                </Box>
                {/* OUR VALUABLE CLIENTS */}
                <Box>
                    <BlogArticleCard />
                </Box>
                {/* JOB SECTORS */}
                <Box >
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}
                        color={useColorModeValue('blue.600', 'gray.1000')}
                    >
                        Sectors We Work In
                    </Heading>
                    <Box color={useColorModeValue('blue.600', 'gray.200')}
                    >
                        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                            <SimpleCard categories={categories} />
                        </Grid>
                    </Box>
                </Box>
                {/* LATEST JOBS */}
                <Box 
                maxW={'full'} 
                bg={useColorModeValue('blue.600', 'gray.1000')}
                color='white'
                >
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}>
                        Latest Jobs
                    </Heading>
                    <Box>
                        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr', xl: '1fr 1fr 1fr 1fr 1fr', '2xl': '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                            {slicedJobsList.map((job, index) => {
                                return (<>

                                    <Card maxW='sm'
                                        boxShadow={'2xl'}
                                        p={2}
                                        _hover={{ boxShadow: "0 0 0 2px rgba(251, 251, 251, 3)" }}
                                        transition="box-shadow 0.3s"
                                        rounded="10px"
                                    >
                                        <CardBody w='100%' h='10' bg='' >
                                            <Image
                                                src={job.src}
                                                alt={job.alt}
                                                borderRadius='lg'
                                            />
                                            <Box display='flex' alignItems='baseline' p="2">
                                                <Badge borderRadius='full' colorScheme='teal'>
                                                    New
                                                </Badge>
                                            </Box>
                                            <Stack mt='1' spacing='3'>
                                                <Heading size='md'>{job.alt}</Heading>
                                            </Stack>
                                        </CardBody>
                                        <Divider />
                                        <CardFooter alignContent={'middle'} align="center">
                                            <ButtonGroup spacing='3' >
                                                <Button variant='ghost' colorScheme='blue' rounded='full' onClick={() => navigate("/job-description")}>
                                                    Details
                                                </Button>
                                                <Button variant='solid' colorScheme='blue' rounded='full' onClick={() => navigate("/resume")}>
                                                    Apply now
                                                </Button>
                                            </ButtonGroup>
                                        </CardFooter>
                                    </Card>
                                </>)
                            })}
                        </Grid>
                    </Box>
                    <Flex p={10} w="full" alignItems="center" justifyContent="center">
                        <Button
                            bg={'whiteAlpha.800'}
                            rounded={'full'}
                            color={'blue.500'}
                            _hover={{ bg: 'whiteAlpha.900', color: 'blue.600' }}
                            onClick={() => navigate("/jobs")}
                        >
                            View All Jobs
                        </Button>
                    </Flex>
                </Box>
                <Divider />
                {/* OPERATING PROCEDURE */}
                <Box alignContent={'center'} align="center"
                    color={useColorModeValue('blue.700', 'gray.1000')}
                >
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                        Operating Procedure
                    </Heading>
                    <Box >
                        <Procedure />
                    </Box>
                </Box>
                {/* TESTIMONIALS */}
                <Box>
                    <TestimonialCard />
                </Box>
                <Stack>
                    <Box align="center"
                        bg={useColorModeValue('blue.600', 'gray.700')}
                        color={useColorModeValue('gray.100', 'gray.50')}>
                        <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                            Our Clients
                        </Heading>
                        {/* CLIENTS CAROUSEL */}
                        <Box>
                            <SmoothCarousel />
                        </Box>
                        <Box color={useColorModeValue('blue.600', 'gray.500')} pb={50}>
                            {/* STASTISTICS */}
                            <Heading color={useColorModeValue('gray.100', 'gray.50')} m={2} fontSize={'4xl'} fontFamily={'body'} p={10} mb={30} minH={'200px'}>
                                Sky Way Nepal Statistics
                            </Heading>
                            <BarChart labels={['Countries', 'Jobs', 'Sectors']} bg={['yellow.400', 'red.400', 'green.400']} />
                            <StatisticsCard />
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </>
    )
}

export default Home