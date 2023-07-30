import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react'

const data = {
  isNew: true,
  imageURL:
    'http://nepalmanpoweragency.com/admin/img/files/1601279949_COMPANY%20REGISTRAR.jpg',
  title: 'Company Certificate',
 
}



function ImageTitleLarge() {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="xl"
        borderWidth="1px"
        rounded="10px"
        shadow="lg"
        position="relative">
        {data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="blue.200" />
        )}

        <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6">         
          <Flex mt="1" justifyContent="center" alignContent="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              textAlign="center"
              >
              {data.title}
            </Box>  
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ImageTitleLarge