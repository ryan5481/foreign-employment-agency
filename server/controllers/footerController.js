import Footer from "../models/footerSchema.js"
//Publish jobs from admin panel
export const PostFooter = async(req, res) => {
    try
    {
        const newReq = {... req.body}
        newReq.footerLandmark= "skywaynepal.com"

        const data = await Footer.create(newReq)
        if(data){
            res.status(200).json({
                msg: "Footer updated successfully."
            })
        }else{
            res.json({
                msg: "Failed to update foooter."
            })
        }
       
    }catch(err){
        console.log("Error: " + err)
    }
}

export const EditFooter = async(req, res) => {
    try
    {
        const updatedData = await Footer.findOneAndUpdate(req.body._id, req.body)
        if(updatedData){
            res.status(200).json({
                msg: "Footer updated successfully."
            })
        }else{
            res.json({
                msg: "Failed to update footer."
            })
        }
       
    }catch(err){
        console.log("Error: " + err)
    }
}

//Fetch jobs from user's end
export const GetFooter =  async(req, res) => {
    // const headerLandmark = "headerLandmark"
    try{
        const footerData = await Footer.findById({_id: "64da08ea0920c5a46664282f"})
        if(footerData){
            res.status(200).json({
                footerData
            })
        }else{
            res.json({
                msg: "Failed to fetch footer."
            })
        }
        
    }catch(err){
        console.log("Error: " + err)}
}