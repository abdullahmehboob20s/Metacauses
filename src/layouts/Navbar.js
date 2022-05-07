import React, { useState } from "react";
import styles from "scss/layout/Navbar.module.scss";
import logo from "assets/images/logo.svg";
import Button from "components/Button";
import { GrFormClose } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setIsOpen(false));

  return (
    <div className="container-wrapper">
      <div className={`${styles.navbar}`}>
        <img src={logo} className={`${styles.logo}`} alt="" />

        <button
          className={`${styles.hamburger} pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <IoMenu size={32} />
        </button>

        <div
          className={`${styles.right} ${isOpen ? styles.open : ""}`}
          ref={sidebarRef}
        >
          <button
            className={`${styles.closeIcon} pointer`}
            onClick={() => setIsOpen(false)}
          >
            <GrFormClose size={30} />
          </button>
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

      <div className={`black-screen ${isOpen ? "show" : ""}`}></div>
    </div>
  );
}

export default Navbar;
