import Contact from "../models/contactSchema.js"

export const PostContact = async(req, res) => {
    try
    {

        const data = await Contact.create(req.body)
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

export const EditContact = async(req, res) => {
    try
    {
        const updatedData = await Contact.findOneAndUpdate(req.body._id, req.body)
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

export const GetContact =  async(req, res) => {
    // const headerLandmark = "headerLandmark"
    try{
        const data = await Contact.findById({_id: "64f5be64a202c937ea933da7"})
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.json({
                msg: "Failed to fetch header."
            })
        }
        
    }catch(err){
        console.log("Error: " + err)}
}

//LOGO

