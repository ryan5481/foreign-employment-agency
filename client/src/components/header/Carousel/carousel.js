import axios from 'axios'
import {
  Flex,
  Text,
  Box,
  Image,
  HStack,
  Stack,
  Heading,
  Highlight
} from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselTitles, setCarouselTitles] = useState()
  const [carouselImages, setCarouselImages] = useState([])

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };


  const imagesCount = carouselImages.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? imagesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === imagesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const FetchCarouselImages = async () => {
    try {
      const res = await axios.get("http://localhost:8000/get-carousel-images")
      if (res) {
        const imagesBinData = await res.data.data.carouselImages
        const imageTitles = await res.data.data.imageTitles
        setCarouselImages(imagesBinData)
        setCarouselTitles(imageTitles)
      } else {
        console.log("Failed to fetch images")
      }
    } catch (error) {
      console.log(error)
    }
  }

console.log(carouselTitles)

  const imageUrls = carouselImages.map(imageString => `data:image/jpeg;base64,${imageString}`);

  useEffect(() => {
    FetchCarouselImages()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [carouselImages]);


  const imageStyle = {
    transition: 'filter 0.2s ease-in-out',
  };


  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={0}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" pos="relative" boxSize="full" overflow="hidden">
        <Flex w="full" boxSize="full" {...carouselStyle}>
          {imageUrls.map((url,index) => (
            <Box key={`imageUrl-${index}`} boxSize="full" shadow="md" flex="none">
              {/* <Text  color="white"  fontSize="xs"  p="8px 12px"  pos="absolute" top="0"  >  {sid + 1} / {imagesCount}</Text> */}
              <AspectRatio ratio={2.1}>
                <Image
                  src={url}
                  style={imageStyle}
                  fallbackSrc='https://via.placeholder.com/150'
                  bg="rgba(255,0,0,0.5)"
                  alt="carousel image"
                  boxSize="full"
                  backgroundSize="cover"
                  height={600}
                />
              </AspectRatio>
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
              >
              <Heading as={"h1"} fontSize={{ base: 'xl', md: '4xl', lg: '6xl' }} lineHeight='tall' zIndex={'10'}>
                  <Highlight
                    query={carouselTitles[index]}
                    styles={{ px: '3', py: '1', rounded: '10px', bg:"rgba(255,255,255,0.4)" }}
                    >
                    {carouselTitles[index]}
                  </Highlight>
                </Heading>
                {/* <Text fontSize="lg">{slide.description}</Text> */}
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
     
    </Flex>
  );
};

export default Carousel