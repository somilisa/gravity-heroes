import React from "react";
import styles from "./style.module.css";

function Button({ variant = "default", children }) {
  const variantClasses = {
    primary: styles.primary,
    secondary: styles.secondary,
  };
  const style = variantClasses[variant] || "";
  return <button className={`${styles.wrapper}  ${style}`}>{children}</button>;
}
export default Button;
