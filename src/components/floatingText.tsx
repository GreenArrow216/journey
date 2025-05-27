import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-feather";

const FloatingText = ({
  text,
  bgColor,
  onNext,
}: {
  text: string;
  bgColor?: string;
  onNext?: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });
  const [show, setShow] = useState(false);

  useEffect(() => {
    let timer: number;

    if (isInView) {
      timer = setTimeout(() => setShow(true), 1500);
    } else {
      timer = setTimeout(() => setShow(false), 200);
    }

    return () => clearTimeout(timer);
  }, [isInView]);

  if (!show) return <div ref={ref} />;

  return (
    <motion.div
      ref={ref}
      className="floating-text"
      onClick={onNext}
      style={{ cursor: "pointer", backgroundColor: bgColor ?? "green" }}
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: 1,
        y: [-3, 3],
        transition: {
          opacity: { delay: 1.5, duration: 0.5 },
          y: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            type: "tween",
          },
        },
      }}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      <p>{text}</p>
      <ArrowRight size={20} />
    </motion.div>
  );
};

export default FloatingText;
