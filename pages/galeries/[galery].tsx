import React, { FC } from 'react'
import { useRouter } from 'next/router'

const Galery: FC = (): JSX.Element => {
  const router = useRouter()
  console.log({ router })


  return (
    <div className="galery_wrapper">TEST</div>
  )
}

export default Galery