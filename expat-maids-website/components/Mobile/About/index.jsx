import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Logos from "../../../assets/images/about/about-logos.png";
import Gdrfa from "../../../assets/images/about/about_logo (1).png";
import Mohre from "../../../assets/images/about/about_logo (2).png";
import Tabee from "../../../assets/images/about/about_logo (3).png";
import AboutImgs from "../../../assets/images/about/about-logos.png";
import Icon1 from "../../../assets/icons/about/about_icon_1.svg";
import Icon2 from "../../../assets/icons/about/about_icon_2.svg";
import Icon3 from "../../../assets/icons/about/about_icon_3.svg";
import Icon4 from "../../../assets/icons/about/about_icon_4.svg";

const About = () => {
  return (
    <div fluid className={styles.aboutWrapper} id="aboutmobile">
      <h1 className={styles.title}>
      Expat Maids is licensed and registered by the Ministry of Human
        Resources & Emiratisation (MOHRE)
      </h1>

      <div className={styles.logosContainer}>
        <Image className={styles.allLogosInOnePic} src={Gdrfa} alt="" />
        <Image className={styles.allLogosInOnePic} src={Mohre} alt="" />
        <Image className={styles.allLogosInOnePic} src={Tabee} alt="" />
      </div>

      <div className={styles.footer}>
        <h1 className={styles.title2}>
          Trusted.
          <br />
          Transparent. Safe.
        </h1>
        <div className={styles.smallIconsContainer}>
          <div className={styles.smallIcon}>
            <Image src={Icon1} alt="logos" width={16} className={styles.Icon} />
            <span>Take care of visa processing</span>
          </div>
          <div className={styles.smallIcon}>
            <Image src={Icon2} className={styles.Icon} alt="logos" width={16} />
            <span>Guaranteed Maid Replacement</span>
          </div>
          <div className={styles.smallIcon}>
            <Image src={Icon3} className={styles.Icon} alt="logos" width={16} />
            <span>Take care of visa processing</span>
          </div>
          <div className={styles.smallIcon}>
            <Image src={Icon4} alt="logos" className={styles.Icon} width={16} />
            <span>Take care of visa processing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
