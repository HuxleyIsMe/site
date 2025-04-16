import styles from "./page.module.css";
import Parser from "rss-parser";
import { Suspense } from "react";
import { Article } from "./component/article";
import { SideBar } from "./component/sidebar";
import type { MediumArticle } from "./types";

export default async function Blog() {
  const rssParser = new Parser();

  const feed = (await rssParser.parseURL(
    "https://medium.com/feed/@huxley.millard"
  )) as { items: MediumArticle[] };

  const defaultArticle = feed.items[0]; // latest article will go in place

  return (
    <>
      <div className={styles.container}>
        <h1>BLOG</h1>
        <div className={styles.BlogContainer}>
          <Suspense>
            <SideBar items={feed.items} />
            <div>
              <Article items={feed.items} defaultArticle={defaultArticle} />
            </div>
          </Suspense>
        </div>
      </div>
    </>
  );
}
