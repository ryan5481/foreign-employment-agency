import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid, Center, useColorModeValue
} from '@chakra-ui/react'

const Gallery = () => {

    const galleryImages = 
    [
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
       
        {
            src: "https://bit.ly/2Z4KKcF",
            title: "Dubai",
            alt: "dubai",
            isNew: true
        },
    
    ]
    
    return(
        <Center bg={useColorModeValue('teal.50', 'gray.800')}
            color={useColorModeValue('blue.500', 'gray.100')}
            w={"full"}>
            <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                Image Gallery
                <Grid templateColumns={{sm: '1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
                    <GalleryPhotoCard galleryImages={galleryImages}/>
                </Grid>
            </Heading>
        </Center>
    )
}

export default Gallery