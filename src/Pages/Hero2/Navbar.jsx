import React from "react";

import Hamburger from "hamburger-react";

import styles from "./style.module.css";
import Logo from "../../Components/Logo";
const NavBar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <Logo fill={"#222222"} />
        </a>
        <Hamburger />
      </nav>
    </header>
  );
};

export default NavBar;
