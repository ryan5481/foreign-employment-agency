
import express from "express";
const router = express.Router()

import {PostContact, GetContact, EditContact} from "../controllers/contactController.js"

router.post("/admin/post-contact", PostContact)
router.get("/get-contact", GetContact)
router.put("/admin/edit-contact", EditContact)

export default router
