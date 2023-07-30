import Carousel from "../../components/header/Carousel/carousel"
import CallToActionWithVideo from "../../components/card/callToActionWithVideo"
import ImageParagraph from "../../components/card/imageParagraph1"
import ImageParagraph2 from "../../components/card/imageParagraph2"
import CategoryCard from "../../components/card/categoryCard"

const Home = () => {
    
    return(
        <>
        <div className="main" style={{height:"auto"}}>
            
            <div>
                <Carousel/>
            </div>
            <div>
                <CallToActionWithVideo/>
            </div>
            <div>
                <ImageParagraph/>
            </div>
            <div>
            <ImageParagraph2/>
            </div>
            <div>
                <CategoryCard/>
            </div>
            <div>
                <h1>Application Procedure</h1>
            </div>
            <div>
                <h1>Our Team</h1>
            </div>
            <div>
                <h1>Our Clients</h1>
            </div>
            <div>
                <h1>Our Clients</h1>
            </div>
            <div>
                <h1>Testimonials</h1>
            </div>
           
        </div>
        </>
    )
}

export default Home