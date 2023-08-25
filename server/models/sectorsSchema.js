
import mongoose from "mongoose";

const sectorsSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    serialNumber: {
        type: Number,
        default: 1,
    },

    sectorTitle: {
        type: String,
    },

    sectorImage: {
        type: Object,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Sectors", sectorsSchema, "Sectors")
