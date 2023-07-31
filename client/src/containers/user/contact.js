import ContactCard from "../../components/card/contactCard"
import {
    Heading, Grid, Flex, HStack
} from '@chakra-ui/react'

const Contact = () => {
    
    return(
        <>
        <Heading m={2} fontSize={'2xl'} fontFamily={'body'} p={5}>
                    Get In Touch
                </Heading>
        <HStack>

                <Grid  gap={5} p={1} align="center" rowGap={5}>
                    <ContactCard />
                </Grid >
        </HStack>
        </>
    )
}

export default Contact