import
{ Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'

export default function AboutImageParagraphCard() {
  return (
    <Container maxW={'7xl'}>
     
        <Stack spacing={{ base: 6, md: 10 }}>
        <Image
            rounded={'md'}
            alt={'product image'}
            src={
              "https://i.ibb.co/fDq8jDn/Kathmandu-Nepal.jpg"
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Nepal
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              A country of lovingkindness and compassion
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                Middle Eastern countries continue to attract hundreds of thousands of Nepali migrant workers every year.
              </Text>
              <Text fontSize={'lg'}>
              Migration for foreign employment has become a major source of income for a many Nepali households. A recent report  - Labour Migration for Employment: A Status Report for Nepal 2013/14  shows that the number of migrants leaving Nepal for work is increasing every year. During the last fiscal year 2014, more than 520,000 labour permits were issued to Nepalis planning to work abroad. Malaysia is now the number one destination country for Nepali migrants, closely followed by Qatar, Saudi Arabia, UAE and Kuwait. The same report concluded that overseas employment is heavily male dominated: roughly 95 per cent of all labour permits are given to men. However, other data that captures those working in India (where labour permits are not required) or those leaving to work abroad through informal channels indicate that female migration might be as high as 12 per cent of the total workforce abroad.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Demographics
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Population:
                  </Text>{' '}
                  29,164,578
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Growth Rate:
                  </Text>{' '}
                  0.92%
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Migration Rate:
                  </Text>{' '}
                  0.92%
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Birth Rate:
                  </Text>{' '}
                  17.53 births/1,000 population
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Official Language:
                  </Text>{' '}
                  Nepali
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Title:
                  </Text>{' '}
                  Description
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Title:
                  </Text>{' '}
                  Description{' '}
                </ListItem>
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Nepali Overseas Immigrant Professions
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Construction</ListItem>
                  <ListItem>Security</ListItem>{' '}
                  <ListItem>Cook</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Waiter</ListItem>
                  <ListItem>Caretaker</ListItem>
                  <ListItem>Driver</ListItem>
                </List>
              </SimpleGrid>
            </Box>
          </Stack>

        </Stack>
    </Container>
  )
}