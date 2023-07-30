import NavBar from "../../components/header/navBar"
// import TextImgCard from "../../components/card/textImgCard"


const About = () => {
    
    return(
        <>
         <NavBar/>
         <div className="main">
            <div className="banner-img">
                <img src="https://educationbytes.in/wp-content/uploads/2022/07/NIT-rourkela.jpg"
                alt="banner image" />
            </div>
            
            <div>
                {/* <TextImgCard/> */}
            </div>
            <div>
                <h1>Text 2</h1>
            </div>
         </div>
        </>
    )
}

export default About