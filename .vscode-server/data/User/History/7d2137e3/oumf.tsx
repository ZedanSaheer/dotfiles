import '../utils/styles/globals.scss'
import { AppPropsWithLayout } from '../utils/types'


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default MyApp
