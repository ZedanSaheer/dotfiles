import { ReactElement } from "react";
import { DashboardLayout } from "../../../layout/dashboard/Dashboard";
import { Guild, NextPageWithLayout } from "../../../utils/types";

type Props = {
    guild: Guild;
}

const CommandsPage: NextPageWithLayout = () => {
    return (
        <div className="page">Commands Page</div>
    )
}

CommandsPage.getLayout = function (page: ReactElement) {
    return <DashboardLayout>{page}</DashboardLayout>;
}

export default CommandsPage;    