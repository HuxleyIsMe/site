"use client";
import styles from "./page.module.css";
import { Canvas } from "./canvas";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.flex}>
          <section>
            <div className={styles.container}>
              <Canvas isPlaying={true} />
            </div>
            <h2 className={styles.banner}>hi im huxley</h2>
            <h2 className={`${styles.banner} ${styles.tagline}`}>
              I make web things
            </h2>
            <section className={styles.sides}></section>
          </section>
        </div>
      </main>
    </div>
  );
}
