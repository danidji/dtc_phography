import React, { useCallback } from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react'
import useDetectMobileWindow from '../hooks/use-detect-mobile-window';
import { ThemePropsType, CarouselItemtype } from '../interfaces';
import { carouselImages } from '../constants';


const Carousel = (): JSX.Element => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { isMobile } = useDetectMobileWindow();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const renderCarouselImages = (): JSX.Element[] => {
    return carouselImages.map((image: CarouselItemtype): JSX.Element => (
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
      <button className="embla__prev" onClick={scrollPrev}>&#x3008;</button>
      <button className="embla__next" onClick={scrollNext}>&#x27E9;</button>
    </CarouselWrapper>
  )
}

export default Carousel

const CarouselWrapper = styled.div<ThemePropsType>`
  /* width: "100%"; */
  margin-top:4rem;
  overflow: hidden ;
  display: flex;
  flex-direction: column;
  align-items:center ;
  
  `

const EmblaContainer = styled.div<ThemePropsType>`
  height: 40rem ;
  width: ${({ isMobile }) => isMobile ? "100%" : "60rem"}; ;
  display: flex;
  justify-content: flex-start ;
`

const EmblaSlide = styled.div<ThemePropsType>`
  flex:0 0 100%;
  margin-right: 4rem ;
  `

const StyledImage = styled(Image)`
  object-fit:cover ;
  border-radius: 3rem ;
  z-index: 99 ;

  `
