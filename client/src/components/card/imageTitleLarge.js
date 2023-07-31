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


const ImageTitleLarge = (props) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="xl"
        borderWidth="1px"
        rounded="10px"
        shadow="lg"
        position="relative">
        {props.data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="blue.200" />
        )}

        <Image src={props.data.imageURL} alt={`Picture of ${props.data.name}`} roundedTop="lg" />

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
              {props.data.title}
            </Box>  
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ImageTitleLarge