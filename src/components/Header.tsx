import React from 'react'
import Image from 'next/image'

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
    </div>
  )
}

export default Header;