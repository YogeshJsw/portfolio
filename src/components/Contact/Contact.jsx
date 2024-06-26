import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:yogeshjaiswal.0811@gmail.com" target="_blank" rel="noopener noreferrer">yogeshjaiswal.0811@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"/>
          <a href="https://www.linkedin.com/in/yogesh-jaiswal-79086921b" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/YogeshJsw" target="_blank" rel="noopener noreferrer">Github Profile</a>
        </li>
      </ul>
    </footer>
  );
};
