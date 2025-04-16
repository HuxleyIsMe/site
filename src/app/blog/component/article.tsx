"use client";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import styles from "./article.module.css";
import parse from "html-react-parser";

export const Article = memo(({ items }) => {
  const searchParams = useSearchParams();
  const blogUUID = searchParams.get("blog");

  let item = items.find((blog) => blog.guid === blogUUID) || items[0];

  return (
    <div className={styles.article}>
      <h2>{item.title}</h2>
      <div>{parse(item["content:encoded"])}</div>
    </div>
  );
});
