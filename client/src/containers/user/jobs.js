import { Grid, GridItem, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import Carousel from "../../components/header/Carousel/carousel"
import CategoryCard from "../../components/card/categoryCard"
import Pagination from '../../components/pagination'
import HeroWithBg from '../../components/card/heroWithBg'
import { useNavigate } from "react-router-dom"

const Jobs = () => {
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


    return (
        <Box
            bg={useColorModeValue('teal.50', 'gray.800')}
            color={useColorModeValue('blue.500', 'gray.800')}
        >
            <HeroWithBg />
            <div>
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'} pt={5}>
                    Latest Jobs
                </Heading>
                <Pagination data={jobsList} />

            </div>
        </Box>
    )
}

export default Jobs

