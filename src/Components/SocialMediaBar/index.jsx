import React from "react";
import { socialLinks } from "./data";
import styles from "./style.module.css";

const SocialIcons = ({ fill = "white" }) => {
  return (
    <div className={styles.social_icons}>
      {socialLinks.map(({ id, href, svgPath }) => (
        <a key={id} href={href} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d={svgPath}
              fill={fill}
            />
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
