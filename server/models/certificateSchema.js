import mongoose from "mongoose";

const certificateSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    certificateImage: {
        type: Object,
        default:{},
    },

    certificateTitle: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Certificate", certificateSchema, "Certificate")
