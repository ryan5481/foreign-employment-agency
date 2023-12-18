import express from "express"
const router = express.Router()

import { AddOperatingStep } from "../controllersMySql/operatingSteps"

router.post("/admin/add-operating-step", AddOperatingStep)

export default router