import styles from "./article.module.css";
import parse from "html-react-parser";

export const Article = ({ item }) => {
  return (
    <div className={styles.article}>
      <h2>{item.title}</h2>
      <div>{parse(item["content:encoded"])}</div>
    </div>
  );
};
