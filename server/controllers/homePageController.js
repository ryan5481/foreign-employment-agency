import * as fs from "fs"
import TopCarousel from "../models/topCarouselSchema.js";

export const PostCarouselImages = async(req, res) => {
    try{
        if(req.files){
            let carouselImagesList = req.files.map((image) => {
                return fs.readFileSync("../server/uploads/topCarouselImages/" + image.filename)
            })
        
        let updatedData = {...req.body, carouselImages: carouselImagesList}

        const data = await TopCarousel.findByIdAndUpdate("64db1edb487cd0c020bc0786", updatedData)
            if(data){
                res.status(200).json({
                    msg: "Carousel images added successfully.",
                    data
                })
            }else{
                res.status(403).json({
                    msg: "Failed to add carousel images."
                }) 
            }
        } 
    }catch(error)
    {console.log(error)}
} 


export const GetCarouselImages = async(req, res) => {
    try{
        const data = await TopCarousel.findById({_id: "64db1edb487cd0c020bc0786"})
        if(data){
            res.status(200).json({
                msg: "Success",
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch carousel images."
            }) 
        }
    } catch(error){
        console.log(error)}
}