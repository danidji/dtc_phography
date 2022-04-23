import React from 'react'
import Image from 'next/image'

import Navbar from './Navbar'

const Header = (): JSX.Element => {


  return (
    <div className="header_wrapper">
      <div className="logo_wrapper">
        <Image
          src="/assets/logo/logo.JPG"
          // layout='fill'
          width="200rem"
          height="200rem"
        />
      </div>
      <Navbar />
    </div>
  )
}

export default Header;