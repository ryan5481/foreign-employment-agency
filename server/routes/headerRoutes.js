
import express from "express";
const router = express.Router()

import {PostHeader, GetHeader, EditHeader} from "../controllers/headerController.js"

router.post("/post-header", PostHeader)
router.get("/get-header", GetHeader)
router.put("/edit-header", EditHeader)

export default router
