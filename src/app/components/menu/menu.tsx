"use client";

import React from "react";
import { createPortal } from "react-dom";
import { useWindowSize } from "./useWindowSize";
import Link from "next/link";
import styles from "./menu.module.css";

export const Menu = React.memo(() => {
  const [mobileTarget, setMobileTarget] = React.useState<HTMLElement | null>(
    null
  );

  const [toggleMenu, setToggleMenu] = React.useState(true);

  const { width } = useWindowSize();

  React.useEffect(() => {
    setMobileTarget(document.getElementById("mobileMenu"));
  }, []);

  const menuComponentToUse = React.useMemo(() => {
    if (width < 600 && mobileTarget) {
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
                <Link href="/blog">blog</Link>
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
        mobileTarget
      );
    } else {
      return (
        <div className={styles.wrapper}>
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

            <li>
              <Link href="/about">about</Link>
            </li>
          </ul>
        </div>
      );
    }
  }, [width, toggleMenu, mobileTarget]);

  return <>{menuComponentToUse}</>;
});

Menu.displayName = "Menu";
