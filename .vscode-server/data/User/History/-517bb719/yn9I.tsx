import type { NextPage } from "next";
import { FaDiscord } from "react-icons/fa"
import styles from "../utils/styles/Home.module.scss"

const Home: NextPage = () => {
  return <div className="page aligned-center">
    <div>

      <button className={styles.button}>
        <FaDiscord size={30} />
        <span>Login with discord</span></button>
    </div>
  </div>;
};

export default Home;
