import React from "react";
import Container from "../../Components/Container/index.jsx";
import Navbar from "./Navbar.jsx";
import Main from "./Main.jsx";
import styles from "./style.module.css";
const HeroThree = () => {
  return (
    <Container variant={styles.container}>
      <Navbar />
      <Main />
    </Container>
  );
};

export default HeroThree;
