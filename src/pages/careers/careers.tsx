import ComicAchievements from "../../components/achievements/achievements";
import ComicSkills from "../../components/skills/skills";
import { cardVariants } from "../../constants";
import careersStyles from "./careers.module.scss";
import { motion } from "framer-motion";

export type CareersProps = {
  firstLogo: string;
  secondLogo: string;
  firstAchievements: string[];
  secondAchievements: string[];
  firstSkills: string[];
  secondSkills: string[];
  title: string;
};

const Careers = ({
  firstLogo,
  secondLogo,
  firstAchievements,
  secondAchievements,
  firstSkills,
  secondSkills,
  title,
}: CareersProps) => {
  return (
    <div className={careersStyles.container}>
      <h1>{title}</h1>
      <div className={careersStyles.grid}>
        <motion.div
          variants={cardVariants}
          initial={"hidden"}
          whileInView={"visible"}
          custom={1}
          viewport={{ amount: 'all', once: true }}
          className={careersStyles.logo1}
        >
          <div className={careersStyles.comicHeading}>Hero Base</div>
          <img src={firstLogo} alt={"logo.jpg"} />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial={"hidden"}
          whileInView={"visible"}
          custom={2}
          viewport={{ amount: 1, once: true }}
          className={careersStyles.achievements1}
        >
          <div className={careersStyles.comicHeading}>Power Moves</div>
          <ComicAchievements achievements={firstAchievements} />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial={"hidden"}
          whileInView={"visible"}
          custom={3}
          viewport={{ once: true }}
          className={careersStyles.skills1}
        >
          <div className={careersStyles.comicHeading}>Skills Used</div>
          <ComicSkills skills={firstSkills} />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial={"hidden"}
          whileInView={"visible"}
          custom={4}
          viewport={{ amount: 0.5, once: true }}
          className={careersStyles.skills2}
        >
          <div className={careersStyles.comicHeading}>Skills Used</div>
          <ComicSkills skills={secondSkills} />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial={"hidden"}
          whileInView={"visible"}
          custom={5}
          viewport={{ amount: 0.5, once: true }}
          className={careersStyles.achievements2}
        >
          <div className={careersStyles.comicHeading}>Power Moves</div>
          <ComicAchievements achievements={secondAchievements} />
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial={"hidden"}
          whileInView={"visible"}
          custom={6}
          viewport={{ amount: 0.5, once: true }}
          className={careersStyles.logo2}
        >
          <div className={careersStyles.comicHeading}>Hero Base</div>
          <img src={secondLogo} alt={"logo.jpg"} />
        </motion.div>
      </div>
    </div>
  );
};

export default Careers;
