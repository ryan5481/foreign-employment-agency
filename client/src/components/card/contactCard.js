import {
  Container,
  Center,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  Stack,
  VStack,
  HStack,
  Grid,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsWhatsapp, BsPerson, BsMessenger } from 'react-icons/bs'

const ContactCard = (props) => {

  function openMessengerChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const appId = 'your-app-id';
    const messengerUrl = `https://m.me/${props.data.oneTapMessengerLink}`;
    window.open(messengerUrl, 'Messenger Chat', 'width=600,height=400');
  }

  function openFaceBookPage(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const appId = 'your-app-id';
    const facebookUrl = `https://facebook.com/${props.data.facebookId}`;
    window.open(facebookUrl, 'Facebook Page', 'width=600,height=400');
  }

  function openWhatsappChat(recipientId) {
    // Replace 'your-app-id' with your Facebook App ID
    const appId = 'your-app-id';
    const whatsappPhoneNumber = `https://wa.me/${props.data.whatsappId}`;
    window.open(whatsappPhoneNumber, 'Whatsapp Chat', 'width=600,height=400');
  }

  return (
    <Container maxW="full" mt={0} centerContent  overflow="hidden">
      <Box
        bg={useColorModeValue('blue.600', 'gray.800')}
        color={'white'}
        borderRadius="lg"
        m={{ sm: 4, md: 16, lg: 10 }}
        px={{ sm: 5, md: 5, lg: 16 }}>
        <Grid templateColumns={{ sm: '1fr', md: '1fr 1fr 1fr' }} p={10} gap={10}  >
              <Box w={200} pt={3} alignSelf="center"  >
                <Heading fontSize="3xl" >{props.data.contactUsHeading}</Heading>
                <Text fontSize="md" mt={{ sm: 3, md: 3, lg: 5 }} color={useColorModeValue('grey.200', 'grey.200')}
                >
                  {props.data.contactUsSubHeading}
                </Text>
                <Box py={{ base: 1, sm: 1, md: 2, lg: 3 }} color={useColorModeValue('grey.800', 'grey.100')} alignSelf={'center'} >
                  <Stack pl={0} spacing={3}  color={useColorModeValue('grey.800', 'grey.100')}>
                    <Box pl={0} spacing={0} justifySelf="left"  color={'white'}>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhone color="white" size="20px" />}
                        color={'white'}
                      >
                        <a href={`tel:${props.data.phoneNumber1}`}>{props.data.phoneNumber1}</a>
                      </Button>
                      <Button
                        color={'white'}
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<VisuallyHidden><MdPhone color="white" size="20px" /></VisuallyHidden>}
                      >
                        <a href={`tel:${props.data.phoneNumber2}`}>{props.data.phoneNumber2}</a>
                      </Button>
                    </Box>
                    <Button
                      color={'white'}
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdEmail color="white" size="20px" />}
                    >
                      <a href={`mailto:${props.data.email}`}>{props.data.email}</a>
                    </Button>
                    <Button
                      color={'white'}
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      _hover={{ border: '2px solid #1C6FEB' }}
                      leftIcon={<MdLocationOn color="white" size="20px" />}>
                      {props.data.address}
                    </Button>
                  </Stack>
                  <Stack
                  direction={'horizontal'}
                    mt={{ lg: 10, md: 10 }}
                    spacing={2}
                    px={0}
                    alignSelf="center"
                  >
                    <IconButton
                      color={'white'}
                      aria-label="whatsapp"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsWhatsapp size="28px" />}
                      onClick={() => openWhatsappChat(props.data.facebookId)}

                    />
                    <IconButton
                      color={'white'}
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<MdFacebook size="28px" />}
                      onClick={() => openFaceBookPage(props.data.facebookId)}

                    />

                    <IconButton
                      color={'white'}
                      aria-label="messanger"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsMessenger size="28px" />}
                      onClick={() => openMessengerChat(props.data.messengerId)}
                    />
                    {/* <IconButton
                    color={'white'}
                    aria-label="instagram"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsInstagram size="28px" />} */}
                  </Stack>
                </Box>
              </Box>
   
              <Box bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')} w={400} borderRadius="lg" maxH="455px" alignContent="center" >
                <Box m={8}  color={'white'}>
                  <VStack spacing={5}>
                  <Text fontSize="xl" fontWeight="bold" color={useColorModeValue('grey.200', 'grey.200')}>Send us a direct message</Text>

                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name">
                      <FormLabel>Email</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="name" >
                      <FormLabel >Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: 'gray.300',
                        }}

                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <Button variant="solid" bg="#0D74FF" color="white" _hover={{}}>
                        Send Message
                      </Button>
                    </FormControl>
                  </VStack>
                </Box>
              </Box>
           
            <Box overflow='hidden' borderRadius={10} w={400} h={450}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1023.6851100697893!2d85.33048799804155!3d!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b0522ead%3A0x392af32fe87dd0ea!2sRadiant%20Infotech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1690782916035!5m2!1sen!2snp"
                className='footer-map'
                width="400"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Box>
    </Container>
  )
}

export default ContactCard