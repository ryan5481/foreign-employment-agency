
import mongoose from "mongoose";

const procedureSchema = ({

    landmark: {
        type: String,
        default: "skywaynepal.com",
    },

    procedureText: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },
    
    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Procedure", procedureSchema, "Procedure")
