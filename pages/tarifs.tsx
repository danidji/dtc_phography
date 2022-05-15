import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

import PriceCard from '../src/components/PriceCard'
import { useThemeContext } from '../src/state/theme.context'
import { SeparatorLine } from './index'
import { PricesItemsType } from '../src/interfaces'
import { pricesItems } from '../src/constants'
import { StyledButton, StyledP } from '../styles/StyledComponent';


interface StyledPropsType {
  num: number
}

const Prices: NextPage = () => {
  const { color } = useThemeContext()
  const router = useRouter()

  const renderPricesItem = (items: PricesItemsType[]): JSX.Element[] => {
    return items.map((item: PricesItemsType, i: number): JSX.Element => (
      <ContentPricesItems className="content_prices_item" key={i} num={i + 1}>
        <PricesImage className="prices_image" style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src={item.pathImage} layout="fill" objectFit="cover" priority />
        </PricesImage>
        <PriceCard title={item.title} priceFormula={item.priceFormula} />
      </ContentPricesItems>
    ))
  }

  const handleClick = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    router.push('/contact')
  }


  return (
    <>
      <Head>
        <title>Tarifs</title>
        <meta name="description" content="Tarifs - Lunysse photographe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PricesWrapper className="prices_wrapper">
        <h1> Tarifs </h1>
        <StyledSeparatorLine bgColor={color.primary} />
        <ContentPricesWrapper className="content_prices_wrapper">
          <ContentPricesItems className="content_prices_item" num={0}>
            <PricesImage className="prices_image" style={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={"/assets/images/tarifs/presentation.jpg"}
                layout="fill"
                objectFit='cover'
                priority
              />
            </PricesImage>
            <PricesInfos className="prices_infos">
              <StyledP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptate sit dolores quidem earum quam possimus laboriosam, quae distinctio quos?</StyledP>
              <StyledP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptate sit dolores quidem earum quam possimus laboriosam, quae distinctio quos?</StyledP>
              <StyledP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptate sit dolores quidem earum quam possimus laboriosam, quae distinctio quos?</StyledP>
              <StyledP>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus voluptate sit dolores quidem earum quam possimus laboriosam, quae distinctio quos?</StyledP>
            </PricesInfos>
          </ContentPricesItems>
          {renderPricesItem(pricesItems)}
          <ContactWrapper className="contact_wrapper">
            <StyledP>Pour plus d&lsquo;informations ou pour commander un forfait : </StyledP>
            <StyledButton onClick={handleClick} bgColor={color.primary}>Contactez moi</StyledButton>
          </ContactWrapper>
        </ContentPricesWrapper>
      </PricesWrapper>
    </>
  )
}

export default Prices

const PricesWrapper = styled.div`
  display: flex;
  flex-direction: column ;
  align-items: center ;
`
const StyledSeparatorLine = styled(SeparatorLine)`
  margin: .5rem 0 4rem 0 ;
`

const ContentPricesWrapper = styled.div`
  width: 80% ;

  @media (min-width: 768px) {
    width: 70% ;
  }
  `

const ContentPricesItems = styled.div <StyledPropsType>`
  display: flex;
  flex-direction: column;
  align-items:center ;
  height:60rem;
  
  @media (min-width: 768px) {
    flex-direction:${({ num }) => (num % 2) === 0 ? "row" : "row-reverse"}  ;
    height: 40rem ;
  }
  `

const PricesImage = styled.div`
  flex : 1;
`

const PricesInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column ;
  align-items:center ;
`

const ContactWrapper = styled.div`
  width: 100% ;
  margin: 7rem 0 ;
  display: flex;
  flex-direction: column ;
  align-items:center ;
`