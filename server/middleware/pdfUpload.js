import multer from 'multer'
// BROCHURE
const BrochurePdfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../server/uploads/brochurePdf")
    },
    filename: function (req, file, cb) {
        cb(null, "Brochure_" + Date.now() + ".pdf")
    }
})

export const BrochurePdfUpload = multer({
    storage: BrochurePdfStorage,
    // You can add additional configurations like file size limits and file filters here if needed.
}).single("brochurePdfFile");
