import mongoose from "mongoose";
const Schema = mongoose;

const contactSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    regdField: {
        type: String,
    },

    licenseField: {
        type: String,
    },

    email: {
        type: String,
    },

    address: {
        type: String,
    },

    phoneNumber1: {
        type: Number,
    },
    
    phoneNumber2: {
        type: Number,
    },

    whatsappId: {
        type: String,
    },

    facebookId: {
        type: String,
    },

    messengerId: {
        type: String,
    },

    viberId: {
        type: String,
    },
    
    contactUsHeading: {
        type: String,
    },

    contactUsSubHeading: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Contact", contactSchema, "Contact")

// {
//     "field1": "Regd.No. 66236/066/067",
//     "field2": "© Lic. No.: 0123456789",
//     "email": "info@skywaynepal.com",
//     "phoneNumber": "+977-123456788",
//     "whatsapp": "whatsapp.com",
//     "facebook": "facebook.som",
//     "messenger": "messanger.com",
//     "viber": "viber.com"
//     }