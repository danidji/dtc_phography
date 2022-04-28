import React, { useState } from 'react'
import styled from 'styled-components'
import ReactCardFlip from 'react-card-flip'

import { PriceFormulaType, ThemePropsType } from '../interfaces'
import { useThemeContext } from '../state/theme.context';
import { StyledButton, StyledP } from '../../styles/StyledComponent';

interface PriceCardProps {
  title: string,
  priceFormula: PriceFormulaType[]
}

const PriceCard = ({ title, priceFormula }: PriceCardProps): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false)
  const { color } = useThemeContext()

  const renderParagraph = (paragraph: string[]): JSX.Element[] => {
    return paragraph.map((item: string, i: number): JSX.Element => (
      <StyledP key={i} color={color.secondary}>{item}</StyledP>
    ))
  }

  const renderPriceFormula = (formulas: PriceFormulaType[]): JSX.Element[] => {
    return formulas.map((formula: PriceFormulaType, i: number): JSX.Element => (
      <PriceFormulaInfos className="prices_formula_info" key={i}>
        <StyledH3 color={color.secondary}>{formula.subTitle}</StyledH3>
        {renderParagraph(formula.paragraph)}
      </PriceFormulaInfos>
    ))
  }

  return (
    <PricesInfos className="prices_infos">
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        cardStyles={{ front: { height: "100%" }, back: { height: "100%" } }}
        containerStyle={{ height: "100%" }}
      >
        <FrontCard>
          <StyledH2>{title}</StyledH2>
          <StyledButton onClick={() => setIsFlipped(!isFlipped)} bgColor={color.primary}>Découvrir</StyledButton>
        </FrontCard>

        <BackCard onClick={() => setIsFlipped(!isFlipped)}>
          <StyledH2 color={color.primary}>{title}</StyledH2>
          {renderPriceFormula(priceFormula)}
        </BackCard>

      </ReactCardFlip>
    </PricesInfos>
  )
}

export default PriceCard


const PricesInfos = styled.div`
  flex: 1;
  display: flex;
  flex-direction:column ;
  align-items:center ;
  height:100% ;
  `

const PriceFormulaInfos = styled.div` 
  margin: .5rem 0 ;
`

const FrontCard = styled.div`
  display: flex;
  flex-direction:column ;
  align-items: center ;
  justify-content: space-around;
  height:100% ;
`

const BackCard = styled.button`
  background-color: transparent;
  border: none;
`

const StyledH2 = styled.h2<ThemePropsType>`
  font-size: 2.5rem;
  margin:.5rem 0;
  text-align: center ;
  color: ${p => p.color};
  padding:1rem ;
  `
const StyledH3 = styled.h3<ThemePropsType>`
  font-size: 1.5rem;
  margin:0;
  text-align: center ;
  font-family: "Nunito" ;
  font-weight: 500 ;
  color: ${p => p.color};
  `
