import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  Grid,
  Container,
  VStack,
  useColorModeValue
} from '@chakra-ui/react'

const ArticleCard = () => {
  return (
    <Container maxW={'7xl'} p="12">
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between"
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        >
      </Box>
      <Heading as="h2" fontSize="3xl">About Us</Heading>

      <Divider marginTop="5" />
      <VStack paddingTop="40px" spacing="2" textAlign="left">
        <Text as="p" fontSize="md">
          Sky Way Management, A last resort of Manpower requirement to its clients, has started its service since 2013 then continuously supplies the manpower pertaining Blue to White Colors Workers in the Middle East and Malaysia. It has a team of competent, Talents who have worked in the sectors for decades. Team of Talents goes deep down through the requirements received by its value clients and always focuses for the best output meeting the target in one –go to save the time and effort of both the parties for fair and successful recruitment. We always value ethics and professionalism at the top.
          <br />
          <br />
          We excel in Hospitality, Facility Management, Security Services, Oil and Gas, Aviation and Ground Handling, Business need, MEP, Construction, and almost all sectors’ Manpower needs from our valued clients.
          <br />
          <br />
          We have a good nexus of training institutes and Vocational Training centers to source the skilled manpower. Besides these we have our own clear data base pool from where we source the competent and qualified aspirants to address the manpower need in one-go.
          <br />
          <br />
          We respect the job seekers, help them to enhance their skill and recommend the right job based on their cognitive power believing “Right person in the right Job” for the best result.
          <br />
          <br />
          Sky-Way Leaves no Stones unturned to serve its’ value client by all measures of multiple dimensions based on the new principle of Human Resources Management. We have a standard Skill test program to understand the competency level of job seekers looking for jobs in abroad and accordingly place them in fair recruitment based on merits.
          <br />
          <br />
          We believe in Ethical Recruitment; Equal and Free Recruitment opportunity for the Nepalese Workers.
          <br />
          <br />
          We are against Force Labor, Debt Bondage, and unfair recruitment practices .We respect the ILO and Human Right Mandate while recruiting the manpower and always put it on the Top priority
        </Text>
      </VStack>
      <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr' }} p={10} gap={10}>
        <Wrap spacing="30px" marginTop="5">
          <Box w="100%">
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                Why Us
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" textAlign="left">
              Quality, Honesty, Sincerity and Reliability are the commitment of the Skyway Management Pvt.Ltd. Yes obviously our first preference to provide you quality manpower in time and as your convenience. We are committed your satisfaction.
              The services of our Sincere, Honest, Hardworking and Disciplined candidates will help to boost the business to the employer companies as well, in terms of proven moral and productivity. Skyway Management Pvt.Ltd. has confident that the Nepalese National will fit in and contribute to our client company with best.
              The region for the provision of Manpower recruiting services to Foreign companies, which will help strengthen the financial condition of the Nation as well as of the candidates.
              To achieve rapid profitable growth by ensuring that our clients needs are satisfied in an efficient and costeffective manner
            </Text>
          </Box>
        </Wrap>
        <Wrap spacing="30px" marginTop="5">
          <Box w="100%">
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                OUR MISSION
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" textAlign="left">
              To be a leading recruitment agency in the nation in the sector for fulfilling the manpower need in OneGo to the valued clients over the globe with the the tailored based program for all sectors’ manpower recruitment for the best result.
            </Text>
          </Box>
          <Box w="100%">
            <Heading fontSize="xl" marginTop="2">
              <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                OUR VISION
              </Text>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2" textAlign="left">
              we work hard to achieve our goals together as a team with a clear shared purpose. We adapt to our clients changing needs as well changes in the market to make sure we are a business of growth, success and happiness.            </Text>
          </Box>
        </Wrap>
      </Grid>
    </Container>
  )
}

export default ArticleCard