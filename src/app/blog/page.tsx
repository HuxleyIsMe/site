import styles from "./page.module.css";
import Parser from "rss-parser";
import { Article } from "./component/article";
import { SideBar } from "./component/sidebar";

export default async function Blog() {
  const rssParser = new Parser();

  const feed = await rssParser.parseURL(
    "https://medium.com/feed/@huxley.millard"
  );

  console.log(feed.items);
  return (
    <>
      <div className={styles.container}>
        <h1>BLOG</h1>
        <div className={styles.BlogContainer}>
          <SideBar items={feed.items} />
          <div>
            <Article items={feed.items} />
          </div>
        </div>
      </div>
    </>
  );
}
