import Admins from "../models/adminUserSchema.js"
import bcrypt from "bcrypt"
import dotenv from "dotenv";

const saltRounds = 10


export const AdminSignUp = async(req, res) => {
    try{
        const encryptedPassword = await bcrypt.hash(req.body.password, saltRounds)

        req.body.password = encryptedPassword

        const data = await Admins.create(req.body)
        if(data){
            res.status(200).json({
                msg: "Admin account created successfully."
            })
        }else{
            res.status(403).json({
                msg: "Admin account registration failed."
            })
        }
    }catch(error){
        console.error("Authentication error:", error);
        return res.status(500).json({ msg: "Internal server error." });
    }
}

export const AdminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const adminUser = await Admins.findOne({ email: email })

        if (!adminUser || !(await bcrypt.compare(password, adminUser.password))) {
            return (res.status(401).json({ msg: "Invalid email or password." }))
        } else {
            // console.log(adminUser.fullName)
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

        const updated = await Admins.findByIdAndUpdate(req.body._id, req.body)

        if (updated) {
            res.status(200).json({
                msg: "Profile updated!",
                fullName: req.body.fullName,
                email: req.body.email,
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

export const ChangeAdminUserPassword = async (req, res) => {
    try {
        const { currentPassword, newPassword, _id } = req.body

        const user = Admins.findById(_id)

        if (!user) {
            return res.status(404).json({ msg: "User not found." })
        }

        const isMatch = bcrypt.compare(currentPassword, user.password)

        if (!isMatch) {
            return res.status(401).json({ msg: "Current password is incorrect." })
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10)
        user.password = hashedNewPassword
        await user.save()

        return res.status(200).json({ msg: "Password updated successfully." })

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ msg: "Internal server error." });
    }
}

export const GetAdminUserProfile = async (req, res) => {
    try {

        const profile = await Admins.findById(req.body._id)

        if (profile) {
            res.status(200).json({
                fullName: profile.fullName,
                email: profile.email,
            })
        } else {
            res.json({ msg: "Error" })
        }

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ msg: "Internal server error." });
    }
}

export const GetPass = async (req, res) => {
    try {
        // console.log(req.params)
        const data = await Admins.findById(req.params.id)

        if (data) {
            res.status(200).json({
                pass: data.password,
            })
        } else {
            res.json({ msg: "Error" })
        }

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ msg: "Internal server error." });
    }
}

