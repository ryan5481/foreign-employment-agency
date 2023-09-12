import mongoose from "mongoose";

const aboutNepalSchema = ({

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

    title2: {
        type: String,
        default: "ABCEDF."
    },
    
    key1: {
        type: String,
        default: "ABCEDF."
    },
    
    value1: {
        type: String,
        default: "ABCEDF."
    },
    key2: {
        type: String,
        default: "ABCEDF."
    },
    
    value2: {
        type: String,
        default: "ABCEDF."
    },
    key3: {
        type: String,
        default: "ABCEDF."
    },
    
    value3: {
        type: String,
        default: "ABCEDF."
    },
    key4: {
        type: String,
        default: "ABCEDF."
    },
    
    value4: {
        type: String,
        default: "ABCEDF."
    },
    key5: {
        type: String,
        default: "ABCEDF."
    },
    
    value5: {
        type: String,
        default: "ABCEDF."
    },
    key6: {
        type: String,
        default: "ABCEDF."
    },
    
    value6: {
        type: String,
        default: "ABCEDF."
    },
    key7: {
        type: String,
        default: "ABCEDF."
    },
    
    value7: {
        type: String,
        default: "ABCEDF."
    },

    key8: {
        type: String,
        default: "ABCEDF."
    },
    
    value8: {
        type: String,
        default: "ABCEDF."
    },

    title3: {
        type: String,
        default: "ABCEDF."
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

export default mongoose.model("AboutNepal", aboutNepalSchema, "AboutNepal")
