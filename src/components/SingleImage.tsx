import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { CgClose } from "react-icons/cg"

import { ThemePropsType } from '../interfaces'
import { useThemeContext } from '../state/theme.context'

interface SingleImageProps {
  src: string;
  close: () => void
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

export default SingleImage


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