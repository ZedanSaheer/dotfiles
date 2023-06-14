import React, { FC } from 'react'
import { isValueNullShowPlaceholder } from '../../../utils/helpers';
import { Channel } from '../../../utils/types'
import styles from './index.module.scss'

type Props = {
    channel : Channel;
}

const ChannelItem: FC<Props> = ({channel}) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h1>{isValueNullShowPlaceholder(channel.type)}</h1>
                <h1>{isValueNullShowPlaceholder(channel.name)}</h1>
                <h1>{isValueNullShowPlaceholder(channel.bitrate)}</h1>
                <h1>{isValueNullShowPlaceholder(channel.member_count)}</h1>
                <h1>{isValueNullShowPlaceholder(channel.rate_limit_per_user)}</h1>
                <h1>{isValueNullShowPlaceholder(channel.position)}</h1>
            </div>
        </div>
    )
}

export default ChannelItem