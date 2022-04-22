import React, { ReactNode } from 'react'
import Header from './Header'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {

  return (
    <>
      <div className="layout">
        <div>LAYOUT</div>
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout