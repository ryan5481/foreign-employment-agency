import mongoose from "mongoose";

const resumeSchema = ({

    landmark: {
        type: String,
        default: "radiantInfoTech"
    },

    jobCode: {
        type: String,
    },

    //PERSONAL INFORMATION
    fullName: {
        type: String,
    },

    gender: {
        type: String,
    },

    address: {
        type: String,
    },

    nationality: {
        type: String,
    },

    passportNumber: {
        type: String,
    },

    placeOfIssue: {
        type: String,
    },

    expiryDate: {
        type: String,
    },

    dateOfBirth: {
        type: String,
    },

    height: {
        type: String,
    },

    weight: {
        type: String,
    },

    maritalStatus: {
        type: String,
    },

    children: {
        type: String,
    },

    religion: {
        type: String,
    },

    //QUALIFICATIONS
    arabic: {
        type: Object,
        default: {
            "speaking": "",
            "listening": "",
            "reading": "",
            "writing": "",
        }
    },

    english: {
        type: Object,
        default: {
            "speaking": "",
            "listening": "",
            "reading": "",
            "writing": "",
        }
    },

    hindi: {
        type: Object,
        default: {
            "speaking": "",
            "listening": "",
            "reading": "",
            "writing": "",
        }
    },

    education: {
        type: String,
    },

    workExpNepal: {
        type: Object,
        default: {
            "field": "",
            "employer": "",
            "duration": "",
            "address": "",
        }
    },

    workExpOverseas: {
        type: Object,
        default: {
            "field": "",
            "employer": "",
            "duration": "",
            "country": "",
        }
    },

    otherSkills: {
        type: String,
    },

    //CONTACT INFORMATION

    agentName: {
        type: String,
    },

    phoneNumber: {
        type: String,
    },

    email: {
        type: String,
    },

    homeNumber: {
        type: String,
    },

    relativesNumber: {
        type: String,
    },

    createdAt: { type: Date, default: Date.now },

    updatedAt: { type: Date, default: Date.now },

})

export default mongoose.model("Resume", resumeSchema, "Resume")


{/* <RadioGroup defaultValue='SLC'
        id='education'
        value={formData['education'] || ''}
        onChange={(value) => handleInputChange({target: {id: 'education', value}})}
        py={2}>
        <Stack direction={{ base: "column", sm: "column", md: "row", lg: "row" }}>
          <Radio value="under_slc">Under SLC</Radio>
          <Radio value="slc">SLC</Radio>
          <Radio value="+2">+2</Radio>
          <Radio value="bachelors">Bachelors</Radio>
          <Radio value="masters">Masters</Radio>
        </Stack>
      </RadioGroup> */}