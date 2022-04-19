import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../src/state/theme.context'

import GlobalTheme from '../src/components/GlobalTheme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <GlobalTheme>
        <Component {...pageProps} />
      </GlobalTheme>
    </ThemeContextProvider>)
}

export default MyApp

