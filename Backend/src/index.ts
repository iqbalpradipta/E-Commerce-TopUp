import express from "express";
import cors from "cors";
import Route from "./routers/route";
import dotenv from 'dotenv'

const app = express();

dotenv.config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/v1", Route);

app.listen(8000, () => {
  console.log("server is running on port 8000");
});
