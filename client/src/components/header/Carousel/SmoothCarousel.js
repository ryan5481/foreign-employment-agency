// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./SmoothCarousel.css"
import { Box, Image, Center, VStack } from '@chakra-ui/react';

const CustomPrevArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};

const CustomNextArrow = (props) => {
    return <></>; // Empty fragment to hide the button
};

const clientLogos = [
    {
        src: "https://skywaynepal.com/static/media/27.300b31315d27839eddd4.png",
        alt: "Image 1",
    },
    {
        src: "https://skywaynepal.com/static/media/29.8046742e5ff424b0ed9e.jpg",
        alt: "Image 2",
    },
    {
        src: "https://skywaynepal.com/static/media/42.442cf1f108a021d20a1f.jpg",
        alt: "Image 3",
    },
    {
        src: "https://skywaynepal.com/static/media/45.31288e429d4659ae1fb6.jpg",
        alt: "Image 3",
    },
    {
        src: "https://skywaynepal.com/static/media/35.6248a887af7eb36fc706.jpg",
        alt: "Image 3",
    },
    {
        src: "https://skywaynepal.com/static/media/9.1360b347d1707f91773d.jpg",
        alt: "Image 3",

    },
    {
        src: "https://skywaynepal.com/static/media/8.dd722d0b1f672a7ae166.jpg",
        alt: "Image 3",
    },
    {
        src: "https://skywaynepal.com/static/media/41.f48a96f47057042a5be4.jpg",
        alt: "Image 3"
    },
    {
        src: "https://skywaynepal.com/static/media/16.252f7618a3e3d9a562fb.jpg",
        alt: "Image 3"
    },
    {
        src: "https://skywaynepal.com/static/media/34.de5f7de8169cf63cc4a0.png",
        alt: "Image 3",

    },
    {
        src: "https://skywaynepal.com/static/media/37.b505fd1a24a365f773f9.jpg",
        alt: "Image 3",
    },
    {
        src: "https://skywaynepal.com/static/media/40.6e4aee4e6de1a4381656.jpg",
        alt: "Image 3",
    },
]

const Carousel = () => {
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
          {clientLogos.map((image, index) => (
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
                    src={image.src}
                    alt={image.alt}
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
