import React from 'react'

import Navbar from './Navbar'

const HambergerMenu = (): JSX.Element => {
  return (
    <div>
      <div className="button_menu">
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>
      <div className="drawer_menu">
        <Navbar />
      </div>
    </div>
  )
}

export default HambergerMenu