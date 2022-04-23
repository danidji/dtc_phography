import React, { FC, ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {

  return (
    <>
      <div className="layout">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout