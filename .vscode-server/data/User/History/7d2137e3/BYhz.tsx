import { FC, useState } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';
import '../utils/styles/globals.scss'
import { AppPropsWithLayout } from '../utils/types'


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [guilds , setGuild ] =  useState<Guild>() 

  //Checks if the page is nullish , returns page if true
  const getLayout = Component.getLayout ?? ((page: FC) => page);

  //We wrap the getLayout method with the Guild Context
  return <GuildContext.Provider value=({guild,setGuild})>
    getLayout(<Component {...pageProps} />)
  </GuildContext.Provider>;
}

export default MyApp
