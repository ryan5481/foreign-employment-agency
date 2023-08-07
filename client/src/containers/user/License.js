import ImageTitleLarge from "../../components/card/imageTitleLarge"
import {
  Grid, Heading, Text, Box, useColorModeValue
} from '@chakra-ui/react'



const License = () => {
  const certificates = [
    {
      isNew: true,
      imageURL:
        'http://nepalmanpoweragency.com/admin/img/files/1601279949_COMPANY%20REGISTRAR.jpg',
      title: 'Company Certificate',
    },
    {
      isNew: true,
      imageURL:
        'http://nepalmanpoweragency.com/admin/img/files/1601279949_COMPANY%20REGISTRAR.jpg',
      title: 'Company Certificate',
    },
    {
      isNew: true,
      imageURL:
        'http://nepalmanpoweragency.com/admin/img/files/1601279949_COMPANY%20REGISTRAR.jpg',
      title: 'Company Certificate',
    },
    {
      isNew: true,
      imageURL:
        'http://nepalmanpoweragency.com/admin/img/files/1601279949_COMPANY%20REGISTRAR.jpg',
      title: 'Company Certificate',
    },
  ]

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
        {certificates.map((cert, index) => {
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