import Express from "express";
const router = Express.Router()

import {
    PostCarouselImages, GetCarouselImages, UpdateCarouselImage, DeleteCarouselImages,
    SetCompanyMessage1, GetCompanyMessage1,
    SetCompanyMessage2, GetCompanyMessage2,
    SetValuableClients, GetValuableClients,
    AddWorkSector, SetWorkSectors, GetWorkSectors, DeleteWorkSector,
    AddProcedure, SetProcedure, GetProcedure, DeleteProcedure
} from "../controllers/homePageController.js"
import {
    TopCarouselImageUpload,
    CompanyMsgImgUpload1,
    CompanyMsgImgUpload2,
    ValubleClientsImgUpload,
    WorkSectorsImgUpload
} from "../middleware/imageUpload.js";

//CAROUSEL
router.post("/edit-homepage/add-topcarousel-image", TopCarouselImageUpload, PostCarouselImages)
router.get("/get-carousel-images", GetCarouselImages)
router.put("/edit-homepage/update-topcarousel-image", TopCarouselImageUpload, UpdateCarouselImage)
router.delete("/edit-homepage/delete-topcarousel-image/:id", DeleteCarouselImages)
//COMPANY MESSAGE 1
router.post("/edit-homepage/companyMessage1", CompanyMsgImgUpload1, SetCompanyMessage1)
router.get("/get-companymessage1", GetCompanyMessage1)
//COMPANY MESSAGE 2
router.post("/edit-homepage/companyMessage2", CompanyMsgImgUpload2, SetCompanyMessage2)
router.get("/get-companymessage2", GetCompanyMessage2)
//VALUABLE CLIENTS
router.post("/edit-homepage/valuableclients", ValubleClientsImgUpload, SetValuableClients)
router.get("/get-valuableclients", GetValuableClients)
// SECTORS
router.post("/edit-homepage/add-worksector", WorkSectorsImgUpload, AddWorkSector)
router.put("/edit-homepage/worksectors", WorkSectorsImgUpload, SetWorkSectors)
router.get("/get-worksectors", GetWorkSectors)
router.delete("/delete-worksector/:id", DeleteWorkSector)
// PROCEDURE STEPPER
router.post("/edit-homepage/add-procedure", AddProcedure)
router.put("/edit-homepage/procedure", SetProcedure)
router.get("/get-procedure", GetProcedure)
router.delete("/delete-procedure/:id", DeleteProcedure)

export default router