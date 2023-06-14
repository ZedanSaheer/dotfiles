import { MdSpaceDashboard } from "react-icons/md"
import { BsTerminal } from "react-icons/bs"
import { FaWrench } from "react-icons/fa"
import { RiLogoutCircleLine } from "react-icons/ri"
import styles from "./index.module.scss"
import { useRouter } from "next/router"
import { Guild } from "../../utils/types"
import Image from "next/image"
import { Avatar } from "../../components/guilds/GuildMenuItemAvatar/Avatar"
import { FC } from "react"
import { ShowAvatar } from "../../components/UI/ShowAvatar/ShowAvatar"

//Creating an array of object for routes
const routes = [
    {
        name: "dashboard",
        icon: <MdSpaceDashboard size={48} />,
        getPath: (id: string) => `/dashboard/${id}`,
    },
    {
        name: "commnads",
        icon: <BsTerminal size={48} />,
        getPath: (id: string) => `/dashboard/${id}/commands`,
    },
    {
        name: "settings",
        icon: <FaWrench size={48} />,
        getPath: (id: string) => `/dashboard/${id}/settings`,
    },
]

type Props = {
    guild?: Guild;
}

export const Sidebar: FC<Props> = ({ guild }) => {
    const router = useRouter();
    const id = router.query.id;

    const handleLogout = () => {
        
    }

    return <div className={styles.sidebar}>
        <ShowAvatar guild={guild} />
        <div>
            {routes.map((route) => {
                return <div key={route.name} onClick={() => router.push(route.getPath(router.query?.id!.toString()))} className={styles.icons}>
                    {route.icon}
                </div>
            })}
        </div>
        <div onClick={handleLogout}>
            <RiLogoutCircleLine size={48} />
        </div>
    </div>
}