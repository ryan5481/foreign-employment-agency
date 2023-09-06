import React, {useState, useEffect, useRef} from 'react';
import axios from "axios"
import { Grid, Box, Text, Stack } from '@chakra-ui/react';
import CountUp from 'react-countup';
import { useInView } from 'react-hook-inview';

const StatisticsCard = () => {
  const [barChartData, setBarChartData] = useState({})
  const [inViewRef, inView] = useInView();
  const [isCounting, setIsCounting] = useState(false);

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
    if (inView) {
      setIsCounting(true);
    }
  }, [inView]);

  return (
    <Grid
    ref={inViewRef}
      templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }}
      templateRows={{ base: '1fr 1fr 1fr', md: '1fr' }}
      gap={5}
      alignItems="center"
      justifyItems="center"
      maxH={{ sm: '75vh', md: '30vh' }}
      marginBottom="20px"
      color={'white'}
    >
      <Box bg="yellow.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>

        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {barChartData.box1TopText}
          </text></Stack>
          {isCounting && (<CountUp end={barChartData.box1NumberData} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />)}
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {barChartData.box1BottomText}
          </text></Stack>
      </Box>
      <Box bg="red.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {barChartData.box2TopText}
          </text></Stack>
          {isCounting && (<CountUp end={barChartData.box2NumberData} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />)}
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {barChartData.box2BottomText}
          </text></Stack>
      </Box>
      <Box bg="green.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {barChartData.box3TopText}
          </text></Stack>
          {isCounting && ( <CountUp end={barChartData.box3NumberData} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />)}
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
          {barChartData.box3BottomText}
          </text></Stack>
      </Box>
    </Grid>
  );
};

export default StatisticsCard;
