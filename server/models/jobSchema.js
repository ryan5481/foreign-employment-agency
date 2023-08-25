import mongoose from "mongoose";
const Schema = mongoose;

const jobSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },
    
    title: {
        type: String,
    },
    
    isNewJob: {
        type: Boolean,
    },

    salary: {
        type: Number,
    },

    category: {
        type: String,
    },

    countryCity: {
        type: String,
    },

    isFullTime: {
        type: Boolean,
    },

    workHours: {
        type: String,
    },

    daysOff: {
        type: String,
    },

    accomodation: {
        type: Boolean,
    },

    fooding: {
        type: Boolean,
    },

    shortDescription: {
        type: String,
    },

    reqQualification: {
        type: String,
    },

    responsiblities: {
        type: String,
    },

    skillsRequired: {
        type: String,
    },
    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("jobs", jobSchema, "Jobs")