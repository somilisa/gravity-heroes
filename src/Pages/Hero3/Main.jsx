import React from "react";
import styles from "./style.module.css";
import SocialIcons from "../../Components/SocialMediaBar";
import Button from "../../Components/Button";
const Main = () => {
  return (
    <div className={styles.wrapper}>
      {/* <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="65" height="65" fill="#4737FF" />
        <path
          d="M42.697 32.8485L27.9242 41.3775L27.9242 24.3194L42.697 32.8485Z"
          fill="white"
        />
      </svg> */}

      <div className={styles.hero}>
        <SocialIcons fill="#222222" />
        <div className={styles.hero_text}>
          <h3>Vampires The Romantic Ideology Behind Them</h3>
          <p className={styles.description}>
            Many people has the notion that enlightenment is one state. Many
            also believe that when it is attained, a person is forever in that
            state.{" "}
          </p>
        </div>
        <div className={styles.buttons_container}>
          <Button>GET STARTED</Button>
        </div>
      </div>
    </div>
  );
};

export default Main;
