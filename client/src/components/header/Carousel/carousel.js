// Carousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./SmoothCarousel.css"
import { Box, Image, Center, Stack, Heading, Highlight, AspectRatio } from '@chakra-ui/react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"

const dotsStyle = {
  bottom: '100px', // Adjust the distance from the bottom as needed
};

const Carousel = () => {
  const [carouselImageData, setCarouselImageData] = useState([])


  const FetchCarouselImages = async () => {

    try {
      const res = await axios.get("http://localhost:8000/get-carousel-images")
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

  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoIosArrowDropleftCircle
          style={{
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            zIndex: "1",
            left: "50%"
          }} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoIosArrowDroprightCircle />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Adjust the autoplay speed as needed
    pauseOnHover: true,
    cssEase: 'linear', // Apply linear transition between slides

    prevArrow: <CustomPrevArrow />, // Use the custom prevArrow component
    nextArrow: <CustomNextArrow />, // 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };




  useEffect(() => {
    FetchCarouselImages()
  }, [])

  return (
    <Box
      h="80vh"
      overflow="hidden"
    >
      <Slider {...settings}>
        {carouselImageData && carouselImageData.map((image, index) => (
          <>
            <AspectRatio ratio={2.1}>
              <Image
                
                minH="100%"
                objectFit="cover" // Fit image within the box
                src={`data:image/jpeg;base64,${image.carouselImage}`}
                alt={image.imageTitle}
              />
            </AspectRatio>
          
              {/* <Heading
                as={"h1"}
                right="50%"
                bottom="top%"
                fontSize={{ base: 'xl', md: '4xl', lg: '6xl' }}
                lineHeight='tall'
                zIndex={'10'} 
                p="8px 12px"
                pos="absolute"
                textAlign="center"
                w="full"
                mb="8"
                >
                {image.imageTitle}
              </Heading> */}
       
          </>
        ))}
      </Slider>

    </Box>
  );
};

export default Carousel;
