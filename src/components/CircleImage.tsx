import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import useDetectMobileWindow from '../hooks/use-detect-mobile-window'

const CircleImage = ({ src }: { src: string }): JSX.Element => {
  const { isMobile } = useDetectMobileWindow()

  return (
    <div className="circle_image_wrapper">
      <StyledImage
        src={src}
        width={isMobile ? 400 : 600}
        height={isMobile ? 400 : 600}
      />
    </div>
  )
}

export default CircleImage

const StyledImage = styled(Image)`
  border-radius: 300px ;
`