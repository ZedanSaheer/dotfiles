import styles from "./index.module.scss";
import { RiMenu3Line } from "react-icons/ri"
import { useRouter } from "next/router";

export const Appbar = () => {
const router = useRouter();

return <div className={styles.appbar}>
        <div className={styles.menu}>
            <RiMenu3Line size={65} />
            <p>Menu</p>
        </div>
        <div>
            <p>Discord Guild</p>
        </div>
    </div>
}