import React from "react";
import styles from "./achievements.module.scss";

type ComicAchievementsProps = {
  achievements: string[];
};

const ComicAchievements: React.FC<ComicAchievementsProps> = ({
  achievements,
}) => {
  return (
      <ul className={styles.comicList}>
        {achievements.map((ach, i) => (
          <li key={i}>{ach}</li>
        ))}
      </ul>
  );
};

export default ComicAchievements;
