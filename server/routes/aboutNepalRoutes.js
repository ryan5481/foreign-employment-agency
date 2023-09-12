import Express  from "express";
const router  = Express.Router()

import { PostAboutNepal, UpdateAboutNepal, GetAboutNepal } from "../controllers/aboutNepalController.js";
import { aboutNepalImageUpload } from "../middleware/imageUpload.js";

router.post("/admin/post-about-nepal", aboutNepalImageUpload, PostAboutNepal)
router.put("/admin/edit-about-nepal", aboutNepalImageUpload, UpdateAboutNepal)
router.get("/get-about-nepal", GetAboutNepal)

export default router