import React from "react";
import styles from "./style.module.css";

function Container({ variant, children }) {
  return <div className={`${styles.container} ${variant}`}>{children} </div>;
}
export default Container;
