import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import { ThemePropsType } from '../src/interfaces'



const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Accueil - Lunysse photographe</title>
        <meta name="description" content="Accueil - Lunysse photographe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <h1 >
        HOME
      </h1>

    </div>
  )
}

export default Home

