import Image from "next/image";
import { FC } from "react";
import { getFirstLetters } from "../../../utils/helpers";
import { Guild } from "../../../utils/types"
import { ShowAvatar } from "../../UI/ShowAvatar/ShowAvatar";
import { Avatar } from "../GuildMenuItemAvatar/Avatar";
import styles from "./index.module.scss"

type Props = {
    guild: Guild;
};


export const GuildMenuItem: FC<Props> = ({ guild }) => {
    return <div className={styles.container}>
        <ShowAvatar />
        <p>{guild.name}</p>
    </div>
}