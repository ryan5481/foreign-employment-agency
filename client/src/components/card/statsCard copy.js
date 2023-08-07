import React, { useState } from 'react';
import { useInView } from 'react-hook-inview';
import CountUp from 'react-countup';
import {
  Box,
  Grid,
  Heading,
  Text,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react'

const StatisticsCard = () => {
  const [hasInView, setHasInView] = useState(false);
  const [ref] = useInView({
    triggerOnce: true, // This will trigger the inView callback only once
    onEnter: () => {
      setHasInView(true); // When the component comes into view, set the hasInView state to true
    },
  });
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allow boxes to wrap in rows
    justifyContent: 'center',
    alignItems: 'center',
    height: '40vh',
    gap: '50px', // Gap between the boxes
  };

  const boxStyle = {
    width: '350px', // Set the box width to 350px
    height: '200px',
  };

  const mediaQueryStyle = {
    '@media (max-width: 768px)': { // Adjust the max-width as needed
      flexBasis: '100%', // Force boxes to take full width in mobile view
      width: "auto",
    },
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...boxStyle, ...mediaQueryStyle }}><Box
          px={{ base: 4, md: 8 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
          maxW={350}
          bg={useColorModeValue('gray.50', 'gray.500')}
        >
            <Text fontWeight={'medium'} fontSize='xl' isTruncated>
              We Have Employed
            </Text>
            {hasInView ? (
              <CountUp end={4528} duration={2} style={{color:"#ff2600", fontSize: "70px", fontWeight: "bold" }} /> // Replace 100 with the desired end value and adjust duration as needed
            ) : (
              'Scroll down to see the count-up effect'
            )}
            <Text fontWeight={'medium'} fontSize='xl' isTruncated ref={ref}>
              Nepalese
            </Text>
        </Box></div>
      <div style={{ ...boxStyle, ...mediaQueryStyle }}><Box
          px={{ base: 4, md: 8 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
          maxW={350}
          bg={useColorModeValue('gray.50', 'gray.500')}
        >
            <Text fontWeight={'medium'} fontSize='xl' isTruncated>
              To Work In
            </Text>
            {hasInView ? (
              <CountUp end={114} duration={2} style={{color:"#ff2600", fontSize: "70px", fontWeight: "bold" }} /> // Replace 100 with the desired end value and adjust duration as needed
            ) : (
              'Scroll down to see the count-up effect'
            )}
            <Text fontWeight={'medium'} fontSize='xl' isTruncated ref={ref}>
              Sectors
            </Text>
        </Box></div>
      <div style={{ ...boxStyle, ...mediaQueryStyle }}><Box
          px={{ base: 4, md: 8 }}
          py={'5'}
          shadow={'xl'}
          border={'1px solid'}
          rounded={'lg'}
          maxW={350}
          bg={useColorModeValue('gray.50', 'gray.500')}
        >
            <Text fontWeight={'medium'} fontSize='xl' isTruncated>
              In
            </Text>
            {hasInView ? (
              <CountUp end={36} duration={2} style={{color:"#ff2600", fontSize: "70px", fontWeight: "bold" }} /> // Replace 100 with the desired end value and adjust duration as needed
            ) : (
              'Scroll down to see the count-up effect'
            )}
            <Text fontWeight={'medium'} fontSize='xl' isTruncated ref={ref}>
              Different Countries
            </Text>
        </Box></div>
    </div>
  );
};

export default StatisticsCard;
