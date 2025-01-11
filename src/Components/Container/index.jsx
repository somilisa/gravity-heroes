import React from "react";
import styles from "./style.module.css";

function Container({ variant, children }) {
  console.log("container");

  return <div className={`${styles.container} ${variant}`}>{children} </div>;
}
export default Container;
