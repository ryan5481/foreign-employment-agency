import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";

import jobRoutes from "./routes/jobRoutes.js";
import adminAuthRoutes from "./routes/adminAuthRoutes.js";
import headerRoutes from "./routes/headerRoutes.js"
import footerRoutes from "./routes/footerRoutes.js"
import homePageRoutes from "./routes/homePageRoutes.js"
import aboutUsRoutes from "./routes/aboutUsRoutes.js"
import resumeRoutes from "./routes/resumeRoutes.js"
import galleryImageRoutes from "./routes/galleryImageRoutes.js"

app.use(cors());


import connectDb from './db/connectDb.js'
connectDb()


app.use(express.json());
app.use("/", jobRoutes)
app.use("/", adminAuthRoutes)
app.use("/", headerRoutes)
app.use("/", footerRoutes)
app.use("/", homePageRoutes)
app.use("/", aboutUsRoutes)
app.use("/", resumeRoutes)
app.use("/", galleryImageRoutes)

const port = 8000;

app.listen(port, () => {
  console.log(`This App is listening on port ${port}`)
})