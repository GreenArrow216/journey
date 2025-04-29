import { motion } from "framer-motion";

type ComicPanelProps = {
  id: string;
  color: string;
  title: string;
};

export default function ComicPanel({ id, color, title }: ComicPanelProps) {
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
      <div className="content">
        <h1>{title}</h1>
      </div>
    </motion.section>
  );
}
