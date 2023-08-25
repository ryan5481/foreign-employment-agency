import React, { useState, useEffect, useRef } from 'react';
import axios from "axios"
import { Box, ChakraProvider, Text } from '@chakra-ui/react';
import { useInView } from 'react-hook-inview';
// import CountUp from 'react-countup';

const BarChart = () => {

  const [barHeights, setBarHeights] = useState([0, 0, 0]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [inViewRef, inView] = useInView();
  const [barChartData, setBarChartData] = useState({})
  let labels = []
  barChartData && 
  (labels = [barChartData.column1Label, barChartData.column2Label, barChartData.column3Label])
  const bg = ['yellow.400', 'red.400', 'green.400']

  const fetchBarChartData = async () => {
    try {
      const res = await axios.get('http://localhost:8000/get-stats')
      const newData = await res.data.data
      setBarChartData(newData)
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  useEffect(() => {
    fetchBarChartData()
  }, [])

  useEffect(() => {
    if (
      barChartData.column1height &&
      barChartData.column2height &&
      barChartData.column3height
    ) {
      setBarHeights([barChartData.column1height, barChartData.column2height, barChartData.column3height]);
    }
  }, [barChartData]);

  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  return (
    <ChakraProvider>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        minHeight="200px"
        width="100%"
        marginBottom="20px"
        h={"30vh"}
        ref={inViewRef}
      >
        {barHeights.map((height, index) => (
          <Box
            key={index}
            width={'100px'}
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginX="30px"
          // {{sm: "10px", md:"30px"}}
          >
            {/* <CountUp start={0} end={height} duration={1} delay={0.5}>
              {({ countUpRef }) => (
                <Text ref={countUpRef} />
              )}
            </CountUp> */}
            <Box
              width="100%"
              minW={'50px'}
              height={`${animationStarted ? height : 0}px`}
              bg={bg[index]}
              transition="height 2s ease-in-out"
              shadow={"xl"}
            />
            <Text pt={5} fontSize={"md"} fontWeight={"bold"} color={bg[index]} textAlign={'center'}>{labels[index]}</Text> {/* Customizable label */}
          </Box>
        ))}
      </Box>
    </ChakraProvider>
  );
};

export default BarChart;
