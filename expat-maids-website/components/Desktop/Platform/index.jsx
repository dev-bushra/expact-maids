import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import PlatformImg from "../../../assets/images/side_img.png";
import { useRouter } from "next/router";

const Platform = () => {
  const router = useRouter();

  const handleLearnMore = () => {
    router.push("/contact");
  };

  return (
    <div className={styles.platformSection} id="platform">
      <div className={styles.platformWrapper}>
        <div
          className={styles.img}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-duration="1000"
          data-aos-easing="ease-in-sine"
        >
          <Image src={PlatformImg} alt="" className={styles.platformImg} />
        </div>
        <div className={styles.text}>
          <div className={styles.textWrapper}>
            <div
              className={styles.mainTitle}
              data-aos="zoom-in-up"
              data-aos-duration="2000"
            >
              <span>Digital Platform</span>
              <h3>
                Desktop and Mobile App for employer to track and manage maids,
                at home or in the office.
              </h3>
            </div>
            <div
              className={styles.mainText}
              data-aos="fade-up"
              data-aos-duration="5000"
            >
              Track your maid’s visa application process. Request for NOC’s &
              other letters on the go. Download your Maid’s Visa documents. View
              and Select available Maids for Full Time Live In. Create support
              tickets and many more services all though a unique digital
              platform.
            </div>
            <div
              className={styles.primaryBtn}
              data-aos="fade-up"
              data-aos-duration="5000"
              onClick={handleLearnMore}
            >
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Platform;
