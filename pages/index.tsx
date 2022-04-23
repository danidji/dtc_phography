import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import { ThemePropsType } from '../src/interfaces'



const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Accueil - DTC photo" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 >
        Hello world!
      </h1>

    </div>
  )
}

export default Home

