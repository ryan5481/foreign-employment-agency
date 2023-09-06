import React, {useState, useEffect} from "react"
import axios from "axios"
import ImageTitleLarge from "../../components/card/imageTitleLarge"
import {
  Grid, Heading, Text, useColorModeValue, Box
} from '@chakra-ui/react'



const Newspaper = () => {
  const [newspaperAds, setNewspaperAds] = useState([])
  
  const fetchNewspaperAds = async () => {
    try{
      const res = await axios.get("http://localhost:8000/get-newspaper-images")
      const data = res.data.data
      setNewspaperAds(data)
    }catch(error){
      console.error("Error: ", error)
    }
  } 

  useEffect(() => {
    fetchNewspaperAds()
  }, [])

  return (
    <Box p={10} color={useColorModeValue('blue.600', 'gray.1000')}>
      <Heading
        lineHeight={1.1}
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
        p={5}
        >

        <Text as={'span'} color={'blue.400'}>
          Newspaper Vacancy Snippets
        </Text>
      </Heading>
      <Grid templateColumns={{ base:'1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }} gap={0} p={3} justifySelf={'center'} alignSelf="center">
        {newspaperAds.map((ad, index) => {
          return (<>
            <ImageTitleLarge data={ad} />
          </>)
        })}
      </Grid>
    </Box>
  )
}

export default Newspaper