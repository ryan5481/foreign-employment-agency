import JobDescription from "../models/jobDescriptionSchema.js"
import * as fs from "fs"
import path from "path"

//Publish jobs from admin panel
export const PublishJob = async(req, res) => {
    try{
        const jobCode = Date.now().toString()
            const newReq = {...req.body, jobCode: jobCode.slice(-8)}
        
        // if(req.file){
        //     let jobImage = fs.readFileSync(path.join("../server/uploads/jobImages/" + req.file.filename))
        
        // let updatedData = {...newReq, jobImage: jobImage}

        const data = await JobDescription.create(newReq)
            if(data){
                res.status(200).json({
                    msg: "Job posted successfully."})
            }else{
                res.status(403).json({
                    msg: "Failed to post the job."
                }) 
            }
        // } else{
        //     console.log("File not received.")
        // }
    }catch(error)
    {console.log(error)}
} 

//Fetch jobs from user's end
export const GetJobsList =  async(req, res) => {
    try{
        console.log("Jobs list fetched")
        const jobsList = await JobDescription.find()
        if(jobsList){
            res.status(200).json({
                jobsList
            })
        }else{
            res.status(401).json({
                msg: "Failed to fetch the jobs list."
            })
        }
    }catch(err){
        console.log("Error: " + err)}
}

export const UpdateJobDescription = async(req, res) => {
    try{
        // console.log(req.body)
            if(req.file){
                const jobImage = fs.readFileSync(path.join("../server/uploads/jobImages/" + req.file.filename))
                const reqInclImage = {... req.body, jobImage: jobImage}
            const data = await JobDescription.findByIdAndUpdate(req.body._id, reqInclImage)
            if(data){
                res.status(200).json({
                    msg: "Job description successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to update job description."
                }) 
            }
        }else{
            const data = await JobDescription.findByIdAndUpdate(req.body._id, req.body)
            if(data){
                res.status(200).json({
                    msg: "Job description successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to update job description."
                }) 
            }
        }  
    }catch(error){
        console.log("error: " + error)
    }
}

export const DeleteJob = async(req, res) => {
    try {
        const job_id = req.params.id;

        const deletedJob = await JobDescription.findByIdAndDelete(job_id);

        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        console.error('Error deleting job:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}