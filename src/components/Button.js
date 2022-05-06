import React from "react";
import styles from "scss/components/Button.module.scss";

function Button({
  title,
  children,
  className,
  style,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${className} bg-pink fs-20px weight-7 pointer white font-ubuntu`}
      style={style}
      onClick={onClick}
    >
      {children ? children : title}
    </button>
  );
}

export default Button;
