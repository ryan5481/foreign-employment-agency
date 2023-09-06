import Express  from "express";
const router  = Express.Router()

import { PostChooseUs, GetChooseUs, UpdateChooseUs } from "../controllers/whyChooseUsController.js";
import { ChooseUsImageUpload } from "../middleware/imageUpload.js";

router.post("/admin/post-choose-us", ChooseUsImageUpload, PostChooseUs)
router.put("/admin/edit-choose-us", ChooseUsImageUpload, UpdateChooseUs)
router.get("/get-choose-us", GetChooseUs)

export default router