import express from "express";
import {
  addNews,
  getUserNews,
  removeNews,
} from "../controllers/saveController.js";
const router = express.Router();
import bodyParser from "body-parser";

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res) => {
  res.send("Save route");
});
router.post("/add", addNews);
router.post("/remove", removeNews);
router.get("/saved/:userId", getUserNews);

export default router;
