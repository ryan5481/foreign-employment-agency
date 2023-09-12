import multer from 'multer'

const topCarouselImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/topCarouselImages")
    },
    filename: function (req, file, cb) {
        cb(null, "topCarouselImg_" + Date.now() + ".jpeg")
    }
})

export const TopCarouselImageUpload = multer({
    storage: topCarouselImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("carouselImage")

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

//////////
const bottomSmoothCarouselImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/bottomSmoothCarouselImages")
    },
    filename: function (req, file, cb) {
        cb(null, "bottomSmoothCarouselImg_" + Date.now() + ".jpeg")
    }
})

export const BottomSmoothCarouselImageUpload = multer({
    storage: bottomSmoothCarouselImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("carouselImage")

//////////
const testimonyImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/testimonyImages")
    },
    filename: function (req, file, cb) {
        cb(null, "TestimonyImg_" + Date.now() + ".jpeg")
    }
})

export const TestimonyImageUpload = multer({
    storage: testimonyImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("testimonyImage")
//////////
const jobImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/jobImages")
    },
    filename: function (req, file, cb) {
        cb(null, "JobImg_" + Date.now() + ".jpeg")
    }
})

export const JobImageUpload = multer({
    storage: jobImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("jobImage")

////////// IMAGE GALLERY //////////
const galleryImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/galleryImages")
    },
    filename: function (req, file, cb) {
        cb(null, "GalleryImg_" + Date.now() + ".jpeg")
    }
})

export const GalleryImageUplaod = multer({
    storage: galleryImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("galleryImage")

////////// IMAGE GALLERY //////////
const certificateImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/certificateImages")
    },
    filename: function (req, file, cb) {
        cb(null, "CertificateImg_" + Date.now() + ".jpeg")
    }
})

export const CertificateImageUplaod = multer({
    storage: certificateImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("certificateImage")

////////// WHY CHOOSE US //////////
const chooseUsImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/chooseUsImage")
    },
    filename: function (req, file, cb) {
        cb(null, "ChooseUsImg_" + Date.now() + ".jpeg")
    }
})

export const ChooseUsImageUpload = multer({
    storage: chooseUsImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("heroImage")

////////// WHY CHOOSE US //////////
const logoImageStroage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/logoImage")
    },
    filename: function (req, file, cb) {
        cb(null, "LogoImg_" + Date.now() + ".jpeg")
    }
})

export const LogoImageUpload = multer({
    storage: logoImageStroage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("logoImage")

////////// WHY CHOOSE US //////////
const newsAdImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/newspaperAdImages")
    },
    filename: function (req, file, cb) {
        cb(null, "NewsAdImg_" + Date.now() + ".jpeg")
    }
})

export const newsAdImageUpload = multer({
    storage: newsAdImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("newsAdImage")

////////// ABOUT NEPAL //////////
const aboutNepalImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/aboutNepalImage")
    },
    filename: function (req, file, cb) {
        cb(null, "AboutNepalImg_" + Date.now() + ".jpeg")
    }
})

export const aboutNepalImageUpload = multer({
    storage: aboutNepalImageStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).single("heroImage")
