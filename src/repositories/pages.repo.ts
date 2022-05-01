import { instance } from "./contact.repo";
import { PageContentType } from "../../back-end/models/pages.interface";

export const axiosGetPageContent = async (id: string): Promise<PageContentType> => {
  const response = await instance.get(`/pages/?id=${id}`)
  return response.data
}
