import multer from 'multer'

const topCarouselImagesStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/topCarouselImages")
    },
    filename: function (req, file, cb) {
        cb(null, "topCarouselImg_" + Date.now() + ".jpeg")
    }
})

export const TopCarouselImagesUpload = multer({
    storage: topCarouselImagesStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).array("carouselImages", 12)

//////////

const aboutUsImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/aboutUsImage/")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "aboutUs_" + Date.now() + ".jpeg")
    }
})

export const AboutUsImageUpload = multer({
    storage: aboutUsImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("aboutUsImage")

//////////

const companyMessageStorage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/companyMsgImage/")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "companyMsg_" + Date.now() + ".jpeg")
    }
})

export const CompanyMsgImgUpload1 = multer({
    storage: companyMessageStorage1,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("companyMsgImage1")

//////////

const companyMessageStorage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/companyMsgImage2/")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "companyMsg_" + Date.now() + ".jpeg")
    }
})

export const CompanyMsgImgUpload2 = multer({
    storage: companyMessageStorage2,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("companyMsgImage2")


//////////

const valuableClientsImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/valuableClientsImage/")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "valuableClients_" + Date.now() + ".jpeg")
    }
})

export const ValubleClientsImgUpload = multer({
    storage: valuableClientsImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("valuableClientsImage1")

//////////

const workSectorsImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/workSectors/")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "sectorImage_" + Date.now() + ".jpeg")
    }
})

export const WorkSectorsImgUpload = multer({
    storage: workSectorsImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("sectorImage")
