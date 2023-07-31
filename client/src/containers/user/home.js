import Carousel from "../../components/header/Carousel/carousel"
import CallToActionWithVideo from "../../components/card/callToActionWithVideo"
import ImageParagraph from "../../components/card/imageParagraph1"
import ImageParagraph2 from "../../components/card/imageParagraph2"
import { Box } from "@chakra-ui/react"
import StatisticsCard from "../../components/card/statsCard"
import TestimonialCard from "../../components/card/testimonialCard"
const Home = () => {
    
    return(
        <>
        <Box className="main" style={{height:"auto"}}>
            
            <Box>
                <Carousel/>
            </Box>
            <Box>
                <CallToActionWithVideo/>
            </Box>
            <Box>
                <ImageParagraph/>
            </Box>
            <Box>
            <ImageParagraph2/>
            </Box>   
            
            <Box>
            <StatisticsCard/>
            </Box> 
            <Box>
            <TestimonialCard/>
            </Box> 



        </Box>
        </>
    )
}

export default Home