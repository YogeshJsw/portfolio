import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
  <div className={styles.content}>
    <h1 className={`${styles.title} ${styles.animatedTitle}`}>
      Hi, I'm <span className="nowrap"><span>Y</span><span>o</span><span>g</span><span>e</span><span>s</span><span>h</span></span><span>&nbsp;</span>
      <span className="nowrap"><span>J</span><span>a</span><span>i</span><span>s</span><span>w</span><span>a</span><span>l</span></span>
    </h1>
    <p className={styles.description}>I'm a motivated computer science student with a passion for problem-solving and a strong foundation in programming languages!</p>
    <a href="mailto:yogeshjaiswal.0811@gmail.com" className={styles.contactBtn} target="_blank">Contact Me</a>
  </div>
  <img src={getImageUrl("hero/myimg.png")} alt="Hero image of me" className={styles.heroImg} />
  <div className={styles.topBlur} />
  <div className={styles.bottomBlur} />
</section>

  );
};
