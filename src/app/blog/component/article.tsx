import parse from "html-react-parser";

export const Article = ({ item }) => {
  return <div>{parse(item["content:encoded"])}</div>;
};
