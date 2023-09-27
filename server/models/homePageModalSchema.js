import mongoose from "mongoose";
const Schema = mongoose;

const homePageModalSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    modalImage: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model("HomePageModal", homePageModalSchema, "HomePageModal")
