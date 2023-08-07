import HeroWithBg from "../../components/card/heroWithBg"
import GridTextList from "../../components/card/gridTextList"
import {Box, useColorModeValue} from "@chakra-ui/react"
import ArticleCard from "../../components/card/articleCard"
import HeroWithBgButton from "../../components/card/heroWithBgButton"

const AboutUs = () => {

    return (
        <>
            <Box bg={useColorModeValue('teal.50', 'gray.1000')}>
                <Box>
                <HeroWithBgButton/>
                    <ArticleCard/>
                </Box>
            </Box>
        </>
    )
}

export default AboutUs