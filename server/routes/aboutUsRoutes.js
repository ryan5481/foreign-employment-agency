import Express  from "express";
const router  = Express.Router()

import { GetAboutUs, PostAboutUs, UpdateAboutUsImage } from "../controllers/aboutUsController.js";
import { AboutUsImageUpload } from "../middleware/imageUpload.js";

router.put("/edit-aboutuspage", PostAboutUs)
router.put("/edit-aboutusimage", AboutUsImageUpload, UpdateAboutUsImage)
router.get("/get-aboutuspage", GetAboutUs)

export default router