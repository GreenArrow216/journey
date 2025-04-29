import "../styles/comicJourney.scss";
import { motion } from "framer-motion";

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

type SkillsPanelProps = {
  id: string;
  color: string;
};

export default function SkillsPanel({ id, color }: SkillsPanelProps) {
  return (
    <motion.section
      className="comic-panel skills-panel"
      id={id}
      style={{ backgroundColor: color }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="skills-grid">
        {dummySkills.map((skill, idx) => (
          <div key={idx} className={`skill-tile shape-${(idx % 4) + 1}`}>
            {skill}
          </div>
        ))}
      </div>
    </motion.section>
  );
}
