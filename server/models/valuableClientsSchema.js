import mongoose from "mongoose";
const Schema = mongoose;

const valuableClientsSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    valuableClientsImage1: {
        type: Object,
        default:{}
    },

    heading1: {
        type: String,
        default: "Qatar Armed Force - Catering Department"
    },
    
    text1: {
        type: String,
        default: "Qatar Government Project."
    },

    description1: {
        type: String,
        default: "We Skyway Management Pvt. Ltd. are very pleased and grateful to work for the very first time in Nepal with the Qatar government Project (Qatar Armed Force - Catering Department). This was the first project from Nepal with the highest Salary scale of the Catering Department and It was very successful, both Client and Candidates were happy with our services and fulfilled their contract period happily. Now we are seeking more opportunities to work with them further."
    },


    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("ValuableClients", valuableClientsSchema, "ValuableClients")
