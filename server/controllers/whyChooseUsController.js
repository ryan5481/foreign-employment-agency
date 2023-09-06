import WhyChooseUs from "../models/whyChooseUs.js"
import * as fs from "fs"
import path from "path"

export const PostChooseUs = async(req, res) => {
    try
    {
        if(req.file){
            let heroImage = fs.readFileSync(path.join("../server/uploads/chooseUsImage/" + req.file.filename))
        
        let updatedData = {...req.body, heroImage: heroImage}
        const data = await WhyChooseUs.create(updatedData)
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

export const UpdateChooseUs = async(req, res) => {
    try {
        if(req.file){
        let image = fs.readFileSync(path.join("../server/uploads/chooseUsImage/" + req.file.filename))

        const reqInclImage = {... req.body, heroImage: image}

        const updated = await WhyChooseUs.findByIdAndUpdate("64f6b6fbc1ae33a0db5120b2", reqInclImage)

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
    const updated = await WhyChooseUs.findByIdAndUpdate("64f6b6fbc1ae33a0db5120b2", req.body)

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


export const GetChooseUs =  async(req, res) => {
    try{
        const data = await WhyChooseUs.findById("64f6b6fbc1ae33a0db5120b2")
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(401).json({
                msg: "Failed to modify data."
            })
        }
    }catch(err){
        console.log("Error: " + err)}
}

