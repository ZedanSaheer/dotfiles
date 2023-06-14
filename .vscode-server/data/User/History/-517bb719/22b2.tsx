import type { NextPage } from "next";
import { FaDiscord } from "react-icons/fa"
import styles from "../utils/styles/Home.module.scss"

const Home: NextPage = () => {
  return <div className="page aligned-center">
    <div>
      <FaDiscord size={30}/>
      <button className={styles.button}>Login with discord</button>
    </div>
  </div>;
};

export default Home;
