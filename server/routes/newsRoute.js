import express from "express";
import { getLatestNews } from "../controllers/newsController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.use(isAuthenticated);
router.get("/latest", getLatestNews);

export default router;
