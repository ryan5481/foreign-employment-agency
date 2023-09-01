import {
  Flex,
  Circle,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import ModalImage from "react-modal-image";



const ImageTitleLarge = (props) => {
  return (
    <Flex p={50} w="full" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        w='sm'

        borderWidth="1px"
        rounded="10px"
        shadow="lg"
        position="relative">
        {props.data.isNew && (
          <Circle size="10px" position="absolute" top={2} right={2} bg="blue.200" />
        )}
        <ModalImage large={`data:image/jpeg;base64,${props.data.certificateImage}`} small={`data:image/jpeg;base64,${props.data.certificateImage}`} alt={props.data.certificateTitle} />

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
              {props.data.certificateTitle}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default ImageTitleLarge