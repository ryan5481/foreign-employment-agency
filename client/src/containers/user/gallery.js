import React, {useState, useEffect} from "react"
import axios from "axios"
import GalleryPhotoCard from "../../components/card/galleryPhotoCard";
import {
    Heading, Grid, Center, useColorModeValue
} from '@chakra-ui/react'

const Gallery = () => {

    const [imageGalleryData, setImageGalleryData] = useState([])


    const fetchGalleryImages = async () => {

        try {
            const res = await axios.get("http://localhost:8000/get-gallery-images")
            if (res) {
                const data = await res.data.data
                setImageGalleryData(data)
            } else {
                console.log("Failed to fetch images")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGalleryImages();
    }, [])
    
    return(
        <Center bg={useColorModeValue('blue.500', 'gray.800')}
        color='gray.100'
            w={"full"}>
            <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                Image Gallery
                <Grid templateColumns={{sm: '1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr' }} gap={5} p={10} align="center" rowGap={5}>
                    <GalleryPhotoCard imageGalleryData={imageGalleryData}/>
                </Grid>
            </Heading>
        </Center>
    )
}

export default Gallery