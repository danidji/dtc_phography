import type { NextApiRequest, NextApiResponse } from 'next'
import validator from 'validator'

import { createNewMessage } from '../repositories/contact.repository'
import { sendEmail, mailConfig } from '../services/sendMail.service'
import { generateUId } from '../services/functions'
import { ContactMessageType, ErrorsContactType, MailDataType } from '../models/contact.interface'

export const processSendMail = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {

  try {
    const { name, email, phone, subject, message } = req.body.data

    const errors: ErrorsContactType = {
      name: !name ? "Veuillez saisir un nom" : null,
      email: !email ? "Veuillez saisir un email" : null,
      message: !message ? "Veuillez saisir un message" : null
    }

    if (!errors.name && !errors.email && !errors.message) {
      if (validator.isEmail(email)) {
        if (phone && !validator.isMobilePhone(phone, "fr-FR")) {
          errors.phone = "Veuillez renseigner un numéro de téléphone valide";
          res.status(500).json({ errors: errors });
        }

        const newMessage: ContactMessageType = {
          id: generateUId(),
          name,
          email,
          subject: subject ?? "Demande d'information",
          message,
          date: `${new Date()}`,
          isRead: false
        }

        if (phone) {
          newMessage.phone = phone
        }
        const createdMessage = await createNewMessage(newMessage)

        if (createdMessage) {
          console.log({ createdMessage })
          const mailData: MailDataType = {
            from: createdMessage.email,
            to: mailConfig.auth.user,
            subject: createdMessage.subject,
            text: `Message de ${createdMessage.email}\n\nTéléphone: ${phone ? createdMessage.phone : "Non spécifié"}\n\nContenue du message :\n\n${createdMessage.message}`
          }

          await sendEmail(mailData)
          res.status(200).send("Mail envoyé avec succès")
        } else {
          res.status(500).json({ error: "Message non sauvegardé en base" })

        }


      } else {
        errors.email = "Veuillez saisir un email valide"
        res.status(500).json(errors)
      }
    } else {
      res.status(500).json(errors)
    }

  } catch (err) {
    console.log({ err })
    res.status(500).json(err)
  }

}