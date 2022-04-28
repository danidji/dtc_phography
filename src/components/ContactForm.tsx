import React, { FC } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import validator from 'validator'
import styled from 'styled-components'

import { ContactFormType } from '../interfaces'
import { StyledButton } from '../../styles/StyledComponent'


const ContactForm: FC = (): JSX.Element => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormType>();

  const onSubmit: SubmitHandler<ContactFormType> = (data): void => {
    console.log({ data, errors })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Nom & Prénom"
        {...register("name", {
          // required: true
        })}
      />
      <input
        type="text"
        placeholder="Email"
        {...register("email", {
          // required: true
        })}
      />
      <input
        type="text"
        placeholder="Téléphone (si vous souhaitez être rappelé)"
        {...register("phone", {
          // required: true
        })}
      />
      <input
        type="text"
        placeholder="Objet"
        {...register("object", {
          // required: true
        })}
      />
      <textarea
        placeholder="Parlez moi de votre projet..."
        {...register("message", {
          // required: true
        })}
      />
      <input
        type="submit"
        value="Envoyer" />

    </form>
  )
}

export default ContactForm