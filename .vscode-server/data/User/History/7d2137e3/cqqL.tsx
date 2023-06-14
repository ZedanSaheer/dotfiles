import '../utils/styles/globals.scss'
import { AppPropsWithLayout } from '../utils/types'


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? 
  return <Component {...pageProps} />
}

export default MyApp
