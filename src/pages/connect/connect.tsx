import styles from "./connect.module.scss";

import { Linkedin, Mail, Download, Globe } from "react-feather";

const Connect = () => {
  return (
    <div className={styles.connectContainer}>
      <h2 className={styles.title}>Let’s Team Up!</h2>

      <div className={styles.actionsGrid}>
        <a
          href="https://drive.usercontent.google.com/download?id=1Lxtsgh9pccQ783fxKwHY7X1G-6ZrxwJk&export=download&authuser=0"
          target="_blank"
          className={`${styles.card} ${styles.resume}`}
        >
          <Download size={40} />
          Download Resume
        </a>

        <a
          href="https://www.linkedin.com/in/gowthaman-ganesan/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.card} ${styles.linkedin}`}
        >
          <Linkedin size={40} />
          LinkedIn
        </a>

        <a
          href="mailto:mailtogowthamanganesan@gmail.com"
          className={`${styles.card} ${styles.email}`}
        >
          <Mail size={40} />
          Email Me
        </a>

        <a
          href="https://dailytog.site"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.card} ${styles.portfolio}`}
        >
          <Globe size={40} />
          Visit Portfolio
        </a>
      </div>
    </div>
  );
};

export default Connect;
