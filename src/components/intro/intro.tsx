import introStyles from "./intro.module.scss";
import cityScape from "../../assets/cityScape.svg";
import Me from "../../assets/Comic-Gowtham.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

const Intro = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxTop = useTransform(mouseX, [0, window.innerWidth], [5, -5]);
  const parallaxBottom = useTransform(
    mouseX,
    [0, window.innerWidth],
    [-5, 5]
  );
  const parallaxImgX = useTransform(mouseX, [0, window.innerWidth], [15, -15]);
  const parallaxImgY = useTransform(mouseY, [0, window.innerHeight], [15, -15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={introStyles.intro}>
      <motion.img
        initial={{ y: -300, scaleY: -1 }}
        animate={{ y: 0, scaleY: -1 }}
        style={{ x: parallaxTop }}
        transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0 }}
        src={cityScape}
        alt="cityscape"
        className={`${introStyles.cityScape} ${introStyles.cityTop}`}
      />
      <motion.img
        initial={{ y: 300 }}
        animate={{ y: 0 }}
        style={{ x: parallaxBottom }}
        transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.5 }}
        src={cityScape}
        alt="cityscape"
        className={`${introStyles.cityScape} ${introStyles.cityBottom}`}
      />
      <div className={introStyles.profile}>
        <motion.p
          initial={{ scale: 0.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.7, delay: 1.5 }}
          style={{ x: parallaxImgX, y: parallaxImgY }}
        >
          Gowthaman <br /> Ganesan
        </motion.p>
        <motion.img
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{ x: parallaxImgX, y: parallaxImgY }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 8,
            delay: 1,
          }}
          src={Me}
          alt={"me.png"}
        />
        <img />
      </div>
    </div>
  );
};

export default Intro;
