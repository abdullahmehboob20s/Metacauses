import React from "react";
import styles from "scss/layout/Social.module.scss";
import SocialBg from "assets/images/SocialBg.png";
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import SocialIcon from "components/SocialIcon";

function Social() {
  return (
    <div>
      <div className="container-wrapper-2">
        <main
          className={`${styles.section} py-100px`}
          style={{ paddingBottom: "9rem" }}
        >
          <img src={SocialBg} alt="" />

          <header className="mb-80px">
            <h3 className="fs-18px white font-ubuntu weight-4 mb-10px">
              Metacauses
            </h3>
            <h1 className="fs-48px white weight-7 font-ubuntu">
              Please help to spread the word!
            </h1>
          </header>

          <main>
            <SocialIcon className="pink fs-50px">
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon className="pink fs-50px">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon className="pink fs-50px">
              <FaDiscord />
            </SocialIcon>
            <SocialIcon className="pink fs-52px">
              <IoIosMail />
            </SocialIcon>
            <SocialIcon className="pink fs-48px">
              <RiInstagramFill />
            </SocialIcon>
          </main>
        </main>
      </div>
    </div>
  );
}

export default Social;
