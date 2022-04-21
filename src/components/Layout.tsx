import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }): JSX.Element => {

  return (
    <>
      <div className="layout">
        <div>LAYOUT</div>
        {children}
      </div>
    </>
  )
}

export default Layout