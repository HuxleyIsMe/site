import React from "react";
import styles from "./logo-board.module.css";

export const LogoBoard: React.FC = () => {
  const skills = [
    "node",
    "react",
    "typeScript",
    "aws",
    "redux",
    "css3",
    "html5",
    "docker",
    "webpack",
    "gql",
    "gitHub",
    "react-query",
    "react-testing",
    "nx",
    "jest",
    "axe",
  ];
  return (
    <div className={styles["logo-board-wrapper"]}>
      {skills.map((skill, index) => (
        <div
          className={styles.tile}
          tabIndex={index + 1}
          key={`${skill}-tile`}
          style={{ backgroundImage: `url('/images/${skill}.png')` }}
          aria-label={`I am skilled with ${skill}, hover to find out more`}
        ></div>
      ))}
    </div>
  );
};
