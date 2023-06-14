import { createContext } from "react";
import { Guild } from "../types";

type GuildContextType = {
    guild?:Guild;
    setGuild:()
}

export const GuildContext = createContext({});