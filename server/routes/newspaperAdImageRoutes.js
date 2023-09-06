import Express from "express";
const router = Express.Router()

import {
    PostNewsAd, GetNewsAd, EditNewsAd, DeleteNewsAd
} from "../controllers/newspaperAdController.js"
import {
    newsAdImageUpload
} from "../middleware/imageUpload.js";

//TOP CAROUSEL
router.post("/admin/add-newspaper-image", newsAdImageUpload, PostNewsAd)
router.get("/get-newspaper-images", GetNewsAd)
router.put("/admin/update-newspaper-image", newsAdImageUpload, EditNewsAd)
router.delete("/admin/delete-newspaper-image/:id", DeleteNewsAd)

export default router