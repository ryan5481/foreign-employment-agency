import ContactCard from "../../components/card/contactCard"
import {
    Heading, Grid, Box, HStack, useColorModeValue, Center
} from '@chakra-ui/react'

const Contact = () => {
    
    return(
        <Center bg={useColorModeValue('teal.50', 'gray.1000')} w={'full'}>
            {/* <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                        Get In Touch
                    </Heading> */}
            <HStack bg={useColorModeValue('blue.500', 'gray.1000')} color={'white'}>

                    <Grid  gap={5} p={1} align="center" rowGap={5}>
                        <ContactCard />
                    </Grid >
            </HStack>
        </Center>
    )
}

export default Contact