import mongoose from "mongoose";

const bottomSmoothCarouselSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    carouselImage: {
        type: Object,
        default:{},
    },

    imageTitle: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("BottomCarousel", bottomSmoothCarouselSchema, "BottomCarousel")
