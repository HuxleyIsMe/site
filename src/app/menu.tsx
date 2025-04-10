"use client";

import React from "react";
import Link from "next/link";
import styles from "./menu.module.css";

export const Menu = () => {
  return (
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
  );
};
