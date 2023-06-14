import axios from "axios";
import { User } from "../../database/schemas";
import { DISCORD_API_URL } from "../../utils/consts";
import { PartialGuild } from "../../utils/types";

export async function getBotsGuildsService() {
    const token = process.env.DISCORD_BOT_TOKEN;

    //Get request for getting all guilds based on bot token auth
    return axios.get<PartialGuild[]>(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: { Authorization: `Bot ${token}` },
    })
}

export async function getUserGuildsServices(id:string) {
    const user = await User.findById(id);
    if(!user) throw new Error('No user found');

    //Get request for finding user from the guilds
    return axios.get<PartialGuild[]>(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: { Authorization: `Bearer ${user.accessToken}` },
    })
}

export async function getMutualGuildsServices(id:string){
    const {data:userGuilds} = await getUserGuildsServices(id);
    const {data:botGuilds} = await getBotGuildsServices();
}