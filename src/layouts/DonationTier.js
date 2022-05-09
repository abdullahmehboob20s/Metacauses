import Button from "components/Button";
import Step from "components/Step";
import React, { useState } from "react";
import styles from "scss/layout/DonationTier.module.scss";
import { GoPlus } from "react-icons/go";
import { FaMinus, FaPlus } from "react-icons/fa";

import nftImg1 from "assets/images/nftImg1.png";
import nftImg2 from "assets/images/nftImg2.png";
import nftImg3 from "assets/images/nftImg3.png";
import nftImg4 from "assets/images/nftImg4.png";
import nftImg5 from "assets/images/nftImg5.png";
import nftImg6 from "assets/images/nftImg6.png";
import Stars from "components/Stars";
import Spring from "components/Spring";

function DonationTier() {
  const [step, setStep] = useState({
    value: "Bronze",
    img: nftImg6,
    eth: 5,
  });
  const [counter, setCounter] = useState(1);

  const formatToCurrency = (amount) => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <div className={`${styles.donation_tier} relative`}>
      <Stars top="15%" left="10%" size="4rem" transform="rotate(310deg)" />
      <Spring top="25%" left="unset" right="8%" size="4rem" />

      <div className="container-wrapper-2">
        <header className="mb-140px">
          <h1 className="fs-48px black text-center weight-7 mb-80px font-ubuntu">
            Select a donation tier and NFT{" "}
            <span className="pink">Thank You</span> gift
          </h1>

          <div className={`${styles.steps}`}>
            <Step
              step={step.value}
              setStep={setStep}
              ethPrice={0.25}
              title="Diamond"
              img={nftImg2}
            />
            <Step
              step={step.value}
              setStep={setStep}
              ethPrice={0.15}
              title="Platinum"
              img={nftImg3}
            />
            <Step
              step={step.value}
              setStep={setStep}
              ethPrice={0.07}
              title="Gold"
              img={nftImg1}
            />
            <Step
              step={step.value}
              setStep={setStep}
              ethPrice={0.03}
              title="Silver"
              img={nftImg5}
            />
            <Step
              step={step.value}
              setStep={setStep}
              ethPrice={0.01}
              title="Bronze"
              img={nftImg6}
            />
          </div>
        </header>

        <section>
          <main>
            <h1
              className={`${styles.title} fs-48px black weight-7 mb-35px font-ubuntu`}
            >
              Donation Tier: <span className="uppercase">{step.value}</span>
            </h1>
            <p className="pink fs-32px weight-7 font-ubuntu mb-25px">
              Please support our Ukraine Aid Initiative
            </p>
            <p className="font-open-sans fs-18px weight-4 lh-1_6 black opacity-0_6 mb-50px">
              True to web3 principles, our future charitable causes will be
              selected by the community. Donate to become part of this growing
              community.
            </p>

            <div className={`${styles.donationQuantity} mb-50px`}>
              <div>
                <p className="fs-16px black opacity-0_9 font-ubuntu weight-5 mb-15px">
                  Select quantity
                </p>
                <div className={`${styles.counter}`}>
                  <button
                    className="fs-16px pointer"
                    onClick={() =>
                      setCounter((val) => (val <= 1 ? val : val - 1))
                    }
                  >
                    <FaMinus />
                  </button>
                  <p className="fs-30px black opacity-0_9 weight-5 font-ubuntu">
                    {counter}
                  </p>
                  <button
                    className="fs-18px pointer"
                    onClick={() => setCounter((val) => val + 1)}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
              <div className={`${styles.line}`}></div>
              <div>
                <p className="fs-16px black opacity-0_9 font-ubuntu weight-5 mb-10px">
                  Donation
                </p>
                <p className="fs-30px black opacity-0_9 weight-7 font-ubuntu mb-5px">
                  {parseFloat(counter * step.eth).toFixed(2)} ETH
                </p>
                <p className="fs-14px black opacity-0_6 weight-4">
                  {formatToCurrency(counter * 11373.55)}
                </p>
              </div>
            </div>

            <Button title="Donate Now" />
          </main>
          <aside>
            <div className={`${styles.imgContainer}`}>
              <img src={step.img} className="w-full" alt="" />
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

export default DonationTier;
