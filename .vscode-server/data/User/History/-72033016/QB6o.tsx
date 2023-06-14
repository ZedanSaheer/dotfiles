import { ReactElement } from "react";
import { Sidebar } from "../sidebar/Sidebar";

export const DashboardLayout = ({children}:{children:ReactElement}) => {

    return (
        <>
            {Sidebar}
            <>{children}</>
        </>
    )
}

