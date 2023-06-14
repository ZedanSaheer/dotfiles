import Image from "next/image";
import { FC } from "react";
import { Guild } from "../../utils/types"
import styles from "./index.module.scss"

type Props = {
    guild: Guild;
};

export const GuildMenuItem: FC<Props> = ({ guild }) => {

    return <div className={styles.container}>
        <Image height={55} width={55} className={styles.image} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name}/>
        <p>{guild.name}</p>
    </div>
}