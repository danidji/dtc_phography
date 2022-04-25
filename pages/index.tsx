import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import Carousel from '../src/components/Carousel'
import { ThemePropsType } from '../src/interfaces'



const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Accueil - Lunysse photographe</title>
        <meta name="description" content="Accueil - Lunysse photographe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="content_wrapper">
        <Carousel />
      </div>



    </>
  )
}

export default Home

