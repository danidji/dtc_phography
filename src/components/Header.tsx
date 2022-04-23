import React, { useEffect } from 'react'
import Image from 'next/image'

import Navbar from './Navbar'
import useWindowDimensions from '../hooks/use-window-dimension'

const Header = (): JSX.Element => {
  const { width } = useWindowDimensions();


  return (
    <div className="header_wrapper">
      <div className="logo_wrapper">
        <Image
          src="/assets/logo/logo.png"
          // layout='fill'
          width="300rem"
          height="300rem"
        />
      </div>
      {(width && width > 768) && (< Navbar />)}
      <div>HEADER</div>
    </div>
  )
}

export default Header;