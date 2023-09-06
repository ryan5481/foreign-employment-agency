import NavBar from "../models/navBarSchema.js"

export const AddMenuItem = async(req, res) => {
    try{
        // console.log(req.body)
            const data = await NavBar.create(req.body)
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

export const GetMenuItems = async(req, res) => {
    try{
        const data = await NavBar.find()
        if(data){
            res.status(200).json({
                data
            })
        }else{
            res.status(403).json({
                msg: "Failed to fetch data."
            }) 
        }
    }catch(error){
        console.log("error: " + error)
    }
}

export const EditMenuItem = async(req, res) => {
    try{
        // console.log(req.body)
        const updatedData = req.body; 
    await Promise.all(
      updatedData.map(async (item) => {
        await NavBar.findByIdAndUpdate(item._id, {
          label: item.label,
          children: item.children.map((child) => ({
            _id: child._id,
            label: child.label,
          })),
        });
      })
    );

    res.status(200).json({ message: "Data updated successfully" });
    }catch(error){
        console.log("error: " + error)
    }
}



export const DeleteMenuItem = async(req, res) => {
    try {
        const MenuId = req.params.id;

        const deletedMenu = await NavBar.findByIdAndDelete(MenuId);

        if (!deletedMenu) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
