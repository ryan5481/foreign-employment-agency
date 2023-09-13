
import express from "express";
const router = express.Router()

import {PostContact, GetContact, EditContact} from "../controllers/contactController.js"

router.post("/admin/post-contact", PostContact)
router.get("/get-contact", GetContact)
router.patch("/admin/edit-contact/:id", EditContact)

export default router
