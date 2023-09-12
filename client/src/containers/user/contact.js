
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ContactCard from "../../components/card/contactCard"
import {
    Heading, Grid, Box, HStack, useColorModeValue, Center
} from '@chakra-ui/react'

const Contact = () => {

    const [data, setData] = useState([])

  const GetHeaderData = async() => {
    const res = await axios.get('http://localhost:8000/get-contact')
    if(res){
      // console.log("DATAAAA:" + data)
      setData(res.data.data)
    }else{
      alert("Failed to fech header data")
    }
  } 

  useEffect(() => {
    GetHeaderData()
  }, [])
    
    return(
        <Center bg={useColorModeValue('blue.500', 'blue.800')} w={'full'}>
            {/* <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                        Get In Touch
                    </Heading> */}
            <HStack bg={useColorModeValue('blue.500', 'gray.1000')} color={'white'}>

                    <Grid  gap={5} p={1} align="center" rowGap={5}>
                        <ContactCard data={data} />
                    </Grid >
            </HStack>
        </Center>
    )
}

export default Contact