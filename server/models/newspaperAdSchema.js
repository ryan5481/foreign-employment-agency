import mongoose from "mongoose";

const newspaperAdSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    newsAdImage: {
        type: Object,
        default:{},
    },

    newsAdTitle: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("NewspaperAd", newspaperAdSchema, "NewspaperAd")
