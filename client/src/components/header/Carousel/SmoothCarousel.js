import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./SmoothCarousel.css"
import { Box, Image, Center, VStack } from '@chakra-ui/react';
const baseUrl = process.env.REACT_APP_BASE_URL 

const CustomPrevArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};

const CustomNextArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};



const Carousel = () => {
  const [carouselImageData, setCarouselImageData] = useState([])


  const FetchCarouselImages = async () => {

    try {
      const res = await axios.get(`${baseUrl}/get-bottomcarousel-images`)
      if (res) {
        const imagesBinData = await res.data.data
        setCarouselImageData(imagesBinData)
      } else {
        console.log("Failed to fetch images")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchCarouselImages()
}, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Adjust the speed as needed
        slidesToShow: 4, // Set to a value greater than the number of slides
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 0, // Set to 0 to continuously scroll without delay
        pauseOnHover: true, // Set to false to prevent stopping on hover
        cssEase: 'linear',
        prevArrow: <CustomPrevArrow />, // Use the custom prevArrow component
        nextArrow: <CustomNextArrow />,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };

    return (
        <Box w="90%">
        <Slider {...settings}>
          {carouselImageData.map((imageData, index) => (
            <Center key={index}>
              <VStack spacing={5} mb={30}>
                <Box
                  height="150px" // Set a fixed height
                  width="100%" // Take full width of the container
                  display="flex"
                  justifyContent="center" // Vertically align content
                  overflow="hidden" // Hide image overflow
                >
                  <Image
                    h="100%" // Maximize image height within the container
                    w="auto" // Maintain image's aspect ratio
                    objectFit="contain" // Fit image within the box
                    src={`data:image/jpeg;base64,${imageData.carouselImage}`}
                    alt={imageData.imageTitle}
                  />
                </Box>
              </VStack>
            </Center>
          ))}
        </Slider>
      </Box>
    );
  };
  
 
  
  
  


export default Carousel;
