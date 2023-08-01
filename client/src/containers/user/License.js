import ImageTitleLarge from "../../components/card/imageTitleLarge"
import {
    Grid, Heading, Text
  } from '@chakra-ui/react'

  

const License = () => {
  const certificates = {
    isNew: true,
    imageURL:
      'http://nepalmanpoweragency.com/admin/img/files/1601279949_COMPANY%20REGISTRAR.jpg',
    title: 'Company Certificate',
  }
  
    return(
        <>
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
        <ImageTitleLarge data={certificates}/>
        <ImageTitleLarge data={certificates}/>
        <ImageTitleLarge data={certificates}/>
        <ImageTitleLarge data={certificates}/>
        </Grid>
        </>
    )
}

export default License