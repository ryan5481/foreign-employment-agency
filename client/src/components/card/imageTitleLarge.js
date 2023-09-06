import {
  Image,
  Wrap,
  useColorModeValue
} from '@chakra-ui/react'
import ModalImage from "react-modal-image";



const ImageTitleLarge = (props) => {
  return (
<Wrap
  p={2}
  bg={useColorModeValue('white', 'gray.800')}
  w={{ sm: 'xs', md: 'sm', lg: "sm" }}
  alignItems="center"
  justifyContent="center"
  rounded="10px"
  borderWidth="1px"
  shadow="lg"
  position="relative"
  isCentered
>
  <Image
    objectFit="cover" // Set object-fit to "cover"
    width="100%"
    src={`data:image/jpeg;base64,${props.data.newsAdImage}`}
  />
</Wrap>

  )
}

export default ImageTitleLarge