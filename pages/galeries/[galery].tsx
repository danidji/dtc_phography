import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import { PageContentType } from '../../back-end/models/pages.interface'
import { axiosGetPageContent } from '../../src/repositories/pages.repo'
import { ThemePropsType } from '../../src/interfaces/theme.interfaces';
import { useThemeContext } from '../../src/state/theme.context';
import { CgClose } from "react-icons/cg";
import { receiveMessageOnPort } from 'worker_threads'

interface GaleryProps {
  content: PageContentType | null
}

interface SingleImageProps {
  src: string;
  close: () => void
}

interface GridProps {
  isGaleryCouple: boolean;
}

const SingleImage = ({ src, close }: SingleImageProps): JSX.Element => {
  const { color } = useThemeContext()
  return (
    <>
      <SingleImageOpacity className="single_image_wrapper">
      </SingleImageOpacity>
      <SingleImageStyled className="modal_image">
        <div className="image_wrapper" style={{ position: "relative", height: "100%", width: "100%" }}>
          <SingleImageButton onClick={close} color={color.primary}>
            <CgClose size={35} />
          </SingleImageButton>
          <ImageStyled
            src={src}
            layout="fill"
            objectFit='cover'
            style={{
              borderRadius: ".5rem",
              boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            }}
          />
        </div>
      </SingleImageStyled>
    </>
  )
}

const Galery = ({ content }: GaleryProps): JSX.Element => {
  const { color } = useThemeContext()
  const router = useRouter()
  const [displayImage, setDisplayImage] = useState<string | null>(null)

  console.log({ router })
  console.log({ displayImage })
  const renderImages = (images: string[] | undefined): JSX.Element[] | null => {
    return images ? (images.map((imageSrc: string, i: number): JSX.Element => {

      return (
        <ButtonImage
          key={i}
          className="images_button"
          bgColor={color.primaryOp50}
          onClick={() => setDisplayImage(imageSrc)}
        >

          <div className="image_wrapper" style={{ position: "relative", height: "100%", width: "100%" }}>

            <Image
              src={imageSrc}
              layout="fill"
              objectFit='cover'
            />
          </div>
        </ButtonImage>
      )
    })) : null
  }


  return (
    <GaleryWrapper className="galery_wrapper">

      <h1 className="galery_wrapper">{content?.title} en intérieur ou extérieur</h1>
      <GridWrapper className="grid_wrapper" isGaleryCouple={router.asPath === "/galeries/couples" ? true : false}>
        {renderImages(content?.imagesUrl)}
      </GridWrapper>
      {displayImage && (
        <SingleImage
          src={displayImage}
          close={() => setDisplayImage(null)}
        />
      )}
    </GaleryWrapper>
  )
}

export default Galery

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let pageContent: PageContentType | null = null
  if (typeof params?.galery === "string") {
    pageContent = await axiosGetPageContent(params.galery)
    return {
      props: { content: pageContent ?? null }
    }
  }

  return {
    props: {}
  }

}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [{ params: { galery: "portraits" } }, { params: { galery: "couples" } },],
    fallback: false
  }
}

const GaleryWrapper = styled.div`
  display: flex;
  flex-direction: column ;
  align-items:center ;
  position: relative;
`

const GridWrapper = styled.div<GridProps>`
  display:grid ;
  width: 100% ;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: repeat(${p => p.isGaleryCouple ? 4 : 10}, 10rem) ;
  grid-gap: 1rem ;

  @media (min-width: 370px) {
    grid-template-rows: repeat(${p => p.isGaleryCouple ? 4 : 10}, 17rem) ;
  }
  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr 1fr ;
    grid-template-rows: repeat(${p => p.isGaleryCouple ? 3 : 7}, 22rem) ;
  }
  @media (min-width: 1000px) {
    padding:0 10rem ;
    grid-template-rows: repeat(${p => p.isGaleryCouple ? 3 : 7}, 27rem) ;
  }
`

const ButtonImage = styled.button <ThemePropsType>`
  background-color: transparent;
  border:none ;
  outline:none ;
  cursor: pointer;
  padding:.2rem ;
  border-radius:.2rem ;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`

const SingleImageOpacity = styled.div`
  position:fixed ;
  width: 100vw ;
  height:200vh ;
  top: -25rem;
  opacity: 95%;
  background-color: black;
`
const SingleImageStyled = styled.div`
  position: fixed;
  top: 8rem;
  width: 90% ;
  height: 65%;
  z-index:99 ;

  @media (min-width: 400px) {
    width: 80%;
  }
  @media (min-width: 490px) {
    width: 75%;
  }
  @media (min-width: 570px) {
    width: 70% ;
  }
  @media (min-width: 700px) {
    width: 60% ;
  }
  @media (min-width: 850px) {
    width: 50% ;
  }
  @media (min-width: 1000px) {
    width: 40% ;
  }
  @media (min-width: 1200px) {
    width: 30% ;
    height: 75% ;
  }



`
const ImageStyled = styled(Image)`
  border-radius: .5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

const SingleImageButton = styled.div<ThemePropsType>`
  position: absolute;
  z-index:999 ;
  top: .5rem;
  left:.5rem ;
  color:${p => p.color} ;
`
// const StyledImage = styled.div`
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
// `