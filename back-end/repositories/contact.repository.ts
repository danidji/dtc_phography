import { database } from "../database/firebase";
import { ContactMessageType } from "../models/contact.interface";

const dbRef = database.ref("messages")

export const createNewMessage = async (object: ContactMessageType): Promise<ContactMessageType> => {
  await dbRef.child(object.id).set(object)
  return getMessage(object.id)
}

export const getMessage = async (id: string): Promise<ContactMessageType> => {
  return (await dbRef.child(id).get()).val()
}
