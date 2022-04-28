import nodemailer from "nodemailer"

const config = {
  service: "Gmail",
  auth: {
    user: `${process.env.SMTP_USER}`,
    pass: `${process.env.SMTP_PASS}`
  }
}

const mailer = nodemailer.createTransport(config)

export const sendEmail = async (
  to: string,
  subject: string,
  html: string,
  from: string = config.auth.user
) => {
  await mailer.sendMail({ to, subject, html, from })
}