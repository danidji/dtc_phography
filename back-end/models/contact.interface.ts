export interface ContactMessageType {
  id: string,
  email: string,
  name: string,
  phone?: number,
  date: string,
  subject: string,
  message: string,
  isRead: boolean
}

export interface ErrorsContactType {
  email: string | null,
  name: string | null,
  message: string | null,
  phone?: string | null
}