import React from "react";
import placeHolder from "../../snapshots/Header 5.png";
import Button from "../../Components/Button";
import styles from "./style.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.text}>
          <h2>Branding Do You Know Who You Are</h2>
          <p className={styles.description}>
            The following tips on creating a direct mail advertising campaign
            have been street-tested and will bring you huge returns in a short
            period of time.
          </p>
        </div>
        <div className={styles.buttons_container}>
          <Button width="255px">DESIGN YOUR MODULE</Button>
          <Button variant={"secondary"} width="255px">
            GET DEMO VERSION
          </Button>
          <a href="#">Learn More</a>
        </div>
      </section>
      <div className={styles.right}>
        <img src={placeHolder} alt="" />
      </div>
    </div>
  );
};

export default Main;
