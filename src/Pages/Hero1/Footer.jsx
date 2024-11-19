import React from "react";
import styles from "./style.module.css";
import SocialIcons from "../../Components/SocialMediaBar";
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <SocialIcons fill="white" />
    </footer>
  );
};

export default Footer;
