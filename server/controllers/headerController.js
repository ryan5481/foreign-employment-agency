import Header from "../models/headerSchema.js"

//Publish jobs from admin panel
export const PostHeader = async(req, res) => {
    try
    {

        const data = await Header.create(req.body)
        if(data){
            res.status(200).json({
                msg: "Header updated successfully."
            })
        }else{
            res.json({
                msg: "Failed to update header."
            })
        }
       
    }catch(err){
        console.log("Error: " + err)
    }
}

export const EditHeader = async(req, res) => {
    try
    {
        const updatedData = await Header.findOneAndUpdate(req.body._id, req.body)
        if(updatedData){
            res.status(200).json({
                msg: "Header updated successfully."
            })
        }else{
            res.json({
                msg: "Failed to update header."
            })
        }
       
    }catch(err){
        console.log("Error: " + err)
    }
}

//Fetch jobs from user's end
export const GetHeader =  async(req, res) => {
    // const headerLandmark = "headerLandmark"
    try{
        const headerData = await Header.findById({_id: "64d8feda20a5c46426639c21"})
        if(headerData){
            res.status(200).json({
                headerData
            })
        }else{
            res.json({
                msg: "Failed to fetch header."
            })
        }
        
    }catch(err){
        console.log("Error: " + err)}
}