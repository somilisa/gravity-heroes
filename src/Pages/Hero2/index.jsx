import React from "react";
import Container from "../../Components/Container";
import Navbar from "./Navbar";
import Main from "./Main";
import styles from "./style.module.css";

const HeroTwo = () => {
  return (
    <Container variant={styles.container}>
      <div className={styles.wrapper}>
        <Navbar />
        <Main />
      </div>
    </Container>
  );
};

export default HeroTwo;
