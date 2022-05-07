import React from "react";
import styles from "scss/layout/Footer.module.scss";
import logo from "assets/images/logo.svg";

function Footer() {
  return (
    <div className={`${styles.footer} bg-light-blue`}>
      <div className="container-wrapper-2 py-50px">
        <header className="text-center mb-45px">
          <img src={logo} className={`${styles.logo}`} alt="" />
        </header>

        <main className="mb-50px">
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Twitter
          </a>
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Discord
          </a>
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Website
          </a>
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Contact
          </a>
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Privacy
          </a>
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Smart Contract
          </a>
          <a
            href="#"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            OpenSea
          </a>
        </main>

        <footer>
          <p className="fs-20px lh-1_7 font-ubuntu weight-4 black opacity-0_4 text-center">
            © 2022 Metacauses. All rights reserved. Metacauses is recognized as
            a tax-exempt organization under section 501(c)(3) of the Internal
            Revenue Code (Tax ID: 88-1352640). Contributions to organizations
            with 501(c)(3) status are tax deductible In the United States. We
            are a nonprofit helping people in extreme need through
            cryptocurrency donations.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
