import Express from "express";
const router = Express.Router()

import {
    PostGalleryImage, GetGalleryImages, EditGalleryImage, DeleteGalleryImage
} from "../controllers/galleryImageController.js"
import {
    GalleryImageUplaod
} from "../middleware/imageUpload.js";

//TOP CAROUSEL
router.post("/admin/add-gallery-image", GalleryImageUplaod, PostGalleryImage)
router.get("/get-gallery-images", GetGalleryImages)
router.put("/admin/update-gallery-image", GalleryImageUplaod, EditGalleryImage)
router.delete("/admin/delete-gallery-image/:id", DeleteGalleryImage)

export default router