import { ReactElement, useContext } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import type GetServerSidePropsContext from "next";
import { Channel, Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchChannels, fetchGuild } from "../../../utils/api";
import { ChannelContext } from "../../../utils/contexts/ChannelContext";

type Props = {
    channel: Channel;
}

const ChannelPage: NextPageWithLayout<Props> = ({ channel }) => {
    const { setChannel } = useContext(ChannelContext);

    return (
        <div className="page">Channels Page</div>
    )
}

ChannelPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchChannels(context);
}

export default ChannelPage;    