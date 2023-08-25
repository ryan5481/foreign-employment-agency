import mongoose from "mongoose";

const testimonySchema = ({

    landmark: {
        type: String,
        default: "skywaynepal.com"
    },

    testimonyImage: {
        type: Object,
        default:{},
    },

    imageTitle: {
        type: String,
    },

    description: {
        type: String,
    },

    name: {
        type: String,
    },

    address: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Testimony", testimonySchema, "Testimony")
