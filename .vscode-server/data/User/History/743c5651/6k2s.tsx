import React, { FC } from 'react'

type Props = {
    guild : Guild
}

export const ShowAvatar : FC<Props> = (props) => {



  return (
    <Image height={55} width={55} className={styles.image} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
    :
    //Sets the custom avatar component if the guild icon is null or falsy value
    <Avatar name={"A B C"} sidebar />
  )
}
