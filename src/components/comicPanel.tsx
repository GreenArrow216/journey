import { motion } from "framer-motion";
import { careerData, PanelType } from "../constants";
import Intro from "../pages/intro/intro";
import "../styles/comicJourney.scss";
import Careers from "../pages/careers/careers";
import Connect from "../pages/connect/connect";
import { forwardRef } from "react";

type ComicPanelProps = {
  id: PanelType;
  color: string;
  title: string;
  onNext?: () => void;
};

const ComicPanel = forwardRef<HTMLElement, ComicPanelProps>(
  ({ id, color, title, onNext }, ref) => {

    const selectComponent = (id: PanelType) => {
      switch (id) {
        case PanelType.intro:
          return <Intro onNext={onNext}/>;
        case PanelType.early:
          return <Careers {...careerData.early} onNext={onNext} />;
        case PanelType.recent:
          return <Careers {...careerData.recent} onNext={onNext} />;
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
        ref={ref}
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
);

export default ComicPanel;
