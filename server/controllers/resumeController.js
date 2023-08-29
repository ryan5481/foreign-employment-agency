import Resume from "../models/resumeSchema.js"

export const PostResume = async(req, res) => {
    try{
        // console.log(req.body)
            const data = await Resume.create(req.body)
            if(data){
                res.status(200).json({
                    msg: "Resume submitted successfully.",
                })
            }else{
                res.status(403).json({
                    msg: "Failed to submit resume."
                }) 
            }
    }catch(error){
        console.log("error: " + error)
    }
}

export const EditResume = async(req, res) => {
    try{
        // console.log(req.body)
            const data = await Resume.findByIdAndUpdate(req.body._id, req.body)
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

export const GetResumes = async(req, res) => {
    try{
        const data = await Resume.find()
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch resumes."
            }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

export const DeleteResume = async(req, res) => {
    try {
        const resumeId = req.params.id;

        const deletedResume = await Resume.findByIdAndDelete(resumeId);

        if (!deletedResume) {
            return res.status(404).json({ message: 'Resume not found' });
        }

        res.status(200).json({ message: 'Resume deleted successfully' });
    } catch (error) {
        console.error('Error deleting resume:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
