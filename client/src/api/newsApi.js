import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const latestNews = () => API.get("/feed/latest");
export const getNews = (category) => API.get(`/feed/${category}`);
export const saveNews = (newsData) => API.post("/save/add", newsData);
export const removeNews = (newsData) => API.post("/save/remove", newsData);
export const getSavedNews = (userId) => API.get(`/save/saved/${userId}`);
