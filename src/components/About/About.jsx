import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img src={getImageUrl("about/aboutImage.png")} alt="Pic" className={styles.aboutImage}/> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem Solver</h3>
              <p>I have solved more than 1000+ questions on various coding platforms, demonstrating strong problem-solving skills.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Android Developer</h3>
              <p>I am proficient in Android development using Kotlin and have created several mobile applications.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I have experience in building responsive and optimized websites using the latest frontend technologies like React.js.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Databases</h3>
              <p>I have a strong understanding of SQL databases (MySQL & SQLite), including designing and managing databases efficiently.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
