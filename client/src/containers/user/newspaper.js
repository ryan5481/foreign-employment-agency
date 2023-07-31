import ImageTitleLarge from "../../components/card/imageTitleLarge"
import {
    Grid, Heading, Text
  } from '@chakra-ui/react'



const Newspaper = () => {
    
    const newspaperVacancy = {
        isNew: true,
        imageURL:
          'https://ujyaalojobs.com/wp-content/uploads/2023/02/New-Vacancy.png',
        title: 'Newspaper Snippet',
      }

    return(
        <>
         <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: 'xl', sm: '4xl', lg: '4xl' }}
            p={5}>
           
            <Text as={'span'} color={'blue.400'}>
              Newspaper Vacancy Snippets
            </Text>
          </Heading>
        <Grid templateColumns={{ sm: '1fr 1fr', md: '2fr 2fr' }} gap={1} p={3} align="center">
        <ImageTitleLarge data={newspaperVacancy}/>
        <ImageTitleLarge data={newspaperVacancy}/>
        <ImageTitleLarge data={newspaperVacancy}/>
        <ImageTitleLarge data={newspaperVacancy}/>
        
        </Grid>
        </>
    )
}

export default Newspaper