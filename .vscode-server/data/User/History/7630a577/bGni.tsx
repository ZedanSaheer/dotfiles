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
                <p>{isValueNullShowPlaceholder(channel.type)}</p>
                <p>{isValueNullShowPlaceholder(channel.name)}</p>
                <p>{isValueNullShowPlaceholder(channel.bitrate)}</p>
                <p>{isValueNullShowPlaceholder(channel.member_count)}</p>
                <p>{isValueNullShowPlaceholder(channel.rate_limit_per_user)}</p>
                <p>{isValueNullShowPlaceholder(channel.position)}</p>
            </div>
        </div>
    )
}

export default ChannelItem