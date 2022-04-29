import React, { useCallback } from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react'
import useDetectMobileWindow from '../hooks/use-detect-mobile-window';
import { ThemePropsType, CarouselItemType } from '../interfaces';
import { carouselImages } from '../constants';
import { useThemeContext } from '../state/theme.context';


const Carousel = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { isMobile } = useDetectMobileWindow();
  const { color } = useThemeContext()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const renderCarouselImages = (): JSX.Element[] => {
    return carouselImages.map((image: CarouselItemType): JSX.Element => (
      <EmblaSlide
        key={image.id}
        style={{ width: "100%", height: "auto", position: "relative" }}
        isMobile={isMobile}
      >
        <StyledImage src={image.path} layout="fill" priority />
      </EmblaSlide>
    ))
  }
  return (
    <CarouselWrapper className="carousel_wrapper" ref={emblaRef} isMobile={isMobile}>
      <EmblaContainer className="container" isMobile={isMobile}>
        {renderCarouselImages()}
      </EmblaContainer>
      <ButtonPrev className="embla__prev" onClick={scrollPrev} color={color.primary}>&lsaquo;</ButtonPrev>
      <ButtonNext className="embla__next" onClick={scrollNext} color={color.primary}>&rsaquo;</ButtonNext>
    </CarouselWrapper>
  )
}

export default Carousel

const CarouselWrapper = styled.div<ThemePropsType>`
  width: 100%;
  margin-top:1rem;
  overflow: hidden ;
  display: flex;
  flex-direction: column;
  align-items:center ;
  border-radius: 1rem ;
  position: relative;
  

  @media (min-width: 768px) {
    width: 80% ;
  }  
  @media (min-width: 1060px) {
    width: 70% ;
  }  
  @media (min-width: 1200px) {
    width: 55% ;
  }  
  
  `
const ButtonNav = styled.button<ThemePropsType>`
  position: absolute;
  top : 42%;
  font-size: 6rem ;
  padding:0 ;
  border:none ;
  outline: none;
  background-color: transparent;
  z-index: 999 ;
  cursor: pointer;
  opacity: .5;
  color: ${p => p.color};
  
  @media (min-width: 400px) {
    top: 38% ;
  }  

`
const ButtonPrev = styled(ButtonNav)`
  left: 1rem ;
`
const ButtonNext = styled(ButtonNav)`
  right: 1rem ;
`

const EmblaContainer = styled.div<ThemePropsType>`
  height: 20rem ;
  width: 100% ;
  display: flex;
  justify-content: flex-start ;
  border-radius: 1rem ;
  @media (min-width: 400px) {
    height: 30rem ;
  }  
  @media (min-width: 1060px) {
    height: 40rem ;
  }  
  @media (min-width: 1200px) {
    height: 45rem ;
  }  
`

const EmblaSlide = styled.div<ThemePropsType>`
  flex:0 0 100%;
  margin-right: 4rem ;
  border-radius: 1rem ;
  `

const StyledImage = styled(Image)`
  object-fit:cover ;
  border-radius: 1rem ;
  z-index: 99 ;

  `
