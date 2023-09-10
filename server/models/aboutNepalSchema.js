import mongoose from "mongoose";

const whyChooseUsSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    heroImage: {
        type: Object,
        default:{}
    },

    title1: {
        type: String,
        default: "Title title title title title title."
    },

    tagline: {
        type: String,
        default: "Tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline."
    },

    shortDescription: {
        type: String,
        default: "Tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline."
    },
    
    paragraph: {
        type: String,
        default: "Paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph."
    },
    
    point1: {
        type: String,
        default: "Small Title 2"
    },
    
    point2: {
        type: String,
        default: "Small Title 2"
    },
    
    point3: {
        type: String,
        default: "Small Title 2"
    },
    
    point4: {
        type: String,
        default: "Small Title 2"
    },
    
    point5: {
        type: String,
        default: "Small Title 2"
    },
    
    point6: {
        type: String,
        default: "Small Title 2"
    },
    
    point7: {
        type: String,
        default: "Small Title 2"
    },
    
    point8: {
        type: String,
        default: "Small Title 2"
    },
    
    

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("WhyChooseUs", whyChooseUsSchema, "WhyChooseUs")
