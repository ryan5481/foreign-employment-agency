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

export const EditContact = async (req, res) => {
    try {
        console.log(req.params, req.body);

        const contactId = req.params.id;
        const updatedFields = req.body;

        if (!updatedFields || Object.keys(updatedFields).length === 0) {
            return res.status(400).json({ msg: "No valid update data provided." });
        }

        const updatedContact = await Contact.findByIdAndUpdate(
            contactId,
            { $set: updatedFields },
            { new: true } // Return the updated contact document
        );

        if (updatedContact) {
            return res.status(200).json({
                msg: "Updated successfully.",
                updatedContact // Optionally, you can include the updated contact in the response
            });
        } else {
            return res.status(404).json({
                msg: "Contact not found." // Adjust this message according to your use case
            });
        }
    } catch (err) {
        console.error("Error: " + err);
        return res.status(500).json({
            msg: "Internal server error." // Adjust this message according to your use case
        });
    }
};

export const GetContact =  async(req, res) => {
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

