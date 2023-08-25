import mongoose from "mongoose";
const Schema = mongoose;

const companyMessageSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    companyMsgImage1: {
        type: Object,
        default:{}
    },

    heading1: {
        type: String,
        default: "Message From Person 1"
    },
    
    text1: {
        type: String,
        default: "Message message message message message message message message message message."
    },

    heading2: {
        type: String,
        default: "Message From Person 2"
    },


    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("CompanyMessage", companyMessageSchema, "CompanyMessage")
