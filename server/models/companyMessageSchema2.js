import mongoose from "mongoose";
const Schema = mongoose;

const companyMessageSchema2 = ({

    companyMessageLandmark: {
        type: String,
        default: "skywaynepal.com"
    },

    companyMsgImage2: {
        type: Object,
        default: {}
    },

    heading2: {
        type: String,
        default: "Message From Person 2"
    },
    
    text2: {
        type: String,
        default: "Message message message message message message message message message message."
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("CompanyMessage2", companyMessageSchema2, "CompanyMessage2")
