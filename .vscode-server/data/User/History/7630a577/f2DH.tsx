import React, { FC } from 'react'
import { Channel } from '../../../utils/types'
import styles from './index.module.scss'

type Props = {
    channel : Channel;
}

const ChannelItem: FC<Props> = ({channel}) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h1>{GuildContext.}</h1>
            </div>
        </div>
    )
}

export default ChannelItem