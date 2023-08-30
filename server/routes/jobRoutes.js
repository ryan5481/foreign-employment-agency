
import express from "express";
const router = express.Router()

import {PublishJob, GetJobsList, UpdateJobDescription, DeleteJob} from "../controllers/jobController.js"
import { JobImageUpload } from "../middleware/imageUpload.js";

router.post("/admin/publishjob", JobImageUpload, PublishJob)
router.get("/jobslist", GetJobsList)
router.put("/admin/edit-job", JobImageUpload, UpdateJobDescription)
router.delete("/admin/delete-job/:id", DeleteJob)

export default router
