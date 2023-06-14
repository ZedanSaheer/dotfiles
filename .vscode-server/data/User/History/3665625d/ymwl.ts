import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type Guild = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permission: string;
    features: string[];
}

export type NextPageWithLayout = NextPage & {
    //The 
    getLayout?: (page: ReactElement) => ReactNode;
}