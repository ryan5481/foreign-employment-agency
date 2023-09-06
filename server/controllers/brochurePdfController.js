import Brochure from "../models/brochurePdfSchema.js"
import * as fs from "fs"
import path from "path"

export const UploadBrochure = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                msg: "File not received."
            });
        }

        const filePath = path.join("../server/uploads/brochurePdf/" + req.file.filename);
        const file = fs.readFileSync(filePath);

        const fileReq = { ...req.body, brochurePdfFile: file };

        const data = await Brochure.create(fileReq);

        if (data) {
            return res.status(200).json({
                msg: "File uploaded successfully."
            });
        } else {
            return res.status(500).json({
                msg: "Failed to upload file."
            });
        }
    } catch (err) {
        console.error("Error: " + err);
        return res.status(500).json({
            msg: "Internal server error."
        });
    }
};


export const UpdateBrochure = async(req, res) => {
    try
    {
        if ( !req.file){
            res.status(404).json({
                msg: "File not received."
            })
        }
        else{
            const file = fs.readFileSync(path.join("../server/uploads/brochurePdf/" + req.file.filename))
    
            const fileReq = {... req.body, brochurePdfFile: file}
    
            const data = await Brochure.findByIdAndUpdate(req.body.id, fileReq)
    
            if(data){
                res.status(200).json({
                    msg: "File updated successfully."
                })
            }else{
                res.json({
                    msg: "Failed to update file."
                })
            }
        }
       
    }catch(err){
        console.log("Error: " + err)
    }
}

export const GetBrochure = async (req, res) => {
    try {
        const brochureId = "64f8174bd3ffc9b5b018ee79"; 

        const data = await Brochure.findById(brochureId);

        if (data) {
            return res.status(200).json({
                data
            });
        } else {
            return res.status(404).json({
                msg: "Brochure not found."
            });
        }
    } catch (err) {
        console.error("Error: " + err);
        return res.status(500).json({
            msg: "Internal server error."
        });
    }
};
