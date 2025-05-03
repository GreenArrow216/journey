import ComicAchievements from "../../components/achievements/achievements";
import ComicSkills from "../../components/skills/skills";
import careersStyles from "./careers.module.scss";

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
        <div className={careersStyles.logo1}>
          <div className={careersStyles.comicHeading}>Hero Base</div>
          <img src={firstLogo} alt={"logo.jpg"} />
        </div>
        <div className={careersStyles.achievements1}>
          <div className={careersStyles.comicHeading}>Power Moves</div>
          <ComicAchievements achievements={firstAchievements} />
        </div>
        <div className={careersStyles.skills1}>
          <div className={careersStyles.comicHeading}>Skills Used</div>
          <ComicSkills skills={firstSkills}/>
        </div>
        <div className={careersStyles.skills2}>
          <div className={careersStyles.comicHeading}>Skills Used</div>
          <ComicSkills skills={secondSkills}/>
        </div>
        <div className={careersStyles.achievements2}>
          <div className={careersStyles.comicHeading}>Power Moves</div>
          <ComicAchievements achievements={secondAchievements} />
        </div>
        <div className={careersStyles.logo2}>
          <div className={careersStyles.comicHeading}>Hero Base</div>
          <img src={secondLogo} alt={"logo.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Careers;
