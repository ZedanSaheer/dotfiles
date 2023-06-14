import { createContext } from "react";
import { Guild } from "../types";

type GuildContextType = {
    guild?: Guild;
    setGuild: (guild: Guild) => void;
}

//This 

export const GuildContext = createContext<GuildContextType>({
    setGuild: () => { }
});