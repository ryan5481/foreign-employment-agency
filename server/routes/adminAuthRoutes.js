
import express from "express";
const router = express.Router()

import {AdminLogin, EditAdminUserProfile, ChangeAdminUserPassword, AdminSignUp, GetPass} from "../controllers/adminAuthController.js"

router.post("/adminlogin", AdminLogin)
router.post("/adminSignup", AdminSignUp)
router.put("/edit-profile", EditAdminUserProfile)
router.put("/admin/change-password", ChangeAdminUserPassword)
router.get("/admin/get-pass/:id", GetPass)

export default router