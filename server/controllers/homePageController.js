import TopCarousel from "../models/topCarouselSchema.js";
import CompanyMessage from "../models/companyMessageSchema.js"
import CompanyMessage2 from "../models/companyMessageSchema2.js"
import ValuableClients from "../models/valuableClientsSchema.js"
import Procedure from "../models/procedureSchema.js"
import Sectors from "../models/sectorsSchema.js"
import * as fs from "fs"
import path from "path"


// CAROUSEl
export const PostCarouselImages = async(req, res) => {
    try{
        if(req.file){
            console.log
            let carouselImage = fs.readFileSync(path.join("../server/uploads/topCarouselImages/" + req.file.filename))
        
        let updatedData = {...req.body, carouselImage: carouselImage}

        const data = await TopCarousel.create(updatedData)
            if(data){
                res.status(200).json({
                    msg: "Carousel images added successfully."})
            }else{
                res.status(403).json({
                    msg: "Failed to add carousel images."
                }) 
            }
        } else{
            console.log("File not received.")
        }
    }catch(error)
    {console.log(error)}
} 

export const GetCarouselImages = async(req, res) => {
    try{
        console.log(req)
        const data = await TopCarousel.find()
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

export const UpdateCarouselImage = async(req, res) => {
    try{
        console.log(req.body)
            if(req.file){
                const image = fs.readFileSync(path.join("../server/uploads/topCarouselImages/" + req.file.filename))
                const reqInclImage = {... req.body, carouselImage: image}
            const data = await TopCarousel.findByIdAndUpdate(req.body._id, reqInclImage)
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
            const data = await TopCarousel.findByIdAndUpdate(req.body._id, req.body)
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

export const DeleteCarouselImages = async(req, res) => {
    try {
        const imageId = req.params.id;

        const deletedImage = await TopCarousel.findByIdAndDelete(imageId);

        if (!deletedImage) {
            return res.status(404).json({ message: 'Image not found' });
        }

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Error deleting sector:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// COMPANY MESSAGE 1
export const SetCompanyMessage1 = async(req, res) => {
    try{
            if(req.file){
                const image = fs.readFileSync(path.join("../server/uploads/companyMsgImage/" + req.file.filename))
                const reqInclImage = {... req.body, companyMsgImage1: image}
            const data = await CompanyMessage.findByIdAndUpdate("64ddb0e1de60fbeb9f033f03", reqInclImage)
            if(data){
                res.status(200).json({
                    msg: "Company messages added successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to add company messages."
                }) 
            }
        }else{
            const data = await CompanyMessage.findByIdAndUpdate("64ddb0e1de60fbeb9f033f03", req.body)
            if(data){
                res.status(200).json({
                    msg: "Company messages added successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to add company messages."
                }) 
            }
        }  
    }catch(error){
        console.log("error: " + error)
    }
}

export const GetCompanyMessage1 = async(req, res) => {
    try{
        const data = await CompanyMessage.findByIdAndUpdate("64ddb0e1de60fbeb9f033f03", )
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch company messages."
            }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

// COMPANY MESSAGE 2
export const SetCompanyMessage2 = async(req, res) => {
    try{
            if(req.file){
                const image2 = fs.readFileSync(path.join("../server/uploads/companyMsgImage2/" + req.file.filename))
                const reqInclImage2 = {... req.body, companyMsgImage2: image2}
            const data = await CompanyMessage2.findByIdAndUpdate("64ddcfb8bb495641ea56d171", reqInclImage2)
            if(data){
                res.status(200).json({
                    msg: "Company messages added successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to add company messages."
                }) 
            }
        }else{
            const data = await CompanyMessage2.findByIdAndUpdate("64ddcfb8bb495641ea56d171", req.body)
            if(data){
                res.status(200).json({
                    msg: "Company messages added successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to add company messages."
                }) 
            }
        }  
    }catch(error){
        console.log("error: " + error)
    }
}

export const GetCompanyMessage2 = async(req, res) => {
    try{
        const data = await CompanyMessage2.findById("64ddcfb8bb495641ea56d171")
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch company messages."
            }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

//VALUABLE CLIENTS
export const SetValuableClients = async(req, res) => {
    try{

        if(req.file){
            const valuableClientsImage1 = fs.readFileSync(path.join("../server/uploads/valuableClientsImage/" + req.file.filename))
            const reqInclImage2 = {... req.body, valuableClientsImage1: valuableClientsImage1}
        const data = await ValuableClients.findByIdAndUpdate("64df465e5d1327708d1ff44b", reqInclImage2)
        if(data){
            res.status(200).json({
                msg: "Company messages added successfully.",
            })
        }else{
            res.status(403).json({
                msg: "Failed to add company messages."
            }) 
        }
    }else{
        const data = await ValuableClients.findByIdAndUpdate("64df465e5d1327708d1ff44b", req.body)
        if(data){
            res.status(200).json({
                msg: "Company messages added successfully.",
            })
        }else{
            res.status(403).json({
                msg: "Failed to add company messages."
            }) 
        }
        // let valuableClientsImage1 = {}
        // req.file && (valuableClientsImage1= fs.readFileSync(path.join("../server/uploads/valuableClientsImage/" + req.file.filename)))
        // const updatedReq = {... req.body, valuableClientsImage1: valuableClientsImage1}
            
        // const data = await ValuableClients.findByIdAndUpdate("64df465e5d1327708d1ff44b", (req.file ? (updatedReq) : (req.body)))
        // if(data){
        //     res.status(200).json({
        //         msg: "Data updated successfully.",
        //     })
        // }else{
        //     res.status(403).json({
        //         msg: "Failed to update data."
        //     }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

export const GetValuableClients = async(req, res) => {
    try{
        const data = await ValuableClients.findById("64df465e5d1327708d1ff44b")
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch company messages."
            }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

/// WORK SECTORS
export const AddWorkSector = async(req, res) => {
    try{
        console.log(req.body)
            if(req.file){
                const image = fs.readFileSync(path.join("../server/uploads/workSectors/" + req.file.filename))
                const reqInclImage = {... req.body, sectorImage: image}
            const data = await Sectors.create(reqInclImage)
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
            res.json({
                msg: "Image not selected"
            })
        }  
    }catch(error){
        console.log("error: " + error)
    }
}

export const SetWorkSectors = async(req, res) => {
    try{
        console.log(req.body)
            if(req.file){
                const image = fs.readFileSync(path.join("../server/uploads/workSectors/" + req.file.filename))
                const reqInclImage = {... req.body, sectorImage: image}
            const data = await Sectors.findByIdAndUpdate(req.body._id, reqInclImage)
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
            const data = await Sectors.findByIdAndUpdate(req.body._id, req.body)
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

export const GetWorkSectors = async(req, res) => {
    try{
        const data = await Sectors.find()
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch company messages."
            }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

export const DeleteWorkSector = async(req, res) => {
    try {
        const sectorId = req.params.id;

        const deletedSector = await Sectors.findByIdAndDelete(sectorId);

        if (!deletedSector) {
            return res.status(404).json({ message: 'Sector not found' });
        }

        res.status(200).json({ message: 'Sector deleted successfully' });
    } catch (error) {
        console.error('Error deleting sector:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// OPERATING PROCEDURE
export const AddProcedure = async(req, res) => {
    try{
        console.log(req.body)
            const data = await Procedure.create(req.body)
            if(data){
                res.status(200).json({
                    msg: "Data added successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to update changes."
                }) 
            }
    }catch(error){
        console.log("error: " + error)
    }
}

export const SetProcedure = async(req, res) => {
    try{
        console.log(req.body)
            const data = await Procedure.findByIdAndUpdate(req.body._id, req.body)
            if(data){
                res.status(200).json({
                    msg: "Changes updated successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to update changes."
                }) 
            }
    }catch(error){
        console.log("error: " + error)
    }
}

export const GetProcedure = async(req, res) => {
    try{
        const data = await Procedure.find()
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch company messages."
            }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

export const DeleteProcedure = async(req, res) => {
    try {
        const procedureId = req.params.id;

        const deletedSector = await Procedure.findByIdAndDelete(procedureId);

        if (!deletedSector) {
            return res.status(404).json({ message: 'Sector not found' });
        }

        res.status(200).json({ message: 'Sector deleted successfully' });
    } catch (error) {
        console.error('Error deleting sector:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}