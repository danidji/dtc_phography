import React, { useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import styled from 'styled-components'
import { PageContentType } from '../../back-end/models/pages.interface'
import { axiosGetPageContent } from '../../src/repositories/pages.repo'
import { ThemePropsType } from '../../src/interfaces/theme.interfaces';
import { useThemeContext } from '../../src/state/theme.context';
import { CgClose } from "react-icons/cg";

interface GaleryProps {
  content: PageContentType | null
}

interface SingleImageProps {
  src: string;
  close: () => void
}

const SingleImage = ({ src, close }: SingleImageProps): JSX.Element => {
  return (
    <div className="modal_image_wrapper">
      <button onClick={close}>
        <CgClose />
      </button>
      <div className="image_wrapper" style={{ position: "relative", height: "100%", width: "100%" }}>
        <Image
          src={src}
          layout="fill"
          objectFit='cover'
        />
      </div>
    </div>
  )
}

const Galery = ({ content }: GaleryProps): JSX.Element => {
  const { color } = useThemeContext()
  const [displayImage, setDisplayImage] = useState<string | null>(null)

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
      <GridWrapper className="grid_wrapper">
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
`

const GridWrapper = styled.div`
  display:grid ;
  width: 100% ;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: repeat(10, 10rem) ;
  grid-gap: 1rem ;
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

// const StyledImage = styled.div`
//   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
// `