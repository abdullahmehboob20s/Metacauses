import React, { useState } from "react";
import styles from "scss/components/Step.module.scss";

function Step({ title, step, setStep, ethPrice, img }) {
  return (
    <div
      className={`${styles.step} ${step === title ? styles.active : ""}`}
      onClick={() =>
        setStep((data) => ({ ...data, value: title, eth: ethPrice, img }))
      }
    >
      <div className={`${styles.daimond} pointer`}></div>
      <p className={`${styles.title} font-ubuntu  pointer`}>{title}</p>
    </div>
  );
}

export default Step;
