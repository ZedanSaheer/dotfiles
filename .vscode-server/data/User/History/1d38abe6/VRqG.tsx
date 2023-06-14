import { ReactElement, useContext, useEffect } from "react";
import styles from "./index.module.scss"
import type GetServerSidePropsContext from "next";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import { ShowAvatar } from "../../../components/UI/Avatar/ShowAvatar/ShowAvatar";

type Props = {
    guild: Guild;
}

const DashboardPage: NextPageWithLayout<Props> = ({ guild } : Props) => {
    const { setGuild } = useContext(GuildContext);

    useEffect(() => {
        setGuild(guild);
    }, [])

    return (
        <div className={`page aligned-center ${styles.index}`}>
            <div>
                <div className="image-wrapper">
                    <ShowAvatar />
                </div>
                <div className="info-wrapper">
                    <h1>Name</h1> : <span>{guild.name}</span> 
                    <h1>Permissions</h1> : <span>{guild.permission}</span> 
                    <h1>Features</h1> : <span>{guild.features}</span> 
                    <h1>Owner</h1> : <span>{guild.owner}</span> 
                </div>
            </div>
        </div>

    )
}

DashboardPage.getLayout = function (page: ReactElement) {
    //Sets the layout for this page that includes the sidebar and appbar
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    //SSR for guild data 
    return fetchGuild(context);
}

export default DashboardPage;    