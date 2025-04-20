import styles from "./page.module.css";
import { Graphic } from "./components/index";

export default function Home() {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <Graphic />
        </div>
        <div className={styles.banner}>
          <h1>hi im huxley</h1>
          <h2>A full-stack engineer</h2>
        </div>
      </section>
    </>
  );
}

/**
 *  expereinced with TS, Node, GQL, React, JS, AWS
            and leading team processes
 */
