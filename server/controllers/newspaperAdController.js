import * as fs from "fs"
import path from "path"
import NewspaperAd from "../models/newspaperAdSchema.js"

//BOTTOM SMOOTH CAROUSEL
export const PostNewsAd = async(req, res) => {
    try{
        if(req.file){
            let newsAdImage = fs.readFileSync(path.join("../server/uploads/newspaperAdImages/" + req.file.filename))
        
        let updatedData = {...req.body, newsAdImage: newsAdImage}

        const data = await NewspaperAd.create(updatedData)
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

export const GetNewsAd = async(req, res) => {
    try{
        // console.log(req)
        const data = await NewspaperAd.find()
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

export const EditNewsAd = async(req, res) => {
    try{
        // console.log(req.body)
            if(req.file){
                const newsAdImage = fs.readFileSync(path.join("../server/uploads/newspaperAdImages/" + req.file.filename))
                const reqInclImage = {... req.body, newsAdImage: newsAdImage}
            const data = await NewspaperAd.findByIdAndUpdate(req.body._id, reqInclImage)
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
            const data = await NewspaperAd.findByIdAndUpdate(req.body._id, req.body)
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

export const DeleteNewsAd = async(req, res) => {
    try {
        const imageId = req.params.id;

        const deletedImage = await NewspaperAd.findByIdAndDelete(imageId);

        if (!deletedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting sector:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
