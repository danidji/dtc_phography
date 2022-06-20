
import { instance } from './axios.instance';
import { ContactFormType } from '../interfaces/contact.interfaces';


export const axiosSendMail = async (object: ContactFormType) => {
  const response = await instance.post("/contact", object)
  return response.data
}