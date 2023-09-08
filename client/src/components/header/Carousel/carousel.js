import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Image, Heading, AspectRatio } from '@chakra-ui/react';

const Carousel = () => {
  const [carouselImageData, setCarouselImageData] = useState([]);

  const fetchCarouselImages = async () => {
    try {
      const res = await axios.get('http://localhost:8000/get-carousel-images');
      if (res.status === 200) {
        setCarouselImageData(res.data.data);
      } else {
        console.log('Failed to fetch images');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  useEffect(() => {
    fetchCarouselImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <Box>
      <Slider {...settings}>
        {carouselImageData.map((image, index) => (
          <Box key={`carousel_${index}`}  >
            <AspectRatio ratio={16 / 9}>
              <Image
                src={`data:image/jpeg;base64,${image.carouselImage}`}
                alt={image.imageTitle}
                objectFit="cover"
                w="100%"
                h="80%"
              />
            </AspectRatio>
            {/* <Heading
            pos
              as="h1"
              fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
              textAlign="center"
              mt={4}
            >
              {image.imageTitle}
            </Heading> */}
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
