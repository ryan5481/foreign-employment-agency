import TopCarousel from "../models/topCarouselSchema.js";
import CompanyMessage from "../models/companyMessageSchema.js"
import CompanyMessage2 from "../models/companyMessageSchema2.js"
import ValuableClients from "../models/valuableClientsSchema.js"
import Sectors from "../models/sectorsSchema.js"
import * as fs from "fs"
import path from "path"


// CAROUSEl
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