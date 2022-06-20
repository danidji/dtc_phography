import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "http://localhost:3000/api",
  // : "https://www.lunysse-photographe.com/api",
  // : "https://62a47c7553f2f10a6b9344a2--iridescent-snickerdoodle-82bec4.netlify.app/",
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  },
  // timeout: 1000,
})