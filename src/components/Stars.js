import React from "react";
import stars from "assets/images/stars.svg";
import useMediaQuery from "hooks/useMediaQuery";

function Stars({
  size = "3rem",
  top = "0px",
  left = "0px",
  bottom = "unset",
  right = "unset",
  transform = "",
  zIndex = "-1",
}) {
  const isBellow600px = useMediaQuery("(max-width : 37.5em)");

  const style = {
    width: isBellow600px ? "2rem" : size,
    height: isBellow600px ? "2rem" : size,
    position: "absolute",
    top,
    bottom,
    left,
    right,
    transform,
    zIndex,
    pointerEvents: "none",
    userSelect: "none",
  };

  return <img src={stars} style={style} alt="" />;
}

export default Stars;
