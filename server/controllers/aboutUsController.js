import AboutUs from "../models/aboutUsSchema.js"
import * as fs from "fs"
import path from "path"

export const PostAboutUs = async(req, res) => {
    try
    {
        const data = await AboutUs.findByIdAndUpdate("64dcc0fb23b36c3c4ab2cf9f", req.body)
        if(data){
            res.status(200).json({
                msg: "Data modified!"
            })
        }else{
            res.status(403).json({
                msg: "Failed to publish the job."
            })
        }
    }catch(err){
        console.log("Error: " + err)
    }
}

export const GetAboutUs =  async(req, res) => {
    try{
        const headerData = await AboutUs.findById("64dcc0fb23b36c3c4ab2cf9f")
        if(headerData){
            res.status(200).json({
                headerData
            })
        }else{
            res.status(401).json({
                msg: "Failed to modify data."
            })
        }
    }catch(err){
        console.log("Error: " + err)}
}

export const UpdateAboutUsImage = async(req, res) => {
    try {
        const image = fs.readFileSync(path.join("../server/uploads/aboutUsImage/" + req.file.filename))

        const reqInclImage = {... req.body, aboutUsImage: image}

        const updated = await AboutUs.findByIdAndUpdate("64dcc0fb23b36c3c4ab2cf9f", reqInclImage)

        if (updated){
            res.status(200).json({
                msg: "Image modified!"
            })
        }else{
            res.status(401).json({
                msg: "Failed to modify image."
            })
        }
    }catch(error){
        console.log(error);
    }

}