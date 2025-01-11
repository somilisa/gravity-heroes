import React from "react";
import Logo from "../../Components/Logo";
import Hamburger from "hamburger-react";
import { useState } from "react";
import useWindowDimensions from "../../hooks/use-window-dimensions";
import styles from "./style.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  const toggleMenu = () => {
    if (width < 769) {
      setOpen(!open);
    }
    console.log("active");
  };

  return (
    <nav className={`${styles.wrapper} ${styles.nav}`}>
      <div className={styles.nav_header}>
        <Logo fill="#222222" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/contacts">Contacts</a>
          </li>
        </ul>
        <Hamburger toggled={open} toggle={toggleMenu} />
      </div>
    </nav>
  );
};

export default Navbar;
