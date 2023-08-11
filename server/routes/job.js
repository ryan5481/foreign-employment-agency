
import express from "express";
const router = express.Router()

import {PublishJob, GetJobsList} from "../controllers/jobController.js"

router.post("/publishjob", PublishJob)
router.get("/jobslist", GetJobsList)

export default router
