import express from "express";
import {
  getLatestNews,
  getLatestTopicNews,
} from "../controller/newsController.js";

const router = express.Router();
router.get("/latest", getLatestNews);
router.get("/:category", getLatestTopicNews);
router.get("/", (req, res) => {
  res.send("Feed home");
});

export default router;
