import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

import Layout from "../src/components/Layout"
import { ThemeContextProvider } from '../src/state/theme.context'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>)
}

export default MyApp

