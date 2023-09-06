import Express from "express";
const router = Express.Router()

import {
    UploadBrochure, UpdateBrochure, GetBrochure
} from "../controllers/brochurePdfController.js"
import {
    BrochurePdfUpload
} from "../middleware/pdfUpload.js";

//TOP CAROUSEL
router.post("/admin/add-brochure-file", BrochurePdfUpload, UploadBrochure)
router.get("/get-brochure-file", GetBrochure)
router.put("/admin/update-brochure-file", BrochurePdfUpload, UpdateBrochure)

export default router