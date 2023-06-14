import { createContext } from "react";
import { Guild } from "../types";

type ChannelContextType = {
    guild?: Guild;
    setChannel: (guild: Guild) => void;
}

//This is the context that stores the guilds fetched from the api , It has two methods one to store the guild and other to view the guild

export const GuildContext = createContext<ChannelContextType>({
    setChannel: () => { }
});