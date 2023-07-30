import Header from "../../components/header/header"
import Carousel from "../../components/header/Carousel/carousel"
import NavBar from "../../components/header/navBar"
import TextImgCard1 from "../../components/card/textImgCard1"
import TextImgCard2 from "../../components/card/textImgCard2"
import CategoryCard from "../../components/card/categoryCard"
import Footer from "../../components/footer/footer"

const Home = () => {
    
    return(
        <>
        <NavBar/>
        <div className="main">
            <div>
                <Header/>
            </div>
            <div>
                <Carousel/>
            </div>
            <div>
                <TextImgCard1/>
            </div>
            <div>
                <TextImgCard2/>
            </div>
            <div>
                <TextImgCard2/>
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
            <div>
                <Footer/>
            </div>
        </div>
        </>
    )
}

export default Home