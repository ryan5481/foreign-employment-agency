import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";

import jobRoutes from "./routes/job.js";
import adminAuthRoutes from "./routes/adminAuth.js";
import headerRoutes from "./routes/header.js"
import footerRoutes from "./routes/footer.js"

app.use(cors());


import connectDb from './db/connectDb.js'
connectDb()


app.use(express.json());
app.use("/", jobRoutes)
app.use("/", adminAuthRoutes)
app.use("/", headerRoutes)
app.use("/", footerRoutes)

const port = 8000;

app.listen(port, () => {
  console.log(`This App is listening on port ${port}`)
})