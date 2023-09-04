import mongoose from "mongoose";
const Schema = mongoose;

const contactSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    regdField: {
        type: String,
        default: "Regd.No. 0000000000000"
    },

    licenseField: {
        type: String,
        default: "© Lic. No.: 000000000000"
    },

    email: {
        type: String,
        default: "example@example.com"
    },

    address: {
        type: String,
        default: "Kathmandu, Nepal"
    },

    phoneNumber1: {
        type: Number,
        default: "9841111111"
    },
    
    phoneNumber2: {
        type: Number,
        default: "9841222222"
    },

    whatsappId: {
        type: String,
        default: "whatsapp.com/example"
    },

    facebookId: {
        type: String,
        default: "facebook.com/example"
    },

    oneTapMessengerLink: {
        type: String,
        default: "facebook.com/example"
    },

    viberId: {
        type: String,
        default: "viber.com/example"
    },
    
    contactUsHeading: {
        type: String,
        default: "Contact Us",
    },

    contactUsSubHeading: {
        type: String,
        default: "Tap to call or email us",
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