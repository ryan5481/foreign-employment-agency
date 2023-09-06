
import mongoose from "mongoose";

const navBarSchema = ({

    label: {
        type: String,
        required: true,
    },
    href: {
        type: String,
        immutable: true,
    },
    children: [
        {
            label: {
                type: String,
                required: true,
            },
            href: {
                type: String,
                immutable: true,
            },
        },
    ],

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("NavBar", navBarSchema, "NavBar")
