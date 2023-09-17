import React, { useEffect, useState, useRef } from 'react'
import axios from "axios"
import {Flex} from "@chakra-ui/react"
import EditImageGallery from "../../components/adminPanel/editImageGallery"
const baseUrl = process.env.REACT_APP_BASE_URL 

const EditGalleryPage = () => {
    const [imageGalleryData, setImageGalleryData] = useState([])
    const [imageTitles, setImageTitles] = useState('');
    const [imageDescriptions, setImageDescriptions] = useState('');


    const fetchGalleryImages = async () => {

        try {
            const res = await axios.get(`${baseUrl}/get-gallery-images`)
            if (res) {
                const data = await res.data.data
                setImageGalleryData(data)
                const initialImageTitles = data.map(images => images.imageTitle || '')
                setImageTitles(initialImageTitles)
                const initialImageDescriptions = data.map(images => images.imageDescription || '')
                setImageDescriptions(initialImageDescriptions)

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

    return(<>
        <EditImageGallery 
        imageGalleryData={imageGalleryData} 
        imageTitles={imageTitles}
        imageDescriptions={imageDescriptions}
        fetchGalleryImages={fetchGalleryImages}
        />
    </>)
}

export default EditGalleryPage