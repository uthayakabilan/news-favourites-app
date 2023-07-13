import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { setupLogging } from "./logging/setupMorgan.js";
import "./utils/mongooseConnection.js";

const app = express();
const port = process.env.SAVE_NEWS_PORT || 1302;
import saveRoute from "./routes/saveRoute.js";
app.listen(port, () => {
  console.log(`Save news server listening port : ${port}`);
});

setupLogging(app);

app.use("/save", saveRoute);
