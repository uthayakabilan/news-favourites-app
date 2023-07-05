import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const loginHandler = (authData) => API.post("auth/login", authData);
export const signUpHandler = (authData) => API.post("auth/signup", authData);
export const logOutHandler = () => API.get("auth/logout");
