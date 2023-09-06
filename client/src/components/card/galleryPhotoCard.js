import React, { useState } from 'react';
import {
    Box, Image, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
} from '@chakra-ui/react';

const GalleryPhotoCard = (props) => {
    return (
        <>
            {props.imageGalleryData.map((imageData, index) => (
                <GalleryImage key={imageData.imageId} imageData={imageData} />
            ))}
        </>
    );
};

const GalleryImage = ({ imageData }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                maxW='sm'
                borderWidth='1px'
                borderRadius='lg'
                overflow='hidden'
                shadow={'xl'}
                bg={'gray.100'}
                onClick={onOpen}
                cursor='pointer'
            >
                <Image
                    src={`data:image/jpeg;base64,${imageData.galleryImage}`}
                    alt={imageData.imageTitle}
                    objectFit='fill'
                    minW='100%'
                    minH='70%'
                />
                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                    </Box>
                    <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
                        {imageData.imageTitle}
                    </Box>
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size='xl' zIndex={9999} >
                    <ModalOverlay />
                    <ModalContent minW={'80%'}>
                       
                        <ModalBody  >
                                <Image
                                    py={3}
                                    src={`data:image/jpeg;base64,${imageData.galleryImage}`}
                                    alt={imageData.imageTitle}
                                    objectFit='contain'
                                    w='100%'
                                    h='100%'
                                />
                            
                        </ModalBody>
                    </ModalContent>
            </Modal>
        </>
    );
};

export default GalleryPhotoCard;
