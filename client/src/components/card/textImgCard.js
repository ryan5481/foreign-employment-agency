
import {
    Badge,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  
  const TextImgCard2 = () => {
    return (
      <Center py={6}>
        <Stack
          borderWidth="0px"
          textAlign={'left'}
          w={{ xl: '100%', md: '540px' }}
          height={{ m: '476px', md: '20rem' }}
          direction={{ base: 'column', md: 'row' }}
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'xl'}
          padding={5}>
          <Flex flex={1} bg="blue.200">
            <Image
              objectFit="cover"
              boxSize="100%"
              src={
                'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt="#"
            />
          </Flex>
          <Stack
            flex={1}
            flexDirection="column"
            justifyContent="center"
            alignItems="left"
            paddingLeft={{m: '10px', md: '20rem'}}
  
            p={1}
            pt={2}>
            <Heading fontSize={'4xl'} fontFamily={'body'}>
              About Us
            </Heading>
            {/* <Text fontWeight={600} color={'gray.500'} size="sm" mb={4} fontSize={'2xl'}>
              CEO
            </Text> */}
  
            <Text
              textAlign={'left'}
              fontSize={'ml'}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              We Prokleen Group consist of two companies, NATIONAL SECURITY GUARDS LLC and PROKLEEN SERVICES LLC specialized in different fields which are closely connected with the daily life of people and cannot be exempted at all.
  
              National Security Guards LLC known as NSG in UAE providing all kind of manned Security Services since 2006 onward and become one of the most remarkable, reputed and unavoidable institution in Dubai by providing our unique services to the society with our dynamic employees. We Prokleen Group consist of two companies, NATIONAL SECURITY GUARDS LLC and PROKLEEN SERVICES LLC specialized in different fields which are closely connected with the daily life of people and cannot be exempted at all.
  
              National Security Guards LLC known as NSG in UAE providing all kind of manned Security Services since 2006 onward and become one of the most remarkable, reputed and unavoidable institution in Dubai by providing our unique services to the society with our dynamic employees.
            </Text>
  
  
            <Stack
              width={'100%'}
              mt={'2rem'}
              direction={'row'}
              padding={2}
              justifyContent={'left'}
              alignItems={'left'}>
  
              <Button
                fontSize={'sm'}
                rounded={'5px'}
                bg={'blue.400'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                  bg: 'blue.500',
                }}
                _focus={{
                  bg: 'blue.500',
                }}>
                Read More
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    )
  }
  
  export default TextImgCard2