import { ReactElement } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import type GetServerSidePropsContext from "next";
import { Guild, NextPageWithLayout } from "../../../utils/types";
import { fetchGuild } from "../../../utils/api";

type Props = {
    channel:Chan
}

const ChannelPage: NextPageWithLayout<Props> = ({guild}) => {
    return (
        <div className="page">Channels Page</div>
    )
}

ChannelPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    return fetchGuild(context);
}

export default ChannelPage;    