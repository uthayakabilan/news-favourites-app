import express from "express";
import dotenv from "dotenv";
dotenv.config();
import newsRoute from "./routes/newsRoute.js";
import { setupLogging } from "./logging/setupMorgan.js";

const app = express();
const port = process.env.NEWS_FEED_PORT || 1301;
setupLogging(app);

app.listen(port, () => {
  console.log(`News feed server listening on port : ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello from news feed server");
});

app.use("/feed", newsRoute);
