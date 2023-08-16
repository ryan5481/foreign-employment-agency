import Express  from "express";
const router  = Express.Router()

import { PostCarouselImages, GetCarouselImages} from "../controllers/homePageController.js"
import { TopCarouselImagesUpload } from "../middleware/imageUpload.js";

router.post("/edit-homepage/topcarousel", TopCarouselImagesUpload, PostCarouselImages)
router.get("/get-carousel-images", GetCarouselImages)

export default router