import type { GetServerSidePropsContext, NextPage } from "next";
import { fetchMutualGuilds } from "../../utils/api";
import { Guild } from "../../utils/types";
import styles from "./index.module.scss"

type Props = {
    guilds: Guild[];
}

const Menu: NextPage<Props> = ({ guilds }) => {

    return <div className="page aligned-center">
        <div className={styles.container}>
            <h1 className={styles.title}>Please select a guild</h1>
            {guilds.map((guild) => {
                console.log(guild);
                return <div key={guild.id}>{guild.name}</div>;
            })}
        </div>
    </div>;
};

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    return await fetchMutualGuilds(context);
}

export default Menu;
