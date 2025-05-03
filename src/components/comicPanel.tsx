import { motion } from "framer-motion";
import { careerData, PanelType } from "../constants";
import Intro from "../pages/intro/intro";
import "../styles/comicJourney.scss";
import Careers from "../pages/careers/careers";
import Connect from "../pages/connect/connect";

type ComicPanelProps = {
  id: PanelType;
  color: string;
  title: string;
};

export default function ComicPanel({ id, color, title }: ComicPanelProps) {
  const selectComponent = (id: PanelType) => {
    switch (id) {
      case PanelType.intro:
        return <Intro />;
      case PanelType.early:
        return <Careers {...careerData.early} />;
      case PanelType.recent:
        return <Careers {...careerData.recent} />;
      case PanelType.connect:
        return <Connect />;
      default:
        return (
          <div className="content">
            <h1>{title}</h1>
          </div>
        );
    }
  };

  return (
    <motion.section
      className="comic-panel"
      id={id}
      style={{ backgroundColor: color }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {selectComponent(id)}
    </motion.section>
  );
}
