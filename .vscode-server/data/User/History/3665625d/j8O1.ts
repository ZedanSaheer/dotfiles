import NextPage from "next";
import AppProps from "next/app";
import { ReactElement, ReactNode } from "react";

export type Guild = {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
    permission: string;
    features: string[];
}

export type Channel = {
    id:string;
    type:number;
    name:string;
    position:number;
    flags:number;
    parent_id:string;
    topic:string;
    user_limit:number;
    rate_limit_per_user:number;
    nsfw:boolean;
    rtc_region:string
}

export type NextPageWithLayout<T> = NextPage<T> & {
    //The next page type with an optional get layout function that returns a page
    getLayout?: (page: ReactElement) => ReactNode;
}

export type AppPropsWithLayout<T> = AppProps & {
    Component: NextPageWithLayout<T>;
}
