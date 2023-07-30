import ImageTitleLarge from "../../components/card/imageTitleLarge"
import {
    Grid, Heading, Text
  } from '@chakra-ui/react'
const Docs = () => {
    
    return(
        <>
         <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}>
           
            <Text as={'span'} color={'blue.400'}>
              Licenses and Certificates
            </Text>
          </Heading>
        <Grid templateColumns='repeat(2, 2fr)' gap={1} p={10} align="center">
        <ImageTitleLarge/>
        <ImageTitleLarge/>
        <ImageTitleLarge/>
        <ImageTitleLarge/>
        </Grid>
        </>
    )
}

export default Docs