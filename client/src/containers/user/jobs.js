import Carousel from "../../components/header/Carousel/carousel"
import { Grid, GridItem, Heading } from '@chakra-ui/react'
import CategoryCard from "../../components/card/categoryCard"

const Jobs = () => {

    return (
        <>
            <Carousel />
            <div>
                <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}>
                    Latest Jobs
                </Heading>
                <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
                    gap={5}
                    rowGap={5}
                    pt={10}
                    p={10}
                    direction={{ base: 'column', md: 'row' }}
                    spacing={4}
                    justify={{ base: 'space-between', md: 'space-between' }}
                    align={{ base: 'center', md: 'center' }}>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>
                  <CategoryCard/>

                </Grid>

            </div>
        </>
    )
}

export default Jobs