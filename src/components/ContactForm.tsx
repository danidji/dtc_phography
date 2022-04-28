import React, { FC } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import validator from 'validator'
import styled from 'styled-components'

import { ContactFormType } from '../interfaces'
import { ThemePropsType } from '../interfaces/theme.interfaces';
import { useThemeContext } from '../state/theme.context';


const ContactForm: FC = (): JSX.Element => {

  const { color } = useThemeContext()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormType>();

  const onSubmit: SubmitHandler<ContactFormType> = (data): void => {
    console.log({ data })
  }
  console.log({ errors })
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <FieldsWrapper className="fields_wrapper">

        <InputWrapper className="input_wrapper">

          <StyledInput
            type="text"
            placeholder="Nom & Prénom"
            {...register("name", {
              required: true,
              validate: (value: string): boolean => validator.isLength(value, { min: 2, max: 50 })
            })}
          />
          {errors.name && <ErrorMsg className='error_msg'>Veuillez saisir un nom d'au moins 2 caractères</ErrorMsg>}
          <StyledInput
            type="text"
            placeholder="Email"
            {...register("email", {
              required: true,
              validate: (value: string): boolean => validator.isEmail(value)
            })}
          />
          {errors.email && <ErrorMsg className='error_msg'>Veuillez saisir un email valide</ErrorMsg>}
          <StyledInput
            type="text"
            placeholder="Téléphone (si vous souhaitez être rappelé)"
            {...register("phone", {
            })}
          />
          <StyledInput
            type="text"
            placeholder="Objet"
            {...register("subject", {
            })}
          />
        </InputWrapper>
        <TextAreaWrapper className="textarea_wrapper">

          <StyledTextArea
            placeholder="Parlez moi de votre projet..."
            {...register("message", {
              required: true
            })}
          />
          {errors.message && <ErrorMsg className='error_msg'>Veuillez saisir un message</ErrorMsg>}
        </TextAreaWrapper>
      </FieldsWrapper>
      <ButtonSubmit
        type="submit"
        value="Envoyer"
        bgColor={color.primary}
      />

    </StyledForm>
  )
}

export default ContactForm

const StyledForm = styled.form`
  width:100% ;
  height:100% ;
  display: flex;
  flex-direction: column ;
  justify-content:space-around ;
  align-items:center ;
  padding:3rem 1rem ;


  `
const FieldsWrapper = styled.div`
  width: 100% ;
  height:100% ;
  display: flex;
  flex-direction:column ;
  align-items: center ;
  
  @media (min-width: 1069px) {
    flex-direction: row ;
  }
  `
const InputWrapper = styled.div`
  width: 100% ;
  display: flex;
  flex-direction:column ;
  align-items: center ;

  @media (min-width: 1069px) {
    flex: 1 ;
  }
`
const StyledInput = styled.input`
  width: 80% ;
  padding: 1rem ;
  margin: .5rem 0 ;
  outline:none ;
  border:none ;
  font-size: .9rem ;
  border-radius:.3rem ;
  font-family:"Nunito", Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  
`

const TextAreaWrapper = styled.div`
  width:100% ;
  height: 10rem ;
  display: flex;
  flex-direction:column ;
  align-items: center ;
  flex:1 ;
  
  @media (min-width: 1069px) {
    flex: 1 ;
    /* height: 17rem; */
    height: 100% 
  }
`

const StyledTextArea = styled.textarea`
  width: 80% ;
  height: 10rem ;
  padding: 1rem ;
  margin: .5rem 0 ;
  border:none ;
  outline:none ;
  font-size: .9rem ;
  border-radius:.3rem ;
  font-family:"Nunito", Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; 
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (min-width: 1069px) {
    height: 16rem;
  }

`

const ButtonSubmit = styled.input<ThemePropsType>`
  background-color: ${p => p.bgColor};
  padding:.5rem 1.5rem ;
  font-size: 1.5rem ;
  font-weight:bold ;
  color: #fff;
  border: none;
  border-radius: .3rem ;
  cursor: pointer;
  margin: 2rem 0 0 0;
  background-image: linear-gradient(62deg, #d39c2f 0%, #F7CE68 100%);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`

export const ErrorMsg = styled.div<ThemePropsType>`
  font-size:.7rem ;
  color: red;
  align-self:start ;
  /* padding: .2rem; */
  padding-left: 2rem ;

  @media (min-width:480px ){
    padding-left: 4rem ;
  }
  @media (min-width:768px ){
    padding-left: 6rem ;
  }
  @media (min-width:1069px ){
    padding-left: 4.5rem ;
  }
`