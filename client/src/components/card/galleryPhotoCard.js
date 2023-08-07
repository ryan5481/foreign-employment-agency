import {
    Box, Image, Badge
} from '@chakra-ui/react'

import ModalImage from "react-modal-image";

const GalleryPhotoCard = (props) => {
    return (
        <>
            {props.galleryImages.map((picture, index) => {
                return(<>
                <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' shadow={'xl'}
                bg={'gray.100'}
                >
                    <ModalImage large={picture.src} small={picture.src} alt={picture.alt} />
                    <Box p='6'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                        </Box>
                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            {picture.title}
                        </Box>
                    </Box>
                </Box>
                </>)
            })}
        </>
    )
}

export default GalleryPhotoCard