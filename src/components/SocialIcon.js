import React from "react";
import styles from "scss/components/SocialIcon.module.scss";

function SocialIcon({
  children,
  className,
  style,
  link,
  target = "_blank",
  rel = "noreferrer",
}) {
  return (
    <a
      href={link}
      target={target}
      rel={rel}
      style={style}
      className={`${styles.icon} ${className} pointer`}
    >
      {children}
    </a>
  );
}

export default SocialIcon;
