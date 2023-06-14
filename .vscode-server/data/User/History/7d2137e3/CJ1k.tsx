import '../utils/styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextPageWithLayout } from '../utils/types'


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
