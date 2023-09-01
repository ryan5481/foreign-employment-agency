import Express from "express";
const router = Express.Router()

import {
    PostCertificate, GetCertificates, EditCertificate, DeleteCertificate
} from "../controllers/certificateController.js"
import {
    CertificateImageUplaod
} from "../middleware/imageUpload.js";

//TOP CAROUSEL
router.post("/admin/add-certificate-image", CertificateImageUplaod, PostCertificate)
router.get("/get-certificate-images", GetCertificates)
router.put("/admin/update-certificate-image", CertificateImageUplaod, EditCertificate)
router.delete("/admin/delete-certificate-image/:id", DeleteCertificate)

export default router