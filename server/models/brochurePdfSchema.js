import mongoose from "mongoose";

const brochurePdfSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    brochurePdfFile: Buffer,

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Brochure", brochurePdfSchema, "Brochure")


