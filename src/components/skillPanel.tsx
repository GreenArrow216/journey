import "../styles/comicJourney.scss";

const dummySkills = [
  "ReactJS",
  "NextJS",
  "CSS",
  "HTML",
  "TypeScript",
  "Framer Motion",
  "SASS",
  "Git",
  "Jira",
  "Storybook",
  "GraphQL",
  "Jest",
  "Webpack",
  "SEO",
  "Scrum Master",
];

export default function SkillsPanel() {
  return (
    <div className="skills-grid">
      {dummySkills.map((skill, idx) => (
        <div key={idx} className={`skill-tile shape-${(idx % 4) + 1}`}>
          {skill}
        </div>
      ))}
    </div>
  );
}
