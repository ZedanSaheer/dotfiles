import type { GetServerSidePropsContext, NextPage } from "next";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";

type Props = {
    guilds: Guild[];
}

const Menu: NextPage<Props> = ({ guilds }) => {
    
    return <div className="page aligned-center">
        {guilds.map((guild) => {
            console.log(guild);
            return <div key={guild.id}>{guild.name}</div>;
        })}
    </div>;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const {data} =  await fetchMutualGuilds(context);
    console.log(data);
}

export default Menu;
