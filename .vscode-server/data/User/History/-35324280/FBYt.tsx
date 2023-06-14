import styles from "./index.module.scss";
import { RiMenu3Line } from "react-icons/ri"

export const Appbar = () => (
    <div className={styles.appbar}>
        <div>
            <RiMenu3Line size={65}/>
            <p>Menu</p>
        </div>
    </div>
)