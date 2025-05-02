import SlantedDiv from "../../components/slantedDiv";
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
          <SlantedDiv text="Hero Base" />
          <img src={firstLogo} alt={"logo.jpg"} />
        </div>
        <div className={careersStyles.achievements1}>
          <SlantedDiv text="Power Moves" />
          {firstAchievements.map((ach, i) => (
            <p key={i}>{ach}</p>
          ))}
        </div>
        <div className={careersStyles.skills1}>
          <SlantedDiv text="Skills Used" />
          {firstSkills.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
        <div className={careersStyles.skills2}>
          <SlantedDiv text="Skills Used" />
          {secondSkills.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
        <div className={careersStyles.achievements2}>
          <SlantedDiv text="Power Moves" />
          {secondAchievements.map((ach, i) => (
            <p key={i}>{ach}</p>
          ))}
        </div>
        <div className={careersStyles.logo2}>
          <SlantedDiv text="Hero Base" />
          <img src={secondLogo} alt={"logo.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Careers;
