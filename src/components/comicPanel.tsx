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

    const floatingText = (id: PanelType): string => {
      switch (id) {
        case PanelType.intro:
          return "Start the Saga";
        case PanelType.early:
          return "Level Up!";
        case PanelType.recent:
          return "Next Chapter!";
        case PanelType.connect:
          return "";
        default:
          return "";
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
        {id !== PanelType.connect && (
          <motion.p
            className="floating-p"
            onClick={onNext}
            style={{ cursor: "pointer" }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: 1,
              y: [-3, 3],
              transition: {
                opacity: { delay: 0, duration: 0.5 },
                y: {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  type: "tween",
                },
              },
            }}
          >
            {floatingText(id)}
          </motion.p>
        )}

        {selectComponent(id)}
      </motion.section>
    );
  }
);

export default ComicPanel;
