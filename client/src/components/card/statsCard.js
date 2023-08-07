import React from 'react';
import { Grid, Box, Text, Stack } from '@chakra-ui/react';
import CountUp from 'react-countup';

const StatisticsCard = () => {
  return (
    <Grid
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
            In
          </text></Stack>
        <CountUp end={24} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
            Countries
          </text></Stack>
      </Box>
      <Box bg="red.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
            We Have Employed
          </text></Stack>
        <CountUp end={12528} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
            Nepalese
          </text></Stack>
      </Box>
      <Box bg="green.400" w={320} h={200} p={4} rounded={'xl'} shadow={'xl'}>
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
            To Work In
          </text></Stack>
        <CountUp end={112} duration={4} style={{ color: "white", fontSize: "70px", fontWeight: "bold" }} />
        <Stack>
          <text style={{ fontSize: "24px", fontWeight: "bold" }}>
            Sectors
          </text></Stack>
      </Box>
    </Grid>
  );
};

export default StatisticsCard;
