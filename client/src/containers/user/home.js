import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import {
    Box, Heading, Grid, useColorModeValue, Divider, Stack, Image, Modal, ModalBody, ModalContent, ModalOverlay, ModalFooter, IconButton
} from "@chakra-ui/react"
import { SmallCloseIcon } from "@chakra-ui/icons"
import Carousel from "../../components/header/Carousel/carousel"
import CallToActionWithVideo from "../../components/card/callToActionWithVideo"
import ImageParagraph from "../../components/card/imageParagraph1"
import ImageParagraph2 from "../../components/card/imageParagraph2"
import StatisticsCard from "../../components/card/statsCard"
import TestimonialCard from "../../components/card/testimonialCard"
import BlogArticleCard from "../../components/card/blogArticleCard"
import SimpleCard from "../../components/card/simpleCard"
import Procedure from "../../components/stepper"
import BarChart from "../../components/animation/barChart"
import SmoothCarousel from "../../components/header/Carousel/SmoothCarousel"
import Newspaper from "./newspaper"
import AllJobs from "./allJobs"
const baseUrl = process.env.REACT_APP_BASE_URL 

const Home = () => {
    const [isOpen, setIsOpen] = useState(true);
    const onClose = () => setIsOpen(false);

    //Fetch modal image
    const [modalStates, setModalStates] = useState([]);
    const [modalImageData, setModalImageData] = useState([]);
    // const sliderRef = useRef(null);

    const fetchModalImages = async () => {
        try {
            const res = await axios.get(`${baseUrl}/get-modal-images`);
            if (res.status === 200) {
                setModalImageData(res.data.data);
                setModalStates(new Array(res.data.data.length).fill(true));
            } else {
                console.log('Failed to fetch images');
            }
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        fetchModalImages();
    }, []);

    // Function to open a specific modal
    const openModal = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = true;
        setModalStates(newModalStates);
    };

    // Function to close a specific modal
    const closeModal = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = false;
        setModalStates(newModalStates);
    };

 

    useEffect(() => {
        // Close the modal after a certain delay (e.g., 5 seconds)
        const timeout = setTimeout(() => {
            closeModal();
        }, 10000);

        return () => {
            clearTimeout(timeout); // Clear the timeout to prevent it from running after unmounting
        };
    }, []);

    return (
        <>
            <Box bg={useColorModeValue('teal.100', 'blue.800')} alignContent={'center'}>

                <Carousel />

                {/* ABOUT US */}
                <Box>

                    <CallToActionWithVideo pos="relative" bottom={"200px"} />
                </Box>
                {/* MESSAGES */}
                <Box >
                    <ImageParagraph />
                </Box>
                <Box >
                    <ImageParagraph2 />
                </Box>
                {/* OUR VALUABLE CLIENTS */}
                <Box >
                    <BlogArticleCard />
                </Box>
                <Newspaper />
                {/* JOB SECTORS */}
                <Box id="job-sectors"  >
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={5}
                        color={useColorModeValue('blue.600', 'gray.1000')}
                    >
                        Sectors We Work In
                    </Heading>
                    <Box color={useColorModeValue('blue.600', 'gray.200')}
                    >
                        <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' }} p={10} gap={10}>
                            <SimpleCard />
                        </Grid>
                    </Box>
                </Box>
                {/* LATEST JOBS */}
                <Box
                    maxW={'full'}
                >
                    <AllJobs displayAll={false} />
                </Box>
                <Divider />
                {/* OPERATING PROCEDURE */}
                <Box id="operating-procedure"
                    alignContent={'center'} align="center"
                    color={useColorModeValue('blue.700', 'gray.1000')}
                >
                    <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                        Operating Procedure
                    </Heading>
                    <Box >
                        <Procedure />
                    </Box>
                </Box>
                {/* TESTIMONIALS */}
                <Box id="testimonials" >
                    <TestimonialCard />
                </Box>
                <Stack>
                    <Box align="center"
                        bg={useColorModeValue('blue.600', 'gray.700')}
                        color={useColorModeValue('gray.100', 'gray.50')}>
                        <Heading m={2} fontSize={'4xl'} fontFamily={'body'} p={10}>
                            Our Clients
                        </Heading>
                        {/* CLIENTS CAROUSEL */}
                        <Box>
                            <SmoothCarousel />
                        </Box>
                        <Box color={useColorModeValue('blue.600', 'gray.500')} pb={50}>
                            {/* STASTISTICS */}
                            <Heading color={useColorModeValue('gray.100', 'gray.50')} m={2} fontSize={'4xl'} fontFamily={'body'} p={10} mb={30} minH={'200px'}>
                                Sky Way Nepal Statistics
                            </Heading>
                            <BarChart />
                            <StatisticsCard />
                        </Box>
                    </Box>
                </Stack>
            </Box>
            {modalImageData && modalImageData.map((imageData, index) => (
                 <Modal key={index} isOpen={modalStates[index]} onClose={() => closeModal(index)} zIndex="9999" isCentered>
                 <ModalOverlay />
                 <ModalContent  >
                     <Box
                         as={IconButton}
                         size='sm'
                         colorScheme='red'
                         rounded="full"
                         top='20px'
                         left='90%'
                         zIndex='10'
                         boxShadow="2xl"
                         onClick={() => closeModal(index)}
                         w='30px'
                         h='30px'
                     >
                         <SmallCloseIcon
                             color='gray.50'
                             w='30px'
                         />
                     </Box>
                     <ModalBody>
                         {/* Image inside the modal */}
                         <Image
                             src={require(`../../uploads/homePageModalImage/${imageData.modalImage}`)}
                             alt="Modal Image"
                         />
                     </ModalBody>
                     <ModalFooter />
                 </ModalContent>
             </Modal>
            )) 
           }
        </>
    )
}

export default Home