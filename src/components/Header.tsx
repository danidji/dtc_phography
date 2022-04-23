import React, { useEffect } from 'react'
import Image from 'next/image'

import Navbar from './Navbar'
import useWindowDimensions from '../hooks/use-window-dimension'

const Header = (): JSX.Element => {
  const { width } = useWindowDimensions();


  return (
    <div className="header_wrapper">
      {(width && width > 768) && (
        <>
          <div className="logo_wrapper">
            <Image
              src="/assets/logo/logo.JPG"
              // layout='fill'
              width="200rem"
              height="200rem"
            />
          </div>
          < Navbar />
        </>
      )}
      <div>HEADER</div>
    </div>
  )
}

export default Header;