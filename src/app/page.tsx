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
          <h1>hi im huxley, a full-stack engineer</h1>
          <h2 className={`${styles.tagline}`}>
            experienced with TS, Node, GQL REACT, JS, AWS and leading team
            processes
          </h2>
        </div>
      </section>
    </>
  );
}
