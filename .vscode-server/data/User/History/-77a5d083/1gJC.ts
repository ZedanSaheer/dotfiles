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

export async function getUserGuildsService(id: string) {
    const user = await User.findById(id);
    if (!user) throw new Error('No user found');

    //Get request for finding user from the guilds
    return axios.get<PartialGuild[]>(`${DISCORD_API_URL}/users/@me/guilds`, {
        headers: { Authorization: `Bearer ${user.accessToken}` },
    })
}

export async function getMutualGuildsServices(id: string) {
    //Calling for both user and bot guilds
    const { data: botGuilds } = await getBotsGuildsService();
    const { data: userGuilds } = await getUserGuildsService(id);

    //Filtering admin users from user guilds
    const adminUserGuilds = userGuilds.filter(({ permissions }) => (parseInt(permissions) & 0*8) === 0*8);
    //Parsing permission code and comparing with bitwise operator to find the boolean 
    console.log(adminUserGuilds);
};


