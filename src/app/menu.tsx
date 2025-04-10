"use client";

import React from "react";
import { createPortal } from "react-dom";
import { useWindowSize } from "./useWindowSize.ts";
import Link from "next/link";
import styles from "./menu.module.css";

export const Menu = () => {
  const [toggleMenu, setToggleMenu] = React.useState(true);

  const { width } = useWindowSize();

  const menuComponentToUse = React.useMemo(() => {
    if (width < 600) {
      return createPortal(
        <div className={styles.wrapper}>
          <button
            className={styles.menuButton}
            role="button"
            onClick={() => setToggleMenu((prev) => !prev)}
          >
            Menu
          </button>

          {toggleMenu && (
            <ul className={styles.menu}>
              <li>
                <Link href="/">From: huxley millard</Link>
              </li>
              <li>
                <Link href="/work">work</Link>
              </li>

              <li>
                <Link href="/currently">currently</Link>
              </li>

              <li>
                <Link href="/about">about</Link>
              </li>
            </ul>
          )}
        </div>,
        document?.body
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <ul className={styles.menu}>
            <li>
              <Link href="/">From: huxley millard</Link>
            </li>
            <li>
              <Link href="/work">work</Link>
            </li>

            <li>
              <Link href="/currently">currently</Link>
            </li>

            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </div>
      );
    }
  }, [width]);

  return <>{menuComponentToUse}</>;
};
