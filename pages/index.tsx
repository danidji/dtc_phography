import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import Carousel from '../src/components/Carousel'
import CircleImage from '../src/components/CircleImage'

import { ThemePropsType } from '../src/interfaces'
import { useThemeContext } from '../src/state/theme.context'
import { CarouselType } from '../src/components/Carousel'


const Home: NextPage = () => {
  const { color } = useThemeContext()

  return (
    <>
      <Head>
        <title>Accueil - Lunysse photographe</title>
        <meta name="description" content="Accueil - Lunysse photographe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ContentWrapper className="content_wrapper">
        <Carousel type={CarouselType.IMAGE} />
        <SeparatorLine className="separator_line" bgColor={color.primary} ></SeparatorLine>
        <PresentationWrapper className="presentation_wrapper" >
          <div className="presentation_image" style={{ position: "relative", width: "15rem", height: "20rem" }}>
            <StyledImage
              src={"/assets/images/presentation.jpg"}
              layout="fill"
              objectFit='cover'
            />
          </div>
          <PresentationContent className="presentation_content">
            <StyledH2>Qui suis je ?</StyledH2>
            <StyledP>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, obcaecati delectus animi repellendus provident voluptas sit, ad saepe doloribus, ab accusantium impedit eum. Sequi, voluptate at exercitationem vero in debitis sunt, numquam et voluptatibus iste maiores. Eum fuga ipsum, recusandae eveniet labore molestiae iusto ut repellat tempore neque consequatur officiis amet voluptas a veritatis sequi quibusdam ducimus quis officia magni assumenda? Nemo perspiciatis blanditiis minus odit aspernatur sapiente eligendi ea maiores, quos incidunt aut ullam veniam ut voluptas, id nostrum voluptatem ad voluptatum enim amet repudiandae natus? Fugiat ad aperiam consectetur laborum eveniet perferendis? Repellendus, in soluta! Incidunt, unde quam.</StyledP>
          </PresentationContent>
        </PresentationWrapper>
        <SeparatorLine className="separator_line" bgColor={color.primary} ></SeparatorLine>
        <Carousel type={CarouselType.TESTIMONY} />
        <CircleImage src={"/assets/images/circle_image1.jpg"} />
      </ContentWrapper>

    </>
  )
}

export default Home

const ContentWrapper = styled.div`  
  display: flex;
  flex-direction: column ;
  align-items: center ;
  /* width: 100rem ; */
  `

export const SeparatorLine = styled.div<ThemePropsType>`
  width: 50% ;
  height: 3px ;
  background-color: ${p => p.bgColor};
  opacity: .5 ;
  margin: 6rem 0 ;
  border-radius: 1.5px ;
  @media (min-width: 768px) {
    width: 30%
  }
`

const PresentationWrapper = styled.div`
  display: flex;
  flex-direction: column ;
  align-items:center ;
  width: 100%  ;
  @media (min-width: 768px){
    flex-direction: row ;
    }
  @media (min-width: 1060px){
    width: 60% ;
    }
  
`

const StyledImage = styled(Image)`
  border-radius: 2rem ;
`
const PresentationContent = styled.div<ThemePropsType>`
  flex:1;
  padding: 0 1rem ;
  margin-left:1rem ;
`


const StyledH2 = styled.h2`
  text-align:center ;
`

const StyledP = styled.p`
  text-align: justify;
`