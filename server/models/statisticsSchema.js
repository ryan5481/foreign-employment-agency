
import mongoose from "mongoose";

const statisticsSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    column1Label: {
        type: String,
        default: "Label1"
    },

    column2Label: {
        type: String,
        default: "Label2"
    },

    column3Label: {
        type: String,
        default: "Label3"
    },

    column1height: {
        type: String,
    },

    column2height: {
        type: String,
    },

    column3height: {
        type: String,
    },

    box1TopText: {
        type: String,
        default: "Top Line 1"
    },

    box2TopText: {
        type: String,
        default: "Top Line"
    },

    box3TopText: {
        type: String,
        default: "Top Line"
    },

    box1NumberData: {
        type: Number,
        default: "1111"
    },

    box2NumberData: {
        type: Number,
        default: "2222"
    },

    box3NumberData: {
        type: Number,
        default: "3333"
    },

    box1BottomText: {
        type: String,
        default: "Bottom Line1"
    },

    box2BottomText: {
        type: String,
        default: "Bottom Line2"
    },

    box3BottomText: {
        type: String,
        default: "Bottom Line3"
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Statistics", statisticsSchema, "Statistics")