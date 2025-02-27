import React, {useState} from "react";
import styled from "styled-components";
import ReactCardFlip from "react-card-flip";

import {PriceFormulaType, ThemePropsType} from "../interfaces";
import {useThemeContext} from "../state/theme.context";
import {StyledButton} from "../../styles/StyledComponent";

interface PriceCardProps {
    title: string;
    priceFormula: PriceFormulaType[];
}

const PriceCard = ({title, priceFormula}: PriceCardProps): JSX.Element => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false);
    const {color} = useThemeContext();

    const renderParagraph = (paragraph: string[]): JSX.Element[] => {
        return paragraph.map(
            (item: string, i: number): JSX.Element => (
                <StyledPara key={i} color={color.secondary}>
                    {item}
                </StyledPara>
            )
        );
    };

    const renderPriceFormula = (formulas: PriceFormulaType[]): JSX.Element[] => {
        return formulas.map(
            (formula: PriceFormulaType, i: number): JSX.Element => (
                <PriceFormulaInfos className="prices_formula_info" key={i}>
                    <StyledH3 color={color.primaryOp50}>{formula.subTitle}</StyledH3>
                    {renderParagraph(formula.paragraph)}
                </PriceFormulaInfos>
            )
        );
    };

    return (
        <PricesInfos className="prices_infos">
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection="horizontal"
                cardStyles={{front: {height: "100%"}, back: {height: "100%"}}}
                containerStyle={{height: "100%"}}
            >
                <FrontCard>
                    <StyledH2 color={color.secondary}>{title}</StyledH2>
                    <StyledButton onClick={() => setIsFlipped(!isFlipped)} bgColor={color.primary}>
                        Découvrir
                    </StyledButton>
                </FrontCard>

                <BackCard onClick={() => setIsFlipped(!isFlipped)}>
                    <StyledH2 color={color.primary}>{title}</StyledH2>
                    {renderPriceFormula(priceFormula)}
                </BackCard>
            </ReactCardFlip>
        </PricesInfos>
    );
};

export default PriceCard;

const PricesInfos = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
`;

const PriceFormulaInfos = styled.div`
    margin: 0.5rem 0;
`;

const FrontCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 100%;
`;

const BackCard = styled.button`
    background-color: transparent;
    border: none;
`;

const StyledH2 = styled.h2<ThemePropsType>`
    font-size: 2rem;
    margin: 0.5rem 0;
    text-align: center;
    font-style: italic;
    color: ${(p) => p.color};
    padding: 1rem;
`;
const StyledH3 = styled.h3<ThemePropsType>`
    font-size: 1.5rem;
    margin: 1.5rem 0 0 0;
    text-align: center;
    font-style: italic;
    font-family: "Nunito";
    font-weight: 500;
    color: ${(p) => p.color};
`;

const StyledPara = styled.p<ThemePropsType>`
    font-size: 1rem;
    text-align: center;
    font-weight: 300;
    color: ${(p) => p.color};
    margin: 0.5rem 0;
`;
