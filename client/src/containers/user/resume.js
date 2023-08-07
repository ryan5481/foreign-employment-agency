import MultiStepForm from "../../components/form/multiStepForm"
import {Box, useColorModeValue} from "@chakra-ui/react"

const Resume = () => {
    
    return(
        <Box 
        py={5}
        bg={useColorModeValue('teal.50', 'gray.800')}
        color={useColorModeValue('blue.500', 'gray.100')}
        >
        <MultiStepForm/>
        </Box>
    )
}

export default Resume