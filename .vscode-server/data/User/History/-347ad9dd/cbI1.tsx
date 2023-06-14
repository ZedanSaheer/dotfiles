import type { GetServerSidePropsContext, NextPage } from "next";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";

type Props = {
    guilds: Guild[];
}

const Menu: NextPage<Props> = ({ guilds }) => {
    
    return <div className="page aligned-center">
    </div>;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const result =  await fetchMutualGuilds(context);
}

export default Menu;
