import '../utils/styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout, NextPageWithLayout } from '../utils/types'


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default MyApp
