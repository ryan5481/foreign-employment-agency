import Admins from "../models/adminUserSchema.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv";

const saltRounds = 10



// export const AdminSignUp = async(req, res) => {
//     try{
//         const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds)

//         req.body.password = encryptedPassword

//         const data = await Admins.create(req.body)
//         if(data){
//             res.status(200).json({
//                 msg: "Admin account created successfully."
//             })
//         }else{
//             res.status(403).json({
//                 msg: "Admin account registration failed."
//             })
//         }
//     }catch(error){
//         console.error("Authentication error:", error);
//         return res.status(500).json({ msg: "Internal server error." });
//     }
// }

export const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const adminUser = await Admins.findOne({ email: email })

        if (!adminUser || !(await bcrypt.compare(password, adminUser.password))) {
            return (res.status(401).json({ msg: "Invalid email or password." }))
        } else {
            console.log(adminUser.fullName)
            res.status(200).json({
                msg: "Logged into admin account successfully.",
                fullName: adminUser.fullName,
                email: adminUser.email,
                id: adminUser._id
            })
        }
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ msg: "Internal server error." });
    }
}

export const EditAdminUserProfile = async (req, res) => {
    try {
        const { fullName, email } = req.body

        const updated = await Admins.findByIdAndUpdate(req.body._id, req.body)

        if (updated) {
            res.status(500).json({
                msg: "Profile updated!",
                fullName: updated.fullName,
                email: updated.email,
                id: updated._id
            })
        } else {
            res.json({ msg: "Error" })
        }

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ msg: "Internal server error." });
    }
}

