import ComicPanel from "../components/comicPanel";
import { PanelType } from "../constants";



const panels = [
  { id: PanelType.intro, title: "Intro", color: "#FFD93D" },
  // { id: "contents", type: "normal", title: "Contents", color: "#FFD93D" },
  // { id: "skills", type: "skills", title: "Skills", color: "#6BCB77" },
  { id: PanelType.early, title: "Early Career", color: "#4D96FF" },
  { id: PanelType.recent, title: "Recent Career", color: "#8358FF" },
  { id: PanelType.connect, title: "Let's Connect", color: "#FF8FAB" },
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
