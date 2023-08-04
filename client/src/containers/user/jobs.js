import Carousel from "../../components/header/Carousel/carousel"
import { Grid, GridItem, Box, Heading } from '@chakra-ui/react'
import CategoryCard from "../../components/card/categoryCard"
import { useNavigate } from "react-router-dom"

const Jobs = () => {
    const navigate = useNavigate()

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
            <Carousel />
            <div>
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}>
                    Latest Jobs
                </Heading>
                <Box >
                <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>

                    <CategoryCard jobsList={jobsList}/>
                </Grid>
                </Box>

            </div>
        </>
    )
}

export default Jobs

