"use client";

import React from "react";
import { useWindowSize } from "./useWindowSize";
import Link from "next/link";
import styles from "./menu.module.css";

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(true);

  const { width } = useWindowSize();

  return (
    <>
      <div className={styles.wrapper}>
        {width < 600 && (
          <button
            className={styles.menuButton}
            role="button"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            Menu
          </button>
        )}

        {toggleMenu && (
          <ul className={styles.menu}>
            <li>
              <Link href="/">From: huxley millard</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>

            <li>
              <Link href="/currently">currently</Link>
            </li>

            {/* <li>
              <Link href="/about">about</Link>
            </li> */}
          </ul>
        )}
      </div>
    </>
  );
};
