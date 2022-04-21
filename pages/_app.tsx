import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from "../src/components/Layout"
import { ThemeContextProvider } from '../src/state/theme.context'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>)
}

export default MyApp

