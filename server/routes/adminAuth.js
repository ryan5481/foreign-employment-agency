
import express from "express";
const router = express.Router()

import {AdminLogin, AdminSignUp} from "../controllers/adminAuthController.js"

router.post("/adminsignup", AdminSignUp)
router.post("/adminlogin", AdminLogin)

export default router