import { ReactElement, useContext, useEffect } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import type GetServerSidePropsContext from "next";
import { Channel, Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchChannels, fetchGuild } from "../../../utils/api";
import { ChannelContext } from "../../../utils/contexts/ChannelContext";

type Props = {
    channel: Channel[];
}

const ChannelPage: NextPageWithLayout<Props> = ({ channel } : Props) => {
    const { setChannels } = useContext(ChannelContext);

    useEffect(()=>{setChannels(channel)},[]);

    return (
        <div className="page">
            <h1>Channels Page</h1>
            {channel.map(()=>Chane)}
        </div>
    )
}

ChannelPage.getLayout = function (page: ReactElement) {
      //Sets the layout for this page that includes the sidebar and appbar
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    //SSR for channel data based on guild (id)
    return fetchChannels(context);
}

export default ChannelPage;    