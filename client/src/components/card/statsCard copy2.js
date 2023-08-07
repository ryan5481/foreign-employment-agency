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


  return (
   
    <Box
      bg={useColorModeValue('blue.600', 'gray.700')}
      color={useColorModeValue('blue.600', 'gray.100')}
      alignContent={'center'}
      align='center'
      alignItems={'center'}
      >
        <Heading pb={10} color={useColorModeValue('gray.50', 'gray.500')}>Sky Way Nepal Statistics</Heading>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr ' }} px={{ base: 4, md: 8 }} pb={20}>
      
        <Box
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
        </Box>
        <Box
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
        </Box>
        <Box
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
        </Box>
        </Grid>
        </Box>
       
  )
}

export default StatisticsCard

