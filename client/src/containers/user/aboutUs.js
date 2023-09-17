import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, useColorModeValue } from "@chakra-ui/react"
import ArticleCard from "../../components/card/articleCard"
import HeroWithBgButton from "../../components/card/heroWithBgButton"
const baseUrl = process.env.REACT_APP_BASE_URL 

const AboutUs = () => {
    const navigate = useNavigate()
    const [currentAboutUsData, setCurrentAboutUsData] = useState([])
    const [formData, setFormData] = useState({
        heading1: "",
        text1: "",
        heading2: "",
        text2: "",
        heading3: "",
        text3: "",
        heading4: "",
        text4: "",
    });

    const GetAboutUsData = async () => {
        const res = await axios.get(`${baseUrl}/get-aboutuspage`)
        if (res.data && res.data.headerData) {
            setCurrentAboutUsData(res.data.headerData)
            setFormData({
                heading1: res.data.headerData.heading1,
                text1: res.data.headerData.text1,
                heading2: res.data.headerData.heading2,
                text2: res.data.headerData.text2,
                heading3: res.data.headerData.heading3,
                text3: res.data.headerData.text3,
                heading4: res.data.headerData.heading4,
                text4: res.data.headerData.text4,

            });

        } else {
            alert("Failed to fetch header data")
        }
    }

    const imageUrl=`data:image/jpeg;base64,${currentAboutUsData.aboutUsImage}`
    
    useEffect(() => {
        GetAboutUsData()
    }, [])
  
    return (
        <>
            <Box bg={useColorModeValue('teal.50', 'gray.1000')}>
                <Box>
                    <HeroWithBgButton imageUrl={imageUrl}/>
                    <ArticleCard currentAboutUsData={currentAboutUsData}/>
                </Box>
            </Box>
        </>
    )
}

export default AboutUs