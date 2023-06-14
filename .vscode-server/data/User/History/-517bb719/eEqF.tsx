import type { NextPage } from "next";
import styles from "../utils/styles/home.module.scss"

const Home: NextPage = () => {
  return <div className="page aligned-center">
    <div>
      <button className={styles.button}>Login</button>
    </div>
  </div>;
};

export default Home;
