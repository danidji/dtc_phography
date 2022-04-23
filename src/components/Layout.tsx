import React, { FC, ReactNode } from 'react'

import Header from './Header'
import Footer from './Footer'
import HambergerMenu from './HambergerMenu'

import useWindowDimensions from '../hooks/use-window-dimension'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {
  const { width } = useWindowDimensions()

  return (
    <div className="layout">
      <Header />
      {(width && width < 768) && <HambergerMenu />}
      {children}
      <Footer />
    </div>
  )
}

export default Layout