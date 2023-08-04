import {
  Flex,
  Text,
  Box,
  Image,
  Stack,
  HStack,
  Heading,
  Highlight
} from '@chakra-ui/react'
import { AspectRatio } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
const Carousel = () => {
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
  const slides = [
    {
      img: "https://www.traveloffpath.com/wp-content/uploads/2022/11/Skyline-Of-Dubai-United-Arab-Emirates-With-The-Tallest-Building-In-The-World-Burj-Khalifa-Reflecting-The-Sun-Shine-And-A-Sea-Of-Skyscrapers-Surrounding-It-Middle-East.jpg",
      label: "United Arab Emirates",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://mldvwwasb8tu.i.optimole.com/cb:esbD~6200b/w:1300/h:858/q:90/https://travelaway.me/wp-content/uploads/2022/02/oradea-city-center.jpg",
      label: "Romaina",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2016/11/13/12/52/kuala-lumpur-1820944_1280.jpg",
      label: "Malaysia",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "https://assets.aboutamazon.com/dims4/default/3924cae/2147483647/strip/false/crop/4048x1609+0+0/resize/1486x591!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F37%2F41%2Fb9b693c243978d81d7da62581288%2Fkuwait.jpg",
      label: "Kuwait",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://cdn.pixabay.com/photo/2018/12/02/06/48/artificial-islands-3850752_1280.jpg",
      label: "Qatar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://www.vision2030.gov.sa/media/r3gdzy0i/projects-invest-history_invest-1920.jpg",
      label: "Saudi Arabia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [slides]);

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
        <Flex  w="full" boxSize="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              {/* <Text  color="white"  fontSize="xs"  p="8px 12px"  pos="absolute" top="0"  >  {sid + 1} / {slidesCount}</Text> */}
              <AspectRatio ratio={2.1}>
                <Image
                  src={slide.img}
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
              <Heading as={"h1"} fontSize={{ base: 'xl', md: '4xl', lg: '6xl' }} lineHeight='tall'>
                  <Highlight
                    query={slide.label}
                    styles={{ px: '3', py: '1', rounded: '10px', bg:"rgba(255,255,255,0.4)" }}
                    >
                    {slide.label}
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
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Carousel