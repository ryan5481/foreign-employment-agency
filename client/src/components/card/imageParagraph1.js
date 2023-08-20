
import React, { useState, useEffect } from 'react';
import {
    Box,
    chakra,
    Center,
    Flex,
    Link,
    Image,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react'
  import axios from 'axios';

  
  const ImageParagraph = () => {
    const [image1, setImage1] = useState('');
    const [heading1, setHeading1] = useState('');
    const [text1, setText1] = useState('');

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get-companymessage1');
        const data = response.data
        setImage1(`data:image/jpeg;base64,${data.data.companyMsgImage1}`);
        setHeading1(data.data.heading1);
        setText1(data.data.text1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);

    return (
      <Flex
  
  _dark={{
    bg: "#3e3e3e",
  }}
  p={10}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
  minH={"400px"}
    bg={useColorModeValue('blue.500', 'gray.1000')} 
    color={useColorModeValue('white', 'gray.1000')} 

    _dark={{
      bg: "gray.800",
    }}
    mx={{
      lg: 8,
    }}
    display={{
      lg: "flex",
    }}
    maxW={{
      lg: "7xl",
    }}
    w={"full"}
    maxH={"1000px"}
    shadow={{
      lg: "lg",
    }}
    rounded={{
      lg: "lg",
      base: "lg"
    }}
  >
        <Box
      py={12}
      px={6}
      maxW={{
        base: "xl",
        lg: "2xl",
      }}
      w={{
        lg: "50%",
      }}
    >
      <chakra.h2
        fontSize={{
          base: "2xl",
          md: "3xl",
        }}
        
        _dark={{
          color: "white",
        }}
        fontWeight="bold"
      >
        {" "}
        <chakra.span
          
          _dark={{
            color: "brand.400",
          }}
        >
          {heading1}
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        
        _dark={{
          color: "gray.400",
        }}
        align={'left'}
      >
        {text1}
      </chakra.p>
    </Box>
    <Box
      w={{
        lg: "50%",
      }}
    >
      <Box
        h={{
          base: 64,
          lg: "full",
        }}
        roundedRight={{
          lg: "lg",
        }}
        rounded={{
          base: "lg",
        }}
        bgSize="cover"
        style={{
          backgroundImage:
            `url(${image1})`,
        }}
        
      ></Box>
    </Box>
  </Box>
</Flex>
    )
  }
  
  export default ImageParagraph