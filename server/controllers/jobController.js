import Jobs from "../models/jobSchema.js"

//Publish jobs from admin panel
export const PublishJob = async(req, res) => {
    try
    {
        const data = await Jobs.create(req.body)
        if(data){
            res.status(200).json({
                msg: "Job published successfully!"
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

//Fetch jobs from user's end
export const GetJobsList =  async(req, res) => {
    try{
        const jobsList = await Jobs.find()
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