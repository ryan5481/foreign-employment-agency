import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
    Box,
    useColorModeValue
} from "@chakra-ui/react";
import CallToActionWithVideo from "../../components/card/callToActionWithVideo";
import CompanyMessage1 from "../../components/adminPanel/companyMessage1";
import CompanyMessage2 from "../../components/adminPanel/companyMessage2";
import ValuableClients from "../../components/adminPanel/valubleClients";
import JobSectors from "../../components/adminPanel/jobSectors";
import OperatingProcedure from "../../components/adminPanel/operatingProcedure";
import EditCarousel from "../../components/adminPanel/topCarousel";
import EditBottomCarousel from "../../components/adminPanel/bottomSmooothCarousel";
import EditTestimony from "../../components/adminPanel/editTestimony";
import EditStats from "../../components/adminPanel/editStatistics";
const baseUrl = process.env.REACT_APP_BASE_URL 

const EditHomePage = () => {
    //CAROUSEL
    const [currentCarouselImages, setCurrentCarouselImages] = useState([]);
    const [carouselTitles, setCarouselTitles] = useState([]);
    const [selectedImageFile, setSelectedImageFile] = useState(null);
    const [selectedCarouselImageIndex, setSelectedCarouselImageIndex] = useState(-1);
    const [editedCarouselImageTitle, setEditedCarouselImageTitle] = useState("");
    //
    //VALUABLE CLIENTS
    const [previewImage, setPreviewImage] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

    const [image1, setImage1] = useState('')
    const [heading1, setHeading1] = useState('')
    const [text1, setText1] = useState('')
    const [description1, setDescription1] = useState('')



    // // VALUABLE CLIENTS
    const fetchData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-valuableclients`)
            if (res) {
                const data = res.data.data
                setImage1(`data:image/jpeg;base64,${data.valuableClientsImage1}`)
                setHeading1(data.heading1)
                setText1(data.text1)
                setDescription1(data.description1)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleImageSelect = (event) => {
        selectedImageFile(event.target.files[0])
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        setSelectedFile(event.target.files[0]);
        setSelectedFile(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setPreviewImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    useEffect(() => {
        fetchData()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            if (selectedFile) {
                formData.append('valuableClientsImage1', selectedFile);
            }
            formData.append('heading1', heading1);
            formData.append('text1', text1);
            formData.append('description1', description1);

            const res = await axios.post(`${baseUrl}/edit-homepage/valuableClients`, formData);
            if (res) {
                //   window.location.reload();
            }
        } catch (error) {
            console.log('Error updating data:', error);
        }
    };
    // VALUABLE CLIENTS



    return (
        <Box
            h={"100%"}
            p={2}
            bg={useColorModeValue("purple.500", "purple.800")}
            color={"purple.100"}
            justifyContent={"center"}
            top={"10vh"}
        >
            {/* CAROUSEL */}
            <EditCarousel/>
            {/* ABOUT US */}
            <Box  >
                {/* <Text>( This can be edited from 'About Us' Tab )</Text> */}
                <CallToActionWithVideo />
            </Box>
            <Box>
                <CompanyMessage1 />
            </Box>
            <Box>
                <CompanyMessage2 />
            </Box>
            <Box>
                <ValuableClients />
            </Box>
            <Box>
                <Box >
                    <JobSectors />
                </Box>
            </Box>
            <Box alignContent={'center'} align="center"
                bg={useColorModeValue('blue.600', 'blue.900')}
            >
                <Box >
                    <OperatingProcedure />
                </Box>
            </Box>
            <Box>
            <EditBottomCarousel/>
            </Box>
            <Box>
            <EditTestimony/>
            </Box>
            <Box>
            <EditStats/>
            </Box>

        </Box>
    );
};

export default EditHomePage;
