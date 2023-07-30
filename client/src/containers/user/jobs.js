import Carousel from "../../components/header/Carousel/carousel"
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import CategoryCard from "../../components/card/categoryCard"

const Jobs = () => {

    return (
        <>
            <Carousel />
            <div>
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'}>
                    Latest Jobs

                    <Grid templateColumns='repeat(3, 1fr)' gap={5} rowGap={5} p={1} align="center">
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />
                        <CategoryCard w='100%' h='10' bg='blue.500' />

                    </Grid>
                </Heading>
            </div>
        </>
    )
}

export default Jobs