import mongoose from "mongoose";
const Schema = mongoose;

const aboutUsSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    aboutUsImage: {
        type: Object,
        default:{}
    },

    heading1: {
        type: String,
        default: "Heading 1"
    },

    text1: {
        type: String,
        default: "Text 1"
    },
    
    heading2: {
        type: String,
        default: "Heading 2"
    },

    text2: {
        type: String,
        default: "Text 2"
    },
    
    heading3: {
        type: String,
        default: "Heading 3"
    },

    text3: {
        type: String,
        default: "Text 3"
    },

    heading4: {
        type: String,
        default: "Heading 4"
    },

    text4: {
        type: String,
        default: "Text 4"
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("AboutUs", aboutUsSchema, "AboutUs")
