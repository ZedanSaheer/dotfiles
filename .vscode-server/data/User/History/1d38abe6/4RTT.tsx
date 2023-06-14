import { ReactElement, useContext, useEffect } from "react";
import Image from "next/image"
import styles from "./index.module.scss"
import type GetServerSidePropsContext from "next";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import { Avatar } from "../../../components/guilds/GuildMenuItemAvatar/Avatar";

type Props = {
    guild: Guild;
}

const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);

    useEffect(() => {
        setGuild(guild);
    }, [])


    return (
        <div className="page">
            <h1>Information</h1>
            <div>
                <div className="image">
                    {guild && guild.icon ?
                        <Image height={55} width={55} className={styles.image} src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`} alt={guild.name} />
                        :
                        //Sets the custom avatar component if the guild icon is null or falsy value
                        <Avatar name={"A B C"} sidebar />
                    }
                </div>
                <div className="info">
                </div>
            </div>
        </div>

    )
}

DashboardPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchGuild(context);
}

export default DashboardPage;    