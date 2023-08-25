import Express from "express";
const router = Express.Router()

import {
    PostCarouselImages, GetCarouselImages, UpdateCarouselImage, DeleteCarouselImages,
    SetCompanyMessage1, GetCompanyMessage1,
    SetCompanyMessage2, GetCompanyMessage2,
    SetValuableClients, GetValuableClients,
    AddWorkSector, SetWorkSectors, GetWorkSectors, DeleteWorkSector,
    AddProcedure, SetProcedure, GetProcedure, DeleteProcedure,
    PostBottomCarouselImages, GetBottomCarouselImages, UpdateBottomCarouselImage, DeleteBottomCarouselImages,
    PostTestimony, GetTestimonies, UpdateTestimonies, DeleteTestimony,
    PostStats, GetStats, EditStats
} from "../controllers/homePageController.js"
import {
    TopCarouselImageUpload,
    CompanyMsgImgUpload1,
    CompanyMsgImgUpload2,
    ValubleClientsImgUpload,
    WorkSectorsImgUpload,
    BottomSmoothCarouselImageUpload,
    TestimonyImageUpload
} from "../middleware/imageUpload.js";

//TOP CAROUSEL
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

// JOB SECTORS
router.post("/edit-homepage/add-worksector", WorkSectorsImgUpload, AddWorkSector)
router.put("/edit-homepage/worksectors", WorkSectorsImgUpload, SetWorkSectors)
router.get("/get-worksectors", GetWorkSectors)
router.delete("/delete-worksector/:id", DeleteWorkSector)

// PROCEDURE STEPPER
router.post("/edit-homepage/add-procedure", AddProcedure)
router.put("/edit-homepage/procedure", SetProcedure)
router.get("/get-procedure", GetProcedure)
router.delete("/delete-procedure/:id", DeleteProcedure)

//BOTTOM SMOOTH CAROUSEL
router.post("/edit-homepage/add-bottomcarousel-image", BottomSmoothCarouselImageUpload, PostBottomCarouselImages)
router.get("/get-bottomcarousel-images", GetBottomCarouselImages)
router.put("/edit-homepage/update-bottomcarousel-image", BottomSmoothCarouselImageUpload, UpdateBottomCarouselImage)
router.delete("/edit-homepage/delete-bottomcarousel-image/:id", DeleteBottomCarouselImages)

//TESTIMONIALS
router.post("/edit-homepage/add-testimony", TestimonyImageUpload, PostTestimony)
router.get("/get-testimonies", GetTestimonies)
router.put("/edit-homepage/update-testimony", TestimonyImageUpload, UpdateTestimonies)
router.delete("/edit-homepage/delete-testimony/:id", DeleteTestimony)

//STSTISTICS DISPLAY
router.post("/edit-homepage/post-stats", PostStats)
router.get("/get-stats", GetStats)
router.put("/edit-homepage/edit-stats/", EditStats)



export default router