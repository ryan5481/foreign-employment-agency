import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";

import jobRoutes from "./routes/job.js";
import adminAuthRoutes from "./routes/adminAuth.js";

app.use(cors());


import connectDb from './db/connectDb.js'
connectDb()


app.use(express.json());
app.use("/", jobRoutes)
app.use("/", adminAuthRoutes)

const port = 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})