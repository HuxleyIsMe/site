import styles from "./page.module.css";
import { Canvas } from "./components/index";

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.container}>
          <Canvas />
        </div>
        <div className={styles.banner}>
          <h1>hi im huxley</h1>
          <h2 className={`${styles.tagline}`}>I make web things</h2>
        </div>
      </section>
    </>
  );
}
