import mongoose from "mongoose";
const Schema = mongoose;

const adminUserSchema = ({
    landmark: {
        type: String,
        default: "radiantInfoTech"
    },
    
    fullName: {
        type: String,
        default: "Full Name"
    },

    profilePicture: {
        type: Object,
    },
    
    email: {
        type: String,
        unique: true,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
   
    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Admins", adminUserSchema, "Admins")