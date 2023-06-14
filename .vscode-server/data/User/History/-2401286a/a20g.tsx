import { FC } from "react";
import { getFirstLetters } from "../../../utils/helpers";
import styles from "./index.module.scss"

type Props = {
    name: string;
}

//This is a custom avatar component using a helper function to map first letters of the names of the guilds to the icon section

export const Avatar: FC<Props> = ({ name }) => {
    //
    const firstLetters = getFirstLetters(name);
    return <div className={styles.icon}>
        {firstLetters.map((letter)=>{

        })}
    </div>   
}