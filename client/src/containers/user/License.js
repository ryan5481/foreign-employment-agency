import React, {useState, useEffect} from "react"
import axios from "axios"
import {
  Grid, Heading, Text, Box, useColorModeValue, useStatStyles
} from '@chakra-ui/react'
import ImageTitleLarge from "../../components/card/imageTitleLarge"

const License = () => {
  const [certificatesList, setCertificatesList] = useState([])
  
  const fetchCertificates = async () => {
    try{
      const res = await axios.get("http://localhost:8000/get-certificate-images")
      const data = res.data.data
      setCertificatesList(data)
    }catch(error){
      console.error("Error: ", error)
    }
  } 

  useEffect(() => {
    fetchCertificates()
  }, [])

  return (
    <Box
      bg={useColorModeValue('teal.50', 'gray.800')}
      color={useColorModeValue('blue.500', 'gray.100')}
    >

      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
        p={5}>

        <Text as={'span'} color={'blue.400'}>
          Licenses and Certificates
        </Text>
      </Heading>
      <Grid templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr' }} gap={1} p={3} align="center">
        {certificatesList.map((cert, index) => {
          return(
            <>
            <ImageTitleLarge data={cert} />
            
            </>
          )
        })}
     
      </Grid>
    </Box>
  )
}

export default License