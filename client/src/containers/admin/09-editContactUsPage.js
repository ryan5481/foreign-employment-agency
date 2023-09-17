import { Box, useColorModeValue } from "@chakra-ui/react"
import EditContactUs  from "../../components/adminPanel/editContactUs.js"

const EditContactUsPage = () => {
    return(<>
    <Box h={"100vh"} >
        <EditContactUs bg={useColorModeValue('purple.300', 'purple.800')}/>
    </Box>
    </>)
}

export default EditContactUsPage