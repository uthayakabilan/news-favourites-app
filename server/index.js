import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import "./utils/mongooseConnection.js";
import bodyParser from "body-parser";
import authRoute from "./routes/authRoute.js";
import newsRoute from "./routes/newsRoute.js";
import session from "express-session";
import { corsOptions, sessionOptions } from "./utils/authUtils.js";

const app = express();
const port = process.env.NEWS_APP_SEVER_PORT || 1313;
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session(sessionOptions));

app.get("/", (req, res) => {
  res.send("Welcome to server");
});

app.use("/auth", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
