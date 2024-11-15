import React from "react";
import placeHolder from "../../Assets/Placeholder.png";
import Button from "../../Components/Button";
import styles from "./style.module.css";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <p className={styles.title}>SHOOTING STARS</p>
        <h3>The Amazing Hubble</h3>
        <p className={styles.description}>
          In efforts to expand our horizons, we welcome every investment-minded
          individual to join us in the Condotel Investment Opportunity.
        </p>
        <div className={styles.buttons_container}>
          <Button variant={"secondary"}>GET STARTED</Button>
          <Button variant={"primary"}>LEARN MORE</Button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={placeHolder} alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="65"
          viewBox="0 0 65 65"
          fill="none"
        >
          <rect width="65" height="65" fill="#F4F4F4" />
          <path
            d="M42.697 32.8485L27.9242 41.3775L27.9242 24.3194L42.697 32.8485Z"
            fill="#222222"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
