import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    // : "http://localhost:3000/api",
    : "https://www.lunysse-photographe.com/api",
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  },
  // timeout: 1000,
})