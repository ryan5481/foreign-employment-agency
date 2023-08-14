
import express from "express";
const router = express.Router()

import {PostFooter, GetFooter, EditFooter} from "../controllers/footerController.js"

router.post("/post-footer", PostFooter)
router.get("/get-footer", GetFooter)
router.put("/edit-footer", EditFooter)

export default router
