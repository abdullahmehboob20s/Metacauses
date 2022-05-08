import Description from "components/Description";
import Stars from "components/Stars";
import React from "react";
import styles from "scss/layout/Hero.module.scss";

function Hero() {
  return (
    <div>
      <div className={`${styles.hero} container-wrapper-2`}>
        <div className={`${styles.left}`}>
          <div className="mb-20px">
            <h1 className="fs-72px black font-ubuntu weight-7 lh-1">
              Metacauses
            </h1>
            <h2 className="pink fs-48px font-ubuntu weight-7">
              a web3 charity
            </h2>
          </div>

          <p className="fs-20px weight-4">
            Brought to you by the founder of{" "}
            <span className="pink">@CryptoBeauties.</span>
          </p>
        </div>

        <div className={`${styles.right} relative`}>
          <Stars
            left="unset"
            right="103%"
            bottom="0"
            top="unset"
            transform="rotate(310deg)"
          />

          <Description className="mb-20px">
            Metacauses' mission is to provide aid to the most extreme
            humanitarian causes of the day by raising capital through
            cryptocurrency donations. Donations to our 501(c)(3) nonprofit are
            tax-deductible in the United States.
          </Description>
          <Description>
            True to web3 principles, Metacauses' future charitable causes will
            be selected by the community. Make your voice heard.
          </Description>
        </div>
      </div>
    </div>
  );
}

export default Hero;
