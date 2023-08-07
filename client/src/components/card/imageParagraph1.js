
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
  
  const ImageParagraph = () => {
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
          Message From Chairman
        </chakra.span>
      </chakra.h2>
      <chakra.p
        mt={4}
        
        _dark={{
          color: "gray.400",
        }}
        align={'left'}
      >
        Dear Valued Clients and Associates, <br/>
Greeting From SKY WAY MANAGEMENT.
Since it's operation SKY WAY Management is always propelled with the Ethic and professionalism at the Top. We are always dedicated to our valued clients for meeting their need at one-go to save the time and effort while recruiting the competent aspirants in the jobs.
We have a systematic procedure to hire the candidates in job based on their skills and experience which values for the operations of our valued client for the best out-put throughout the human capital.
We have a vast knowing of context of the work and its nature as per the requirement we receive from our clients and accordingly address for the best ...
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
        bgSize="cover"
        style={{
          backgroundImage:
            "url('https://skywaynepal.com/static/media/chairman.2b6c4f5ed4ec5e483c3c.JPG')",
        }}
        
      ></Box>
    </Box>
  </Box>
</Flex>
    )
  }
  
  export default ImageParagraph