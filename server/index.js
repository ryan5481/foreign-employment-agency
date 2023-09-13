import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";

import logoRoutes from "./routes/logoImageRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import contactRoutes from "./routes/contactRoutes.js"
import footerRoutes from "./routes/footerRoutes.js"
import homePageRoutes from "./routes/homePageRoutes.js"
import aboutUsRoutes from "./routes/aboutUsRoutes.js"
import resumeRoutes from "./routes/resumeRoutes.js"
import galleryImageRoutes from "./routes/galleryImageRoutes.js"
import certificateImageRoutes from "./routes/certificateImageRoutes.js"
import navBarRoutes from "./routes/navbarRoutes.js"
import whyChooseUSRoutes from "./routes/whyChooseUsRoutes.js"
import brochureRoutes from "./routes/brochurePdfRoutes.js"
import newsAdRoutes from "./routes/newspaperAdImageRoutes.js"
import aboutNepalRoutes from "./routes/aboutNepalRoutes.js"

app.use(cors());


import connectDb from './db/connectDb.js'
connectDb()


app.use(express.json());
app.use("/", logoRoutes)
app.use("/", jobRoutes)
app.use("/", adminAuthRoutes)
app.use("/", contactRoutes)
app.use("/", footerRoutes)
app.use("/", homePageRoutes)
app.use("/", aboutUsRoutes)
app.use("/", resumeRoutes)
app.use("/", galleryImageRoutes)
app.use("/", certificateImageRoutes)
app.use("/", navBarRoutes)
app.use("/", whyChooseUSRoutes)
app.use("/", brochureRoutes)
app.use("/", newsAdRoutes)
app.use("/", aboutNepalRoutes)

const port = 8000;

app.listen(port,() => {
  console.log(`This App is listening on port ${port}`)
})