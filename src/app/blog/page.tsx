import Parser from "rss-parser";
import styles from "./page.module.css";
import { Article } from "./component/article";

export default async function Blog() {
  const rssParser = new Parser();

  const feed = await rssParser.parseURL(
    "https://medium.com/feed/@huxley.millard"
  );

  return (
    <>
      <div className={styles.container}>
        <h1>BLOG</h1>
        <div className={styles.BlogContainer}>
          <ul>
            {feed.items.map((item, index) => {
              return <li>{item.title}</li>;
            })}
          </ul>
          <div>
            {feed.items.map((item, index) => {
              return <Article key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
