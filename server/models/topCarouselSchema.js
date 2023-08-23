import mongoose from "mongoose";
const Schema = mongoose;

const topCarouselSchema = ({

    landmark: {
        type: String,
        default: "skywaynepal.com"
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

export default mongoose.model("TopCarousel", topCarouselSchema, "TopCarousel")
