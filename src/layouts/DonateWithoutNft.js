import Button from "components/Button";
import Spring from "components/Spring";
import Stars from "components/Stars";
import React from "react";
import styles from "scss/layout/DonateWithoutNft.module.scss";

function DonateWithoutNft() {
  return (
    <div className="relative">
      <Stars
        zIndex="1"
        top="100%"
        left="3%"
        size="4rem"
        transform="rotate(90deg)"
      />
      <Spring
        zIndex="1"
        top="unset"
        bottom="2%"
        left="unset"
        right="2%"
        size="3rem"
      />

      <div className="container-wrapper-2">
        <div className={`${styles.wrapper} relative`}>
          <div className={`${styles.or} fs-36px pink font-ubuntu weight-7`}>
            Or
          </div>

          <h1 className="fs-48px black font-ubuntu weight-7 mb-30px">
            Donate without an NFT <span className="pink">Thank You</span> gift!
          </h1>

          <form>
            <div className={`${styles.formRow}`}>
              <input
                type="number"
                className="fs-20px font-ubuntu weight-7 type-number-reset"
                placeholder="0.00"
              />
              <p className="uppercase weight-7 fs-20px">ETH</p>
            </div>
            <Button type="submit" title="Donate Now" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default DonateWithoutNft;
