import { FC } from "react";
import { getFirstLetters } from "../../../utils/helpers";
import styles from "./index.module.scss"

type Props = {
    name: string;
}

export const Avatar: FC<Props> = ({ name }) => {
    const firstLetters = getFirstLetters(name);
    return <div className={styles.icon}>

    </div>   
}