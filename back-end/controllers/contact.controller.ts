import type { NextApiRequest, NextApiResponse } from 'next'
import validator from 'validator'

import { createNewMessage } from '../repositories/contact.repository'
import { sendEmail } from '../services/sendMail.service'
import { generateUId } from '../services/functions'
import { ContactMessageType, ErrorsContactType } from '../models/contact.interface'

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
          phone,
          subject: subject ?? "Demande d'information",
          message,
          date: `${new Date()}`,
          isRead: false
        }
        await createNewMessage(newMessage)


      } else {
        errors.email = "Veuillez saisir un email valide"
        res.status(500).json(errors)
      }
    } else {
      res.status(500).json(errors)
    }

  } catch (err) {
    console.log({ err })
    res.status(500).json({ error: err })
  }

}