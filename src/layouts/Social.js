import React from "react";
import styles from "scss/layout/Social.module.scss";
import SocialBg from "assets/images/SocialBg.png";
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import SocialIcon from "components/SocialIcon";
import useMediaQuery from "hooks/useMediaQuery";

function Social() {
  const isBellow1024px = useMediaQuery("(max-width : 1024px)");
  return (
    <div>
      <div className="container-wrapper-2">
        <main className={`${styles.section}`}>
          <img src={SocialBg} alt="" />

          <header className={`${isBellow1024px ? "mb-40px" : "mb-80px"}`}>
            <h3 className="fs-18px white font-ubuntu weight-4 mb-10px">
              Metacauses
            </h3>
            <h1 className="fs-48px white weight-7 font-ubuntu">
              Please help to spread the word!
            </h1>
          </header>

          <main>
            <SocialIcon className={`pink`}>
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon className={`pink`}>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon className={`pink`}>
              <FaDiscord />
            </SocialIcon>
            <SocialIcon className={`pink `}>
              <IoIosMail />
            </SocialIcon>
            <SocialIcon className={`pink `}>
              <RiInstagramFill />
            </SocialIcon>
          </main>
        </main>
      </div>
    </div>
  );
}

export default Social;
