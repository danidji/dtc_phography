import React, { useCallback } from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react'
import useDetectMobileWindow from '../hooks/use-detect-mobile-window';


interface CarouselItemtype {
  id: number;
  path: string,
}

interface CarouselPropType {
  isMobile: boolean | null
}

const carouselImages: CarouselItemtype[] = [
  { id: 1, path: "/assets/caroussel/lunysse_caroussel1.jpg", },
  { id: 2, path: "/assets/caroussel/lunysse_caroussel2.jpg", },
  { id: 3, path: "/assets/caroussel/lunysse_caroussel3.jpg", },
  { id: 4, path: "/assets/caroussel/lunysse_caroussel4.jpg", },
  { id: 5, path: "/assets/caroussel/lunysse_caroussel5.jpg", },
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
        style={{ width: "100%", height: "100%", position: "relative" }}
        isMobile={isMobile}
      >
        <StyledImage src={image.path} layout="fill" />
      </EmblaSlide>
    ))
  }
  return (
    <>
      <CarouselWrapper className="carousel_wrapper" ref={emblaRef} isMobile={isMobile}>
        <EmblaContainer className="container" isMobile={isMobile}>
          {renderCarouselImages()}
        </EmblaContainer>
      </CarouselWrapper>
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </>
  )
}

export default Carousel

const CarouselWrapper = styled.div<CarouselPropType>`
  height: 33rem ;
  width: "100%" ;
  margin-top:2rem;
  overflow: hidden ;
  
  `

const EmblaContainer = styled.div<CarouselPropType>`
  height: 33rem ;
  width: ${({ isMobile }) => isMobile ? "100%" : "60%"}; ;
  display: flex;
  justify-content: flex-start ;
`

const EmblaSlide = styled.div<CarouselPropType>`
  width: "100%";
  height: "100%"; 
  position: "relative";
  flex: ${({ isMobile }) => isMobile ? "0 0 100%" : "0 0 50%"};
  margin-right: 4rem ;
  /* z-index: 99 ; */
  `

const StyledImage = styled(Image)`
  object-fit:cover ;
  border-radius: 3rem ;
  `
