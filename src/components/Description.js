import React, { memo } from "react";

function Description({
  children,
  className,
  opacity = "opacity-0_6",
  lineHeight = "lh-1_3",
  fontSize = "fs-20px",
}) {
  return (
    <p
      className={`${fontSize} ${lineHeight} ${opacity} ${className} weight-4 black`}
    >
      {children}
    </p>
  );
}

export default Description;
