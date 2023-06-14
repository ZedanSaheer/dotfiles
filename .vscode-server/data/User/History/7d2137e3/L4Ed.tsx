import '../utils/styles/globals.scss'
import { AppPropsWithLayout } from '../utils/types'


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page)=>page);
  return <Component {...pageProps} />
}

export default MyApp
