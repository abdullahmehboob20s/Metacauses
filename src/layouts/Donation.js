import React from "react";
import styles from "scss/layout/Donation.module.scss";
import Description from "components/Description";
import donationCardImg from "assets/images/donationCardImg.png";
import Stars from "components/Stars";
import Spring from "components/Spring";

function Donation() {
  return (
    <div className={`${styles.wrapper} relative`}>
      <div className="container-wrapper-2 py-100px relative">
        <section>
          <aside>
            <img src={donationCardImg} className="w-full" alt="" />
          </aside>
          <article>
            <div className="mb-45px">
              <h1 className="fs-48px black font-ubuntu weight-7 mb-20px">
                Our First Cause: Ukraine Aid
              </h1>
              <h1 className="fs-32px black weight-7">
                Donations to Date: (connect wallet)
              </h1>
            </div>
            <h1 className="fs-32px black weight-7 pink font-ubuntu mb-25px">
              Donations accepted now. Please donate below.
            </h1>

            <Description className="mb-20px">
              Food, medicine, and other supplies are becoming increasingly
              sparse within Ukraine, as citizens continue to stream out of the
              cities and across the borders in search of security. Shelter,
              food, water, and other necessities are being provided by
              organizations on the ground and in Ukraine and neighboring
              countries.
            </Description>
            <Description className="mb-20px">
              Civilians are suffering as Russian armies strike Ukraine. Many
              people rely on humanitarian help from local charities when they
              escape their homes and seek refuge.
            </Description>
            <Description className="mb-20px">
              Your Ethereum cryptocurrency donations will go directly to these
              organizations swiftly and efficiently.
            </Description>
          </article>
        </section>
      </div>

      <Stars zIndex="1" top="20%" left="5%" size="4rem" />
      <Spring zIndex="1" top="unset" bottom="2%" left="15%" size="4rem" />
      <Spring zIndex="1" top="10%" left="unset" right="2%" size="3rem" />
      <Stars
        zIndex="1"
        top="unset"
        bottom="30%"
        left="unset"
        right="2%"
        size="3rem"
        transform="rotate(310deg)"
      />
      <Spring
        zIndex="1"
        top="unset"
        bottom="10%"
        left="unset"
        right="8%"
        size="2rem"
      />
    </div>
  );
}

export default Donation;
