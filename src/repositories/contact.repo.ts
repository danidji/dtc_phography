import axios from "axios";
import { ContactFormType } from '../interfaces/contact.interfaces';


export const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development"
    ? "http://localhost:3000/api"
    : "https://www.lunysse-photographe.com/api",
  headers: {
    "Accept": "*/*",
    "Content-Type": "application/json",
  },
  // timeout: 1000,
})


export const axiosSendMail = async (object: ContactFormType) => {
  const response = await instance.post("/contact", object)
  return response.data
}