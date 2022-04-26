import React, { useCallback } from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react'
import useDetectMobileWindow from '../hooks/use-detect-mobile-window';
import { ThemePropsType } from '../interfaces/theme.interfaces';


interface CarouselItemtype {
  id: number;
  path: string,
}

const carouselImages: CarouselItemtype[] = [
  { id: 1, path: "/assets/images/carrousel/lunysse_caroussel1.jpg", },
  { id: 2, path: "/assets/images/carrousel/lunysse_caroussel2.jpg", },
  { id: 3, path: "/assets/images/carrousel/lunysse_caroussel3.jpg", },
  { id: 4, path: "/assets/images/carrousel/lunysse_caroussel4.jpg", },
  { id: 5, path: "/assets/images/carrousel/lunysse_caroussel5.jpg", },
]

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
  /* flex: ${({ isMobile }) => isMobile ? "0 0 100%" : "0 0 50%"}; */
  flex:0 0 100%;
  margin-right: 4rem ;
  `

const StyledImage = styled(Image)`
  object-fit:cover ;
  border-radius: 3rem ;
  z-index: 99 ;
  /* position:absolute ;
  top: 0 ;
  left: 0 ; */

  `
