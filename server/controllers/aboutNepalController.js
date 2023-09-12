import AboutNepal from "../models/aboutNepalSchema.js"
import * as fs from "fs"
import path from "path"

export const PostAboutNepal = async(req, res) => {
    try
    {
        if(req.file){
            let heroImage = fs.readFileSync(path.join("../server/uploads/aboutNepalImage/" + req.file.filename))
        
        let updatedData = {...req.body, heroImage: heroImage}
        const data = await AboutNepal.create(updatedData)
        if(data){
            res.status(200).json({
                msg: "Data added!"
            })
        }else{
            res.status(403).json({
                msg: "Failed to add data."
            })
        }
    }
    }catch(err){
        console.log("Error: " + err)
    }
}

export const UpdateAboutNepal = async(req, res) => {
    try {
        if(req.file){
        let image = fs.readFileSync(path.join("../server/uploads/aboutNepalImage/" + req.file.filename))

        const reqInclImage = {... req.body, heroImage: image}

        const updated = await AboutNepal.findByIdAndUpdate("64feb48ce9609488a3895a38", reqInclImage)

        if (updated){
            res.status(200).json({
                msg: "Data modified!"
            })
        }else{
            res.status(401).json({
                msg: "Failed to modify data."
            })
        }
    }
    const updated = await AboutNepal.findByIdAndUpdate("64feb48ce9609488a3895a38", req.body)

    if (updated){
        res.status(200).json({
            msg: "Data modified!"
        })
    }else{
        res.status(401).json({
            msg: "Failed to modify data."
        })
    }
    }catch(error){
        console.log(error);
    }
}


export const GetAboutNepal =  async(req, res) => {
    try{
        const data = await AboutNepal.findById("64feb48ce9609488a3895a38")
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(401).json({
                msg: "Failed to get data."
            })
        }
    }catch(err){
        console.log("Error: " + err)}
}

