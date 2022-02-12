import { Link } from "react-router-dom";

import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.homeTitle}>I am the home</h1>
      <Link>
        <button>Fetch me a random pokemon</button>
      </Link>
    </>
  );
}
