import Express  from "express";
const router  = Express.Router()

import { AddMenuItem, EditMenuItem, GetMenuItems, DeleteMenuItem } from "../controllers/navBarController.js";

router.post("/admin/add-menu-item", AddMenuItem)
router.get("/get-menu-items", GetMenuItems)
router.put("/admin/edit-menu-item", EditMenuItem )
router.delete("/admin/delete-menu-item/:id", DeleteMenuItem)

export default router
