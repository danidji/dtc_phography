import { database } from "../database/firebase";
import { ContactMessageType } from "../models/contact.interface";

const dbRef = database.ref("messages")

export const createNewMessage = async (object: ContactMessageType): Promise<void> => {
  return await dbRef.child(object.id).set(object)
}
