import { FC } from "react";
import { Guild } from "../../utils/types"
import styles from "./index.module.scss"

type Props = {
    guild: Guild;
};

export const GuildMenuItem: FC<Props> = ({ guild }) => {

    return <div className={styles.container}>
        <p>{guild.name}</p>
    </div>
}