import multer from 'multer'

const topCarouselImagesStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/topCarouselImages")
    },
    filename: function (req, file, cb) {
        cb(null, "topCarouselImg_" + Date.now() + ".jpeg")
    }
})

const aboutUsImageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/aboutUsImage/")
    },
    filename: function (req, file, cb) {
        // console.log(req)
        cb(null, "aboutUs_" + Date.now() + ".jpeg")
    }
})

// const fileFilter = (req, file, cb) => {
//     //accept only .jpeg and .png formats
//     if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
//         cb(null, true)
//     } else {
//         cb(null, false)
//     }
// }

export const TopCarouselImagesUpload = multer({
    storage: topCarouselImagesStorage, 
    // limits: { fileSize: 1024 * 1024 * 4 },
    // fileFilter: fileFilter
}).array("carouselImages", 12)

export const AboutUsImageUpload = multer({
    storage: aboutUsImageStorage,
    // limits: { fileSize: 1024 * 1024 * 4 }, //max file size 4 MB
    // fileFilter: fileFilter
}).single("aboutUsImage")