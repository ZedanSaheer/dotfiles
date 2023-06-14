import Image from 'next/image'
import styles from './index.module.scss'
import React, { FC } from 'react'
import { Guild } from '../../utils/types'

type Props = {
    guild: Guild
}

export const ShowAvatar: FC<Props> = ({ guild }) => {

    if (guild && guild.icon) {
        return <Image
            height={55}
            width={55}
            className={styles.image}
            src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
            alt={guild.name}
        />
    }
    //Sets the custom avatar component if the guild icon is null or falsy value
    return <Avatar name={"A B C"} sidebar />

}
