import React from "react";
import styles from "scss/layout/Navbar.module.scss";
import logo from "assets/images/logo.svg";
import Button from "components/Button";

function Navbar() {
  return (
    <div className="container-wrapper">
      <div className={`${styles.navbar}`}>
        <img src={logo} className={`${styles.logo}`} alt="" />
        <div className={`${styles.right}`}>
          <a
            href="/"
            className="font-ubuntu fs-20px black weight-5 opacity-0_8 pointer"
          >
            Twitter
          </a>
          <a
            href="/"
            className="font-ubuntu fs-20px black weight-5 opacity-0_8 pointer"
          >
            Discord
          </a>
          <a
            href="/"
            className="font-ubuntu fs-20px black weight-5 opacity-0_8 pointer"
          >
            Linktree
          </a>

          <Button title="Connect Wallet" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
