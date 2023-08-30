import mongoose from "mongoose";

const galleryImageSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    galleryImage: {
        type: Object,
        default:{},
    },

    imageTitle: {
        type: String,
    },

    imageDescription: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("GalleryImage", galleryImageSchema, "GalleryImage")
