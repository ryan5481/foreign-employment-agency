
import { Image, Box, Center, VStack } from '@chakra-ui/react'
import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CarouselSmall = () => {
  
  const slides = [
    {
      img: "https://skywaynepal.com/static/media/27.300b31315d27839eddd4.png",
      label: "United Arab Emirates",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://skywaynepal.com/static/media/29.8046742e5ff424b0ed9e.jpg",
      label: "Romaina",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://skywaynepal.com/static/media/35.6248a887af7eb36fc706.jpg",
      label: "Malaysia",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "https://skywaynepal.com/static/media/42.442cf1f108a021d20a1f.jpg",
      label: "Kuwait",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://skywaynepal.com/static/media/45.31288e429d4659ae1fb6.jpg",
      label: "Qatar",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://skywaynepal.com/static/media/9.1360b347d1707f91773d.jpg",
      label: "Saudi Arabia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <OwlCarousel className='owl-theme'  items={5} loop='true' autoplay autoplaySpeed="0.1" style={{width:'90%', gap:"10px"}} >
      {slides.map((image, index)=> {
        return(<>
        <VStack class='item' p={5} align="center">
          <Center>
            <Image src={image.img}  />
          </Center>
      </VStack>
      </>)
      })}
      
    </OwlCarousel>
  );
};

export default CarouselSmall