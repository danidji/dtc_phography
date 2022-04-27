import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Image from 'next/image'

import { useThemeContext } from '../src/state/theme.context'
import { SeparatorLine } from './index'
import { PricesItemsType, PriceFormulaType } from '../src/interfaces'
import { pricesItems } from '../src/constants'


interface StyledPropsType {
  num: number
}

const Prices: NextPage = () => {
  const { color } = useThemeContext()


  const renderParagraph = (paragraph: string[]): JSX.Element[] => {
    return paragraph.map((item: string, i: number): JSX.Element => (
      <StyledP key={i}>{item}</StyledP>
    ))
  }

  const renderPriceFormula = (formulas: PriceFormulaType[]): JSX.Element[] => {
    return formulas.map((formula: PriceFormulaType, i: number): JSX.Element => (
      <PriceFormulaInfos className="prices_formula_info" key={i}>
        <StyledH3>{formula.subTitle}</StyledH3>
        {renderParagraph(formula.paragraph)}
      </PriceFormulaInfos>
    ))
  }

  const renderPricesItem = (items: PricesItemsType[]): JSX.Element[] => {
    return items.map((item: PricesItemsType, i: number): JSX.Element => (
      <ContentPricesItems className="content_prices_item" key={i} num={i + 1}>
        <PricesImage className="prices_image" style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image src={item.pathImage} layout="fill" objectFit="cover" />
        </PricesImage>
        <PricesInfos className="prices_infos">
          <StyledH2>{item.title}</StyledH2>
          {renderPriceFormula(item.priceFormula)}
        </PricesInfos>
      </ContentPricesItems>
    ))
  }


  return (
    < >
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
  /* height: 40rem; */
`

const PricesInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column ;
  align-items:center ;
  /* padding:1rem ; */
`
const PriceFormulaInfos = styled.div` 
  margin: .5rem 0 ;
`

const StyledH2 = styled.h2`
  font-size: 2.5rem;
  margin:.5rem 0;
  text-align: center ;
  `
const StyledH3 = styled.h3`
  font-size: 1.5rem;
  margin:0;
  text-align: center ;
  font-family: "Nunito" ;
  font-weight: 500 ;
  `

const StyledP = styled.p`
  font-size: .7rem ;
  text-align: center ;

  @media (min-width: 768px) {
    font-size: 1.2rem;
  }

`