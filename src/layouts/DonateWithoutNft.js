import Button from "components/Button";
import React from "react";
import styles from "scss/layout/DonateWithoutNft.module.scss";

function DonateWithoutNft() {
  return (
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
  );
}

export default DonateWithoutNft;
