import React, { useState, useEffect } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carousel = () => {

  const CarouselImages = 
[
  {
    id: 1,
    imageUrl:
      "https://educationbytes.in/wp-content/uploads/2022/07/NIT-rourkela.jpg",
    description: "Image 1 description",
  },
  {
    id: 2,
    imageUrl:
      "data:image/jpeg;base64,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",
    description: "Image 2 description",
  },
  {
    id: 3,
    imageUrl:
      "https://images.shiksha.com/mediadata/images/1607331878phpYmd02Y.jpeg",
    description: "Image 2 description",
  },
  {
    id: 4,
    imageUrl:
      "https://images.shiksha.com/mediadata/images/1488266730php8RK6HL.jpeg",
    description: "Image 2 description",
  },
];


  return(
    <div>
        <OwlCarousel className='owl-theme' fluidSpeed={1} loop={true} items={1} autoplay={true} mergeFit={true} center={true} nav={true} lazyLoad={true}>
        {CarouselImages.map((image, index) => {
              return(
                <div>
                <img style={{height: "80vh", width: "100%"}} className="w-100" src={image.imageUrl} alt={image.description} />
                </div>
                    )
                 })}
        </OwlCarousel>
    </div>
  )
}

export default Carousel