export interface ContactMessageType {
  id: string,
  email: string,
  name: string,
  phone?: number | undefined,
  date: string,
  subject: string,
  message: string,
  isRead: boolean
}

export interface ErrorsContactType {
  email: string | null,
  name: string | null,
  message: string | null,
  phone?: string | null,
  database?: string | null
}

export interface MailDataType {
  from: string,
  to: string,
  subject: string,
  text: string
}