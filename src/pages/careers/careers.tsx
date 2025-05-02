import careersStyles from "./careers.module.scss";

export type CareersProps = {
  firstLogo: string;
  secondLogo: string;
  firstAchievements: string[];
  secondAchievements: string[];
  firstSkills: string[];
  secondSkills: string[];
};

const Careers = ({
  firstLogo,
  secondLogo,
  firstAchievements,
  secondAchievements,
  firstSkills,
  secondSkills,
}: CareersProps) => {
  return (
    <div className={careersStyles.container}>
      <h1>The Origins</h1>
      <div className={careersStyles.grid}>
        <div className={careersStyles.logo1}>
          <img src={firstLogo} alt={"logo.jpg"} />
        </div>
        <div className={careersStyles.achievements1}>
          {firstAchievements.map((ach, i) => (
            <p key={i}>{ach}</p>
          ))}
        </div>
        <div className={careersStyles.skills1}>
          {firstSkills.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
        <div className={careersStyles.skills2}>
          {secondSkills.map((skill, i) => (
            <p key={i}>{skill}</p>
          ))}
        </div>
        <div className={careersStyles.achievements2}>
          {secondAchievements.map((ach, i) => (
            <p key={i}>{ach}</p>
          ))}
        </div>
        <div className={careersStyles.logo2}>
          <img src={secondLogo} alt={"logo.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default Careers;
