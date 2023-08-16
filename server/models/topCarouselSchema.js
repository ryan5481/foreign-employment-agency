import mongoose from "mongoose";
const Schema = mongoose;

const topCarouselSchema = ({

    topCarouselLandmark: {
        type: String,
        default: "skywaynepal.com"
    },

    carouselImages: {
        type: Object,
        default:{},
    },

    imageTitles: {
        type: Array,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("TopCarousel", topCarouselSchema, "TopCarousel")
