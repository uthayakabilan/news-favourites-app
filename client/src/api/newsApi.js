import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const latestNews = () => API.get("/news/latest");
