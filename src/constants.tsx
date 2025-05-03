import { CareersProps } from "./pages/careers/careers";
import MallowLogo from "./assets/companies/Mallow-tech.png"
import Kissflow from "./assets/companies/Kissflow.svg"
import OrkneyLora from "./assets/companies/Orkney-Lora.svg"
import OptiTwin from "./assets/companies/Opti-twin.svg"

export enum PanelType {
  intro = "intro",
  early = "early",
  recent = "recent",
  connect = "connect",
}

export const careerData: Record<string, CareersProps> = {
  early: {
    title: 'The Origins',
    firstLogo: MallowLogo,
    secondLogo: Kissflow,
    firstAchievements: [
      "Built 4+ CRM modules solo — every pixel counts.",
      "Delivered a CMS in 1 week — side-quest: completed.",
      "Mentored 3 interns — Sensei status unlocked.",
      'Collected 5 "Green Cards" from client — high-impact work badge.',
    ],
    secondAchievements: [
      "Led the micro-frontend migration — split the monolith!",
      "Crafted blazing-fast PWA search — precision mode.",
      "Created a PDF viewer & dynamic generator — docs + dev power.",
      "Jenkins CI/CD integration — deployment automation engaged.",
    ],
    firstSkills: [
      "HTML5",
      "CSS",
      "SCSS",
      "ReactJS",
      "Redux",
      "REST APIs",
      "Bootstrap",
      "jQuery",
      "Git",
      "BitBucket",
      "UI/UX design principles",
      "CI/CD",
    ],
    secondSkills: [
      "ReactJS",
      "Micro-Frontend Architecture",
      "Redux",
      "React Hooks",
      "Jenkins",
      "CI/CD",
      "Webpack",
    ],
  },
  recent: {
    title: 'The Rise',
    firstLogo: OrkneyLora,
    secondLogo: OptiTwin,
    firstAchievements: [
      "Built a full IoT frontend — live sensor readings at your fingertips.",
      "Engineered search from frontend to DB — end-to-end mastery.",
      "Represented project at TechEx London — real-world XP boost.",
      "Built backend APIs — full-stack stealth.",
    ],
    secondAchievements: [
      "Migrated app from CRA → Next.js SSR — performance overdrive.",
      "Designed dynamic dashboards + real-time graphs — UI sorcery.",
      "Cypress E2E + BDD integration — bug-busting toolkit.",
      "Built a UI component system with Storybook — dev team speed +40%.",
    ],
    firstSkills: [
      "ReactJS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "RESTful APIs",
    ],
    secondSkills: [
      "Next.js",
      "Server-Side Rendering (SSR)",
      "ReactJS",
      "Typescript",
      "Cypress",
      "Visx",
      "Storybook",
    ],
  },
};
