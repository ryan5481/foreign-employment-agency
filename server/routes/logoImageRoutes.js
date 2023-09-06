import Express from "express";
const router = Express.Router()

import {
    PostLogo,GetLogo, EditLogo
} from "../controllers/logoImageController.js"
import {
    LogoImageUpload
} from "../middleware/imageUpload.js";

//TOP CAROUSEL
router.post("/admin/add-logo-image", LogoImageUpload, PostLogo)
router.get("/get-logo-image", GetLogo)
router.put("/admin/update-logo-image", LogoImageUpload, EditLogo)

export default router