import Logo from "../models/logoImageSchema.js"
import * as fs from "fs"
import path from "path"

export const PostLogo = async(req, res) => {
    try
    {
        if ( !req.file){
            res.status(404).json({
                msg: "Image not received."
            })
        }
        else{
            const image = fs.readFileSync(path.join("../server/uploads/logoImage/" + req.file.filename))
    
            const reqInclImage = {... req.body, logoImage: image}
    
            const data = await Logo.create(reqInclImage)
    
            if(data){
                res.status(200).json({
                    msg: "Logo added successfully."
                })
            }else{
                res.json({
                    msg: "Failed to add logo."
                })
            }
        }
       
    }catch(err){
        console.log("Error: " + err)
    }
}

export const EditLogo = async(req, res) => {
    try
    {
        if ( !req.file){
            res.status(404).json({
                msg: "Image not received."
            })
        }
        else{
            const image = fs.readFileSync(path.join("../server/uploads/logoImage/" + req.file.filename))
    
            const reqInclImage = {... req.body, logoImage: image}
    
            const data = await Logo.findByIdAndUpdate(req.body.id, reqInclImage)
    
            if(data){
                res.status(200).json({
                    msg: "Logo ypdated successfully."
                })
            }else{
                res.json({
                    msg: "Failed to update logo."
                })
            }
        }
       
    }catch(err){
        console.log("Error: " + err)
    }
}

export const GetLogo = async(req, res) => {
    try
    {
            const data = await Logo.findById("64f7dd65cec6babd1c0b5f07")
    
            if(data){
                res.status(200).json({
                    data
                })
            }else{
                res.json({
                    msg: "Failed to update logo."
                })
            }
       
    }catch(err){
        console.log("Error: " + err)
    }
}