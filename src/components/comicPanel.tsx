import { motion } from "framer-motion";
import { PanelType } from "../constants";
import Intro from "./intro/intro";
import "../styles/comicJourney.scss"

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
