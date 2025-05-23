import ComicPanel from "../components/comicPanel";
import { PanelType } from "../constants";
import { useRef } from "react";

const panels = [
  { id: PanelType.intro, title: "Intro", color: "#FFD93D" },
  { id: PanelType.early, title: "Early Career", color: "#03A9F4" },
  { id: PanelType.recent, title: "Recent Career", color: "#E91E63" },
  { id: PanelType.connect, title: "Let's Connect", color: "#4CAF50" },
];

export default function ComicJourney() {
  const panelRefs = useRef<(HTMLElement | null)[]>([]);

  const scrollToNext = (index: number) => {
    const nextRef = panelRefs.current[index + 1];
    if (nextRef) {
      nextRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scroll-container">
      {panels.map((panel, index) => (
        <ComicPanel
          key={panel.id}
          id={panel.id}
          title={panel.title}
          color={panel.color}
          onNext={() => scrollToNext(index)}
          ref={(el) => {
            panelRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}
