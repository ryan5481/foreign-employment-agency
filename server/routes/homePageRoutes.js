import Express from "express";
const router = Express.Router()

import {
    PostCarouselImages, GetCarouselImages,
    SetCompanyMessage1, GetCompanyMessage1,
    SetCompanyMessage2, GetCompanyMessage2,
    SetValuableClients, GetValuableClients,
    SetWorkSectors, GetWorkSectors
} from "../controllers/homePageController.js"
import {
    TopCarouselImagesUpload,
    CompanyMsgImgUpload1,
    CompanyMsgImgUpload2,
    ValubleClientsImgUpload,
    WorkSectorsImgUpload
} from "../middleware/imageUpload.js";

//CAROUSEL
router.post("/edit-homepage/topcarousel", TopCarouselImagesUpload, PostCarouselImages)
router.get("/get-carousel-images", GetCarouselImages)
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
router.post("/edit-homepage/worksectors", WorkSectorsImgUpload, SetWorkSectors)
router.get("/get-worksectors", GetWorkSectors)
export default router