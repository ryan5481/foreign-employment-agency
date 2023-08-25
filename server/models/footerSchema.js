import mongoose from "mongoose";
const Schema = mongoose;

const footerSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    column1Line1: {
        type: String,
        default: "Column 1 Line 1"
    },

    column1Line2: {
        type: String,
        default: "Column 1 Line 2"
    },

    column1Line3: {
        type: String,
        default: "Column 1 Line 3"
    },

    facebookLink: {
        type: String,
        default: "facebook.com"
    },

    messengerLink: {
        type: String,
        default: "messenger.com"
    },

    whatsappLink: {
        type: String,
        default: "whatsapp.com"
    },

    twitterLink: {
        type: String,
        default: "twitter.com"
    },

    youtubeLink: {
        type: String,
        default: "youtube.com"
    },
    instagramLink: {
        type: String,
        default: "instagram.com"
    },

    fileDownloadText: {
        type: String,
        default: "Download File"
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Footer", footerSchema, "Footer")

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