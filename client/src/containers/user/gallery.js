import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid
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
        <>
        <div>
        <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                    Image Gallery

                    <Grid templateColumns='repeat(4, 2fr)' gap={5} p={10} align="center" rowGap={5}>
                        <GalleryPhotoCard galleryImages={galleryImages}/>
                    </Grid>
                </Heading>
        </div>
        </>
    )
}

export default Gallery