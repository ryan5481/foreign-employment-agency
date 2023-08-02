import { Box, Heading, Grid } from "@chakra-ui/react"
import Carousel from "../../components/header/Carousel/carousel"
import CallToActionWithVideo from "../../components/card/callToActionWithVideo"
import ImageParagraph from "../../components/card/imageParagraph1"
import ImageParagraph2 from "../../components/card/imageParagraph2"
import StatisticsCard from "../../components/card/statsCard"
import TestimonialCard from "../../components/card/testimonialCard"
import CategoryCard from "../../components/card/categoryCard"
import BlogArticleCard from "../../components/card/blogArticleCard"
import SimpleCard from "../../components/card/simpleCard"
import Procedure1 from "../../components/stepper1"
import Procedure2 from "../../components/stepper2"
import Procedure3 from "../../components/stepper3"
import Procedure4 from "../../components/stepper4"
import Procedure5 from "../../components/stepper5"
import Procedure6 from "../../components/stepper6"
import CarouselSmall from "../../components/header/Carousel/carouselSmall"
const Home = () => {

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
            <Box>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <CallToActionWithVideo />
                </Box>
                <Box>
                    <ImageParagraph />
                </Box>
                <Box>
                    <ImageParagraph2 />
                </Box>
                <Box>
                    <BlogArticleCard />
                </Box>
                <Box>
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}>
                        Sectors We Work In
                    </Heading>
                    <Box>
                        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                            <SimpleCard categories={categories} />
                        </Grid>
                    </Box>
                </Box>
                <Box>
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}>
                        Latest Jobs
                    </Heading>
                    <Box>
                        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                            <CategoryCard jobsList={jobsList} />
                        </Grid>
                    </Box>
                </Box>
                <Box>
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                    Operating Procedure
                </Heading>
                <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }} p={20} gap={10} pl={20} pr={20}>
                    <Box >
                        <Procedure1 />
                    </Box>
                    <Box >
                        <Procedure2 />
                    </Box>
                    <Box >
                        <Procedure3 />
                    </Box>
                    <Box >
                        <Procedure4 />
                    </Box>
                    <Box >
                        <Procedure5 />
                    </Box>
                    <Box >
                        <Procedure6 />
                    </Box>
                </Grid>
                </Box>
                <Box>
                    <TestimonialCard />
                </Box>
                <Box align="center">
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                    Our Clients
                </Heading>
                <CarouselSmall/>
                </Box>
                <Box>
                    <StatisticsCard />
                </Box>
            </Box>
        </>
    )
}

export default Home