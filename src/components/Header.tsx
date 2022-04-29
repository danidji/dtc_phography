import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

import Navbar from './Navbar'
import useWindowDimensions from '../hooks/use-window-dimension'
import useDetectMobileWindow from '../hooks/use-detect-mobile-window'
const Header = (): JSX.Element => {
  const { width } = useWindowDimensions();
  const { isMobile } = useDetectMobileWindow()

  return (
    <HeaderWrapper className="header_wrapper">
      <LogoWrapper className="logo_wrapper">
        <Link href="/">
          <a>
            <Image
              src="/assets/images/logo/logo.png"
              // width={"200rem"}
              // height={"200rem"}
              width={isMobile ? "200rem" : "250rem"}
              height={isMobile ? "200rem" : "250rem"}
            />
          </a>
        </Link>
      </LogoWrapper>
      {!isMobile && (< Navbar />)}
    </HeaderWrapper>
  )
}

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between ;
  align-items: center ;
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center ;
  flex: 1
`
