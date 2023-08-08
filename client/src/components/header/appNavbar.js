import React, { useEffect } from 'react';  // Import useEffect
import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const AppNavbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  // Add event listener to close the navbar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.mobile-navbar')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bg="blue.500"
      color="white"
    >
      {/* Mobile menu button */}
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open mobile menu"
          onClick={onToggle}
        />
      </Box>
      {/* Desktop navbar */}
      <Box display={{ base: 'none', md: 'block' }}>
        <Button variant="ghost" colorScheme="blue" mr={4}>
          Home
        </Button>
        <Button variant="ghost" colorScheme="blue" mr={4}>
          Jobs
        </Button>
        <Button variant="ghost" colorScheme="blue" mr={4}>
          Resume
        </Button>
        <Menu>
          <MenuButton as={Button} variant="ghost" colorScheme="blue" mr={4}>
            Documentation
          </MenuButton>
          <MenuList>
            <MenuItem>License</MenuItem>
            <MenuItem>Ads</MenuItem>
          </MenuList>
        </Menu>
        <Button variant="ghost" colorScheme="blue" mr={4}>
          Gallery
        </Button>
        <Menu>
          <MenuButton as={Button} variant="ghost" colorScheme="blue" mr={4}>
            About Us
          </MenuButton>
          <MenuList>
            <MenuItem>About Nepal</MenuItem>
            <MenuItem>Why Choose Us</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      
      {/* Mobile menu content */}
      {isOpen && (
        <Box
          className="mobile-navbar"  
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="blue.500"
          p="2"
          zIndex="999"
          h={'70vh'}
        >
          <Flex direction="column" justify="center" h="100%" align="center">
            <Button w="100%" colorScheme="blue" mb={2} size="sm">
              Home
            </Button>
            <Button w="100%" colorScheme="blue" mb={2} size="sm">
              Jobs
            </Button>
            <Button w="100%" colorScheme="blue" mb={2} size="sm">
              Resume
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                w="100%"
                colorScheme="blue"
                mb={2}
                size="sm"
              >
                Documentation
              </MenuButton>
              <MenuList>
                <MenuItem>License</MenuItem>
                <MenuItem>Ads</MenuItem>
              </MenuList>
            </Menu>
            <Button w="100%" colorScheme="blue" mb={2} size="sm">
              Gallery
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                w="100%"
                colorScheme="blue"
                mb={2}
                size="sm"
              >
                About Us
              </MenuButton>
              <MenuList>
                <MenuItem>About Nepal</MenuItem>
                <MenuItem>Why Choose Us</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Box>
      )}
    </Flex>
  );
};

export default AppNavbar;
