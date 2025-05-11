import styles from "./connect.module.scss";
import { motion } from "framer-motion";

import { Linkedin, Mail, Download, Globe } from "react-feather";
import { cardVariants } from "../../constants";

const Connect = () => {
  return (
    <div className={styles.connectContainer}>
      <div className={styles.linksContainer}>
        <h2 className={styles.title}>Let’s Team Up!</h2>

        <div className={styles.actionsGrid}>
          <motion.a
            variants={cardVariants}
            initial={"hidden"}
            whileInView={"visible"}
            custom={1}
            viewport={{ once: true }}
            href="https://drive.usercontent.google.com/download?id=1Lxtsgh9pccQ783fxKwHY7X1G-6ZrxwJk&export=download&authuser=0"
            target="_blank"
            className={`${styles.card} ${styles.resume}`}
          >
            <Download size={40} />
            Download Resume
          </motion.a>

          <motion.a
            variants={cardVariants}
            initial={"hidden"}
            whileInView={"visible"}
            custom={2}
            viewport={{ once: true }}
            href="https://www.linkedin.com/in/gowthaman-ganesan/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.linkedin}`}
          >
            <Linkedin size={40} />
            LinkedIn
          </motion.a>

          <motion.a
            variants={cardVariants}
            initial={"hidden"}
            whileInView={"visible"}
            custom={3}
            viewport={{ once: true }}
            href="mailto:mailtogowthamanganesan@gmail.com"
            className={`${styles.card} ${styles.email}`}
          >
            <Mail size={40} />
            Email Me
          </motion.a>

          <motion.a
            variants={cardVariants}
            initial={"hidden"}
            whileInView={"visible"}
            custom={4}
            viewport={{ once: true }}
            href="https://dailytog.site"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.card} ${styles.portfolio}`}
          >
            <Globe size={40} />
            Visit Portfolio
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
