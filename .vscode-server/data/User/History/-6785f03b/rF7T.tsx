import { ReactElement } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";

type Props = {
    guild: Guild;
}

const SettingsPage: NextPageWithLayout = () => {
    return (
        <div className="page">Settings Page</div>
    )
}

SettingsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export default SettingsPage;    