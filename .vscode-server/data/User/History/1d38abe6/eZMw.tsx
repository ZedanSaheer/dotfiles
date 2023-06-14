import { ReactElement, useContext, useEffect } from "react";
import Image from "next/image"
import styles from "./index.module.scss"
import type GetServerSidePropsContext from "next";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchGuild } from "../../../utils/api";
import { GuildContext } from "../../../utils/contexts/GuildContext";
import { Avatar } from "../../../components/guilds/GuildMenuItemAvatar/Avatar";
import { ShowAvatar } from "../../../components/UI/ShowAvatar/ShowAvatar";

type Props = {
    guild: Guild;
}

const DashboardPage: NextPageWithLayout<Props> = ({ guild }) => {
    const { setGuild } = useContext(GuildContext);

    useEffect(() => {
        setGuild(guild);
    }, [])


    return (
        <div className={`page aligned-center ${styles.index}`}>
            <div>
                <div className="image-wrapper">
                    <ShowAvatar/>
                </div>
                <div className="info-wrapper">
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