import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import dbConn from "./config/database.mjs";
import userRoutes from "./Routes/userRoutes.mjs";

dotenv.config();

//making app from express
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("server running on port no. 4000");
  dbConn();
});
