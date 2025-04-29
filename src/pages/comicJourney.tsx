import ComicPanel from "../components/comicPanel";
import SkillsPanel from "../components/skillPanel";

const panels = [
  { id: "intro", type: "normal", title: "Intro", color: "#FF6B6B" },
  { id: "contents", type: "normal", title: "Contents", color: "#FFD93D" },
  { id: "skills", type: "skills", title: "Skills", color: "#6BCB77" },
  { id: "early", type: "normal", title: "Early Career", color: "#4D96FF" },
  { id: "recent", type: "normal", title: "Recent Career", color: "#8358FF" },
  { id: "connect", type: "normal", title: "Let's Connect", color: "#FF8FAB" },
];

export default function ComicJourney() {
  return (
    <div className="scroll-container">
      {panels.map((panel) =>
        panel.type === "skills" ? (
          <SkillsPanel key={panel.id} id={panel.id} color={panel.color} />
        ) : (
          <ComicPanel
            key={panel.id}
            id={panel.id}
            title={panel.title}
            color={panel.color}
          />
        )
      )}
    </div>
  );
}
