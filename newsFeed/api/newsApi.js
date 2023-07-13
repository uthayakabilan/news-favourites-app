import dotenv from "dotenv";
dotenv.config();
import axios from "axios";
import { defaultParams } from "../utils/newsUtils.js";

const newsCatcherUrl = process.env.NEWS_APP_NEWSCATCHER_BASE_URL;
const latestNewsUrl = newsCatcherUrl + "/latest_headlines";

const latestNewsAPI = axios.create({
  baseURL: latestNewsUrl,
  params: defaultParams,
  headers: {
    "x-api-key": process.env.NEWS_APP_NEWSCATCHER_API_KEY,
  },
});

export const getLatestNewsAPI = () => latestNewsAPI.get();
export const getTopicNewsAPI = (category) =>
  axios.get(latestNewsUrl, {
    params: {
      topic: category,
      lang: "en",
    },
    headers: {
      "x-api-key": process.env.NEWS_APP_NEWSCATCHER_API_KEY,
    },
  });
