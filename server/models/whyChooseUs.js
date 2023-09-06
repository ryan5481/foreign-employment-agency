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

    imageTitle: {
        type: String,
        default: "Title title title title title title."
    },

    textTitle: {
        type: String,
        default: "Title title title title title title."
    },

    tagline: {
        type: String,
        default: "Tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline tagline."
    },
    
    paragraph: {
        type: String,
        default: "Paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph paragraph."
    },

    featureTitle1: {
        type: String,
        default: "Small Title 1"
    },
    
    featureText1: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    featureTitle2: {
        type: String,
        default: "Small Title 2"
    },
    
    featureText2: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    featureTitle3: {
        type: String,
        default: "Small Title 3"
    },
    
    featureText3: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    featureTitle4: {
        type: String,
        default: "Small Title 1"
    },
    
    featureText4: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    featureTitle5: {
        type: String,
        default: "Small Title 1"
    },
    
    featureText5: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    featureTitle6: {
        type: String,
        default: "Small Title 1"
    },
    
    featureText6: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    featureTitle7: {
        type: String,
        default: "Small Title 1"
    },
    
    featureText7: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    featureTitle8: {
        type: String,
        default: "Small Title 1"
    },
    
    featureText8: {
        type: String,
        default: "Small text small text small text small text small text small text small text small text small text."
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("WhyChooseUs", whyChooseUsSchema, "WhyChooseUs")
