import { Box, Heading } from "@chakra-ui/react"
import Carousel from "../../components/header/Carousel/carousel"
import CallToActionWithVideo from "../../components/card/callToActionWithVideo"
import ImageParagraph from "../../components/card/imageParagraph1"
import ImageParagraph2 from "../../components/card/imageParagraph2"
import StatisticsCard from "../../components/card/statsCard"
import TestimonialCard from "../../components/card/testimonialCard"
import CategoryCard from "../../components/card/categoryCard"
const Home = () => {

    const jobsList = [
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Security Guard',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Chef',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Caretaker',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Construction Worker',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Green double couch with wooden legs',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Green double couch with wooden legs',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Green double couch with wooden legs',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Green double couch with wooden legs',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Green double couch with wooden legs',
            new: true
        },
        {
            src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            alt:'Green double couch with wooden legs',
            new: true
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
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}>
                    Latest Jobs
                </Heading>
                <Box>
                    <CategoryCard jobsList={jobsList}/>
                </Box>
                </Box>
                <Box>
                    <StatisticsCard />
                </Box>
                <Box>
                    <TestimonialCard />
                </Box>



            </Box>
        </>
    )
}

export default Home