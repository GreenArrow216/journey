import React from "react";
import styles from "./skills.module.scss";

type ComicSkillsProps = {
  skills: string[];
};

const ComicSkills: React.FC<ComicSkillsProps> = ({ skills }) => {
  return (
    <div className={styles.skillGrid}>
      {skills.map((skill, i) => (
        <div
          key={i}
          className={`${styles.skillNote} ${styles[`note${i % 5}`]}`}
        >
          {skill}
        </div>
      ))}
    </div>
  );
};

export default ComicSkills;
