import * as fs from "fs"
import path from "path"
import GalleryImage from "../models/galleryImageSchema.js"

//BOTTOM SMOOTH CAROUSEL
export const PostGalleryImage = async(req, res) => {
    try{
        console.log(req.file)
        if(req.file){
            let galleryImage = fs.readFileSync(path.join("../server/uploads/galleryImages/" + req.file.filename))
        
        let updatedData = {...req.body, galleryImage: galleryImage}

        const data = await GalleryImage.create(updatedData)
            if(data){
                res.status(200).json({
                    msg: "Image added successfully."})
            }else{
                res.status(403).json({
                    msg: "Failed to add image."
                }) 
            }
        } else{
            console.log("File not received.")
        }
    }catch(error)
    {console.log(error)}
} 

export const GetGalleryImages = async(req, res) => {
    try{
        // console.log(req)
        const data = await GalleryImage.find()
        if(data){
            res.status(200).json({
                msg: "Success",
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch images."
            }) 
        }
    } catch(error){
        console.log(error)}
}

export const EditGalleryImage = async(req, res) => {
    try{
        // console.log(req.body)
            if(req.file){
                const galleryImage = fs.readFileSync(path.join("../server/uploads/galleryImages/" + req.file.filename))
                const reqInclImage = {... req.body, galleryImage: galleryImage}
            const data = await GalleryImage.findByIdAndUpdate(req.body._id, reqInclImage)
            if(data){
                res.status(200).json({
                    msg: "Changes updated successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to update changes."
                }) 
            }
        }else{
            const data = await GalleryImage.findByIdAndUpdate(req.body._id, req.body)
            if(data){
                res.status(200).json({
                    msg: "Changes updated successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to update changes."
                }) 
            }
        }  
    }catch(error){
        console.log("error: " + error)
    }
}

export const DeleteGalleryImage = async(req, res) => {
    try {
        const imageId = req.params.id;

        const deletedImage = await GalleryImage.findByIdAndDelete(imageId);

        if (!deletedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting sector:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
