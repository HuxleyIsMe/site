"use client";
import { useState, useEffect, useRef } from "react";

import styles from "./page.module.css";
import { Canvas } from "./canvas";

export default function Home() {
  const [currentRotation, setCurrentRotation] = useState(200);

  console.log({ currentRotation });

  const currentMouse = useRef({ x: 0, y: 0 });
  const startMouse = useRef({ x: 0, y: 0 });

  const onMove = (e) => {
    currentMouse.current = { x: e.clientX, y: e.clientY };
  };

  useEffect(() => {
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const plotStart = () => {
    startMouse.current = currentMouse.current;
    console.log("start", startMouse.current);
  };

  const rotateComp = () => {
    let endMouseCoords = currentMouse.current;
    console.log("end", endMouseCoords);

    let start = Math.atan2(startMouse.current.y, startMouse.current.x);

    let end = Math.atan2(endMouseCoords.y, endMouseCoords.y);

    let difference = end - start;

    console.log(difference);
    setCurrentRotation((prev) => prev - 50);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.wrapper}>
          <div
            className={styles.container}
            style={{ rotate: currentRotation + "deg" }}
            onMouseDown={plotStart}
            onMouseUp={rotateComp}
          >
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
