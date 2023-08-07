import ImageTitleLarge from "../../components/card/imageTitleLarge"
import {
  Grid, Heading, Text, useColorModeValue, Box
} from '@chakra-ui/react'



const Newspaper = () => {

  const newspaperAds =
    [
      {
        isNew: true,
        imageURL:
          'https://ujyaalojobs.com/wp-content/uploads/2023/02/New-Vacancy.png',
        title: 'Newspaper Snippet',
      },
      {
        isNew: true,
        imageURL:
          'https://ujyaalojobs.com/wp-content/uploads/2023/02/New-Vacancy.png',
        title: 'Newspaper Snippet',
      },
      {
        isNew: true,
        imageURL:
          'https://ujyaalojobs.com/wp-content/uploads/2023/02/New-Vacancy.png',
        title: 'Newspaper Snippet',
      },
      {
        isNew: true,
        imageURL:
          'https://ujyaalojobs.com/wp-content/uploads/2023/02/New-Vacancy.png',
        title: 'Newspaper Snippet',
      },
    ]

  return (
    <Box color={useColorModeValue('blue.600', 'gray.1000')}>
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
      <Grid templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr' }} gap={0} p={3} align="center">
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