import { NextPage } from "next";
import { ReactElement } from "react";

export type Guild = {
    id:string;
    name:string;
    icon:string;
    owner:boolean;
    permission:string;
    features:string[];
}

export type NextPageWithLayout = NextPage & {
    getLayout?:(page:ReactElement)
}