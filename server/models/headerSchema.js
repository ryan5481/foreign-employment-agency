import mongoose from "mongoose";
const Schema = mongoose;

const headerSchema = ({

    headerLandmark: {
        type: String,
        default: "skywaynepal.com"
    },

    field1: {
        type: String,
        default: "Regd.No. 0000000000000"
    },

    field2: {
        type: String,
        default: "© Lic. No.: 000000000000"
    },

    email: {
        type: String,
        default: "example@example.com"
    },

    phoneNumber: {
        type: String,
        default: "Regd.No. 0000000000"
    },

    whatsapp: {
        type: String,
        default: "whatsapp.com/example"
    },

    facebook: {
        type: String,
        default: "facebook.com/example"
    },

    messanger: {
        type: String,
        default: "facebook.com/example"
    },

    viber: {
        type: String,
        default: "viber.com/example"
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Header", headerSchema, "Header")

// {
//     "field1": "Regd.No. 66236/066/067",
//     "field2": "© Lic. No.: 0123456789",
//     "email": "info@skywaynepal.com",
//     "phoneNumber": "+977-123456788",
//     "whatsapp": "whatsapp.com",
//     "facebook": "facebook.som",
//     "messanger": "messanger.com",
//     "viber": "viber.com"
//     }