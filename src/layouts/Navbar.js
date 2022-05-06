import React from "react";
import styles from "scss/layout/Navbar.module.scss";

function Navbar() {
  return (
    <div className="container-wrapper">
      <div className={`${styles.main}`}>
        <h1>Navbar</h1>
      </div>
    </div>
  );
}

export default Navbar;
