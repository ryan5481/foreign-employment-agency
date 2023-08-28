import Express  from "express";
const router  = Express.Router()

import { PostResume, EditResume, GetResumes, DeleteResume } from "../controllers/resumeController.js";

router.post("/submit-resume", PostResume)
router.get("/get-resumes", GetResumes)
router.put("/admin/edit-resume", EditResume)
router.delete("/admin/delete-resume/:id", DeleteResume)

export default router