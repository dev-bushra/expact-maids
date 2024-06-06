import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Card1 from "../../../assets/images/JoinUs/card-1.png";
import Card2 from "../../../assets/images/JoinUs/card-2.png";
import Card3 from "../../../assets/images/JoinUs/card-3.png";

const JoinUs = () => {
  return (
    <div className={styles.joinSection}>
      <div className={styles.joinUsWrapper} id="howitswork">
        <div
          className={styles.mainTitle}
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <span>You Know</span>
          <h2>
            How it <br />
            Works
          </h2>
        </div>
        <div className={styles.cards}>
          <Image
            src={Card1}
            alt=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <Image
            src={Card2}
            alt=""
            data-aos="flip-left"
            className={styles.midCard}
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
          <Image
            src={Card3}
            alt=""
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          />
        </div>
      </div>
    </div>
  );
};
export default JoinUs;
