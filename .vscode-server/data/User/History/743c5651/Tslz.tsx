import React, { FC } from 'react'
import { Guild } from '../../utils/types'

type Props = {
    guild : Guild
}

export const ShowAvatar : FC<Props> = ({guild}) => {
    if(guild && guild.icon)
}
