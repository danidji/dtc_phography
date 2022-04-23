import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Navbar from './Navbar'
import useWindowDimensions from '../hooks/use-window-dimension'

const Header = (): JSX.Element => {
  const { width } = useWindowDimensions();


  return (
    <HeaderWrapper className="header_wrapper">
      <LogoWrapper className="logo_wrapper">
        <Link href="/">
          <Image
            src="/assets/logo/logo.png"
            width="300rem"
            height="300rem"
          />
        </Link>
      </LogoWrapper>
      {(width && width > 768) && (< Navbar />)}
    </HeaderWrapper>
  )
}

export default Header;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center ;
`

const HeaderWrapper = styled.div`
  position: relative;
`