import React, {useCallback} from "react";
import Image from "next/image";
import styled from "styled-components";
import useEmblaCarousel from "embla-carousel-react";
import useDetectMobileWindow from "../hooks/use-detect-mobile-window";
import {ThemePropsType, CarouselItemType} from "../interfaces";
import {carouselImages, carouselTestimony} from "../constants";
import {useThemeContext} from "../state/theme.context";
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

export enum CarouselType {
    IMAGE = "image",
    TESTIMONY = "testimony",
}
interface PropsType {
    type: CarouselType;
}

const Carousel = ({type}: PropsType): JSX.Element => {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const {isMobile} = useDetectMobileWindow();
    const {color} = useThemeContext();

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const renderCarouselImages = (): JSX.Element[] => {
        return carouselImages.map(
            (image: CarouselItemType): JSX.Element => (
                <EmblaSlide key={image.id} style={{width: "100%", height: "auto", position: "relative"}} isMobile={isMobile}>
                    <StyledImage src={image.path} layout="fill" priority alt="carrousel photo" />
                </EmblaSlide>
            )
        );
    };

    const renderCarouselTestimony = (): JSX.Element[] => {
        return carouselTestimony.map(
            (testimony: CarouselItemType): JSX.Element => (
                <EmblaSlide key={testimony.id} isMobile={isMobile}>
                    <TestimonyWrapper className="testimony_wrapper" bgColor={color.primaryOp25}>
                        <TestimonyImage className="testimony_image">
                            <StyledImage src={testimony.path} layout="fill" priority objectFit="cover" alt="photo témoignage" />
                        </TestimonyImage>
                        <TestimonySection>
                            <h3>{testimony.name}</h3>
                            <TestimonyText className="testimony_text">{testimony.text}</TestimonyText>
                        </TestimonySection>
                    </TestimonyWrapper>
                </EmblaSlide>
            )
        );
    };

    return (
        <CarouselWrapper className="carousel_wrapper" ref={emblaRef} isMobile={isMobile}>
            {type === CarouselType.IMAGE ? (
                <CarouselImageContainer className="container" isMobile={isMobile}>
                    {renderCarouselImages()}
                </CarouselImageContainer>
            ) : (
                <CarouselTestimonyContainer className="container">{renderCarouselTestimony()}</CarouselTestimonyContainer>
            )}
            <ButtonPrev className="embla__prev" onClick={scrollPrev} color={color.primary}>
                <FiChevronLeft />
            </ButtonPrev>
            <ButtonNext className="embla__next" onClick={scrollNext} color={color.primary}>
                <FiChevronRight />
            </ButtonNext>
        </CarouselWrapper>
    );
};

export default Carousel;

const CarouselWrapper = styled.div<ThemePropsType>`
    width: 100%;
    margin-top: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border-radius: 1rem ; */
    position: relative;

    @media (min-width: 768px) {
        width: 80%;
    }
    @media (min-width: 1060px) {
        width: 70%;
    }
    @media (min-width: 1200px) {
        width: 80%;
    }
`;
const ButtonNav = styled.button<ThemePropsType>`
    position: absolute;
    height: 100%;
    width: 4rem;
    font-size: 6rem;
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    z-index: 999;
    cursor: pointer;
    opacity: 0.3;
    color: ${(p) => p.color};
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ButtonPrev = styled(ButtonNav)`
    left: 0;
`;
const ButtonNext = styled(ButtonNav)`
    right: 0;
`;

const CarouselImageContainer = styled.div<ThemePropsType>`
    height: 20rem;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    border-radius: 1rem;
    @media (min-width: 400px) {
        height: 30rem;
    }
    @media (min-width: 1060px) {
        height: 40rem;
    }
    @media (min-width: 1200px) {
        height: 45rem;
    }
`;

const CarouselTestimonyContainer = styled.div<ThemePropsType>`
    width: 100%;
    display: flex;
`;

const TestimonyWrapper = styled.div<ThemePropsType>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: ${(p) => p.bgColor};
    padding: 3rem;
    min-height: 20rem;

    @media (max-width: 500px) {
        min-height: 40rem;
        flex-direction: column;
    }
`;

const TestimonySection = styled.div<ThemePropsType>`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
`;

const TestimonyText = styled.div`
    text-align: center;
    padding: 0.5rem;
    font-size: 0.8rem;
`;

const TestimonyImage = styled.div`
    // flex: 1;
    width: 40%;
    height: 20rem;
    position: relative;
    @media (max-width: 500px) {
        width: 100%;
        height: 15rem;
    }
`;

const EmblaSlide = styled.div<ThemePropsType>`
    flex: 0 0 100%;
    margin-right: 4rem;
`;

const StyledImage = styled(Image)`
    object-fit: cover;
    border-radius: 0.5rem;
    z-index: 99;
`;
