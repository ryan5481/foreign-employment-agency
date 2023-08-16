
import express from "express";
const router = express.Router()

import {AdminLogin, EditAdminUserProfile, ChangeAdminUserPassword, AdminSignUp} from "../controllers/adminAuthController.js"

router.post("/adminlogin", AdminLogin)
router.post("/adminSignup", AdminSignUp)
router.put("/edit-profile", EditAdminUserProfile)
router.put("/change-password", ChangeAdminUserPassword)

export default router