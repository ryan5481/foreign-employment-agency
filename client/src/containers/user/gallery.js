import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid
} from '@chakra-ui/react'

const Gallery = () => {
    
    return(
        <>
        <div>
        <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                    Image Gallery

                    <Grid templateColumns='repeat(4, 2fr)' gap={5} p={10} align="center" rowGap={5}>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>
                        <GalleryPhotoCard/>

                    </Grid>
                </Heading>
        </div>
        </>
    )
}

export default Gallery