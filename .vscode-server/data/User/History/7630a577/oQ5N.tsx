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
                <h1>{channel.type}</h1>
                <h1>{channel.name}</h1>
                <h1>{channel.bitrate}</h1>
                <h1>{channel.member_count}</h1>
                <h1>{channel.rate_limit_per_user}</h1>
                <h1>{channel.position}</h1>
            </div>
        </div>
    )
}

export default ChannelItem