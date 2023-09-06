import mongoose from "mongoose";
const Schema = mongoose;

const logoSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    logoImage: {
        type: Object,
        default: {},
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Logo", logoSchema, "Logo")


