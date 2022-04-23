import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import HambergerMenu from './HambergerMenu'

import useWindowDimensions from '../hooks/use-window-dimension'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const { width } = useWindowDimensions()

  return (
    <LayoutWrapper className="layout_wrapper">
      <Header />
      {(width && width < 768) && <HambergerMenu />}
      {children}
      <Footer />
    </LayoutWrapper>
  )
}

export default Layout

const LayoutWrapper = styled.div`
  position: relative;
`