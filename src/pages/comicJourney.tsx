import ComicPanel from "../components/comicPanel";
import { PanelType } from "../constants";

const panels = [
  { id: PanelType.intro, title: "Intro", color: "#FFD93D" },
  { id: PanelType.early, title: "Early Career", color: "#03A9F4" },
  { id: PanelType.recent, title: "Recent Career", color: "#E91E63" },
  { id: PanelType.connect, title: "Let's Connect", color: "#4CAF50" },
];

export default function ComicJourney() {
  return (
    <div className="scroll-container">
      {panels.map((panel) => (
        <ComicPanel
          key={panel.id}
          id={panel.id}
          title={panel.title}
          color={panel.color}
        />
      ))}
    </div>
  );
}
