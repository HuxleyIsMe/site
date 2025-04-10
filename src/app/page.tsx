"use client";
import styles from "./page.module.css";
import { Canvas } from "./canvas";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.wrapper}>
          <div className={styles.container}>
            <Canvas isPlaying={true} />
          </div>
          <div className={styles.banner}>
            <h2>hi im huxley</h2>
            <h3 className={`${styles.tagline}`}>I make web things</h3>
          </div>
        </section>
      </main>
    </div>
  );
}
