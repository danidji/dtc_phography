import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

import Carousel from "../src/components/Carousel";
import CircleImage from "../src/components/CircleImage";

import {ThemePropsType} from "../src/interfaces";
import {useThemeContext} from "../src/state/theme.context";
import {CarouselType} from "../src/components/Carousel";

const Home: NextPage = () => {
    const {color} = useThemeContext();

    return (
        <>
            <Head>
                <title>Accueil - Lunysse photographe</title>
                <meta name="description" content="Accueil - Lunysse photographe" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ContentWrapper className="content_wrapper">
                <Carousel type={CarouselType.IMAGE} />
                <SeparatorLine className="separator_line" bgColor={color.primary}></SeparatorLine>
                <PresentationWrapper className="presentation_wrapper">
                    <div className="presentation_image" style={{position: "relative", width: "15rem", height: "20rem"}}>
                        <StyledImage src={"/assets/images/presentation.jpg"} layout="fill" objectFit="cover" />
                    </div>
                    <PresentationContent className="presentation_content">
                        <StyledH2>Petite Présentation en quelques lignes…</StyledH2>
                        <StyledP>
                            Je me présente, Thien, je suis photographe en freelance et autodidacte depuis maintenant 2 ans. Une passion depuis ma plus
                            jeune enfance. Lorsque vous parcourez mon travail à travers le site internet, vous pouvez voir mon style un peu différent
                            de certains photographes. J’aime partir sur des réalisations artistiques, créatives. C’est ce qui me représente le plus ,
                            mon univers féérique.. <br />
                            <br />
                            Bien-sûr, je réalise des projets hors artistique et féérique pour que chacun d’entre vous se sente à l’aise, et se
                            retrouve. Vous avez une rubrique Portrait , dont vous pouvez découvrir mon autre univers calme avec de la douceur. <br />
                            <br />
                            Un échange par mail ou par téléphone est disponible avant une réservation, alors n’hésitez à prendre quelques minutes pour
                            poser toutes vos questions.
                        </StyledP>
                    </PresentationContent>
                </PresentationWrapper>
                <SeparatorLine className="separator_line" bgColor={color.primary}></SeparatorLine>
                <TestimonyContent className="testimony_content">
                    <h1>Témoignages</h1>
                    <Carousel type={CarouselType.TESTIMONY} />
                </TestimonyContent>
                <CircleImage src={"/assets/images/circle_image1.jpg"} />
            </ContentWrapper>
        </>
    );
};

export default Home;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SeparatorLine = styled.div<ThemePropsType>`
    width: 50%;
    height: 3px;
    background-color: ${(p) => p.bgColor};
    opacity: 0.5;
    margin: 6rem 0;
    border-radius: 1.5px;
    @media (min-width: 768px) {
        width: 30%;
    }
`;

const PresentationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    @media (min-width: 1060px) {
        width: 60%;
    }
`;

const StyledImage = styled(Image)`
    border-radius: 2rem;
`;
const PresentationContent = styled.div<ThemePropsType>`
    flex: 1;
    padding: 0 1rem;
    margin-left: 1rem;
`;

const StyledH2 = styled.h2`
    text-align: center;
`;

const StyledP = styled.p`
    text-align: justify;
`;

const TestimonyContent = styled.div`
    margin: 2rem 0 7rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
