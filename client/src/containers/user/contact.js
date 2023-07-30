import ContactCard from "../../components/card/contactCard"
import GoogleMapCard from "../../components/card/googleMapCard"
import {
    Heading, Grid
} from '@chakra-ui/react'

const Contact = () => {
    
    return(
        <>
        <div>
        <Heading m={2} fontSize={'2xl'} fontFamily={'body'}>
                    Get In Touch
                </Heading>

                <Grid  gap={5} p={1} align="center" rowGap={5}>
                    <ContactCard />
                    <GoogleMapCard />
                </Grid >
        </div>
        </>
    )
}

export default Contact