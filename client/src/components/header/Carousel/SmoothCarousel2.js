import React from 'react';
import { Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
 const images = [
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Box>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img src={image.src} alt={`Image ${index + 1}`} style={{ maxWidth: '100%' }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
