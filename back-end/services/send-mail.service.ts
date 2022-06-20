import nodemailer from "nodemailer"
import { MailDataType } from "../models/contact.interface"

export const mailConfig = {
  service: "Gmail",
  auth: {
    user: `${process.env.SMTP_USER}`,
    pass: `${process.env.SMTP_PASS}`
  }
}

const mailer = nodemailer.createTransport(mailConfig)

export const sendEmail = async (
  { to,
    subject,
    text,
    from }: MailDataType
) => {
  await mailer.sendMail({ to, subject, text, from })
}