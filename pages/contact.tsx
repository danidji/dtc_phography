import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import CircleImage from '../src/components/CircleImage'
import ContactForm from '../src/components/ContactForm'

import { ThemePropsType } from '../src/interfaces'
import { useThemeContext } from '../src/state/theme.context'



const Contact: NextPage = () => {
  const { color } = useThemeContext();
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact - Lunysse photographe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContactWrapper className="contact_wrapper">

        <ContactHeader className="contact_header">
          <div className="image_item" style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src="/assets/images/contact/contact_image1.jpeg"
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className="image_item" style={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              src="/assets/images/contact/contact_image2.jpg"
              layout='fill'
              objectFit='cover'
            />
          </div>
        </ContactHeader>

        <h1>Contact</h1>

        <StyledP>Si vous aimez mon travail et que vous souhaitez que je vous aide à réaliser un de vos projets, vous pouvez me joindre via ce formulaire de contact :</StyledP>

        <ContactFormWrapper className="contact_form_wrapper" bgColor={color.primaryOp50}>
          <ContactForm />

        </ContactFormWrapper>

        <CircleImage src={"/assets/images/contact/circle_image2.png"} />

      </ContactWrapper>
    </>
  )
}

export default Contact

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: center ;
`

const ContactHeader = styled.div`
  display: flex;
  height: 10rem;
  width: 100%;
  justify-content: center ;
  margin: 3rem 0 ;

  @media (min-width: 768px) {
    height: 20rem ;
  }
  @media (min-width: 1069px) {
    height: 25rem ;
    width: 80%;
  }

`
const StyledP = styled.p`
  width:  80%;
  text-align:center ;

  @media (min-width: 768px) {
    width:  60%;
  }
  @media (min-width: 1069px) {
    width: 40%;
  }
`

const ContactFormWrapper = styled.div<ThemePropsType>`

  width:100% ;
  background-color: ${p => p.bgColor};
  margin: 5rem 0 ;
  border-radius:1rem ;

  @media (min-width: 1069px){
    width: 80% ;
  }

`
