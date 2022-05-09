import React from "react";
import styles from "scss/layout/Footer.module.scss";
import logo from "assets/images/logo.svg";
import Stars from "components/Stars";
import Spring from "components/Spring";
import urls from "assets/Data/urls";

function Footer() {
  return (
    <div className={`${styles.footer} bg-light-blue relative`}>
      <Stars zIndex="1" top="-6%" left="3%" size="4rem" />
      <Spring
        zIndex="1"
        bottom="120%"
        top="unset"
        left="unset"
        right="3%"
        size="3rem"
      />

      <div className="container-wrapper-2 py-50px">
        <header className="text-center mb-45px">
          <img src={logo} className={`${styles.logo}`} alt="" />
        </header>

        <main className="mb-50px">
          <a
            href={urls.twitter}
            target="_blank"
            rel="noreferrer"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Twitter
          </a>
          <a
            href={urls.discord}
            target="_blank"
            rel="noreferrer"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Discord
          </a>

          <a
            href={urls.termsAndConditions}
            target="_blank"
            rel="noreferrer"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Terms & Conditions
          </a>
          <a
            href={urls.privacyPolicy}
            target="_blank"
            rel="noreferrer"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Privacy
          </a>
          <a
            href={urls.smartContract}
            target="_blank"
            rel="noreferrer"
            className="fs-20px font-ubuntu weight-5 black opacity-0_9"
          >
            Smart Contract
          </a>
          <a
            href={urls.openSea}
            target="_blank"
            rel="noreferrer"
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
