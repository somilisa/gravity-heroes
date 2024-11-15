import React from "react";
import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links } from "./data";
import { useState } from "react";
import styles from "./style.module.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className={styles.wrapper}>
      <div className={styles.nav_header}>
        <img src={logo} alt="gravity"></img>
        <button
          className={styles.nav_toggle}
          onClick={() => setShowLinks(!showLinks)}
        >
          <FaBars />
        </button>
      </div>
      <ul className={showLinks ? styles.show_container : ""}>
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
