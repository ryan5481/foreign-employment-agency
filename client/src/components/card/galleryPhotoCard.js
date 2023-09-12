import React, { useState } from 'react';
import {
    Box, Image, Badge, useDisclosure, Modal, ModalOverlay, ModalContent, Center, ModalCloseButton, ModalBody, ModalFooter,
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
                <Center>
                <Image
                    src={`data:image/jpeg;base64,${imageData.galleryImage}`}
                    alt={imageData.imageTitle}
                    rounded={"10px"}
                    border={"2px solid white"}
                    objectFit='stretch'
                    h='auto'
                    onClick={onOpen}
                />
                </Center>
            <Modal isOpen={isOpen} onClose={onClose} size='xl' zIndex={9999} >
                    <ModalOverlay />
                    <ModalContent minW={'80%'}>
                       
                        <ModalBody  >
                                <Image
                                rounded="10px"
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
