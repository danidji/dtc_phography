import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Toaster } from 'react-hot-toast'

import Header from './Header'
import Footer from './Footer'
import HambergerMenu from './HambergerMenu'

import useDetectMobileWindow from '../hooks/use-detect-mobile-window'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const { isMobile } = useDetectMobileWindow()

  return (
    <LayoutWrapper className="layout_wrapper">
      <Header />
      {isMobile && <HambergerMenu />}

      {children}
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  position: relative;
  margin: 0 3rem ;
`