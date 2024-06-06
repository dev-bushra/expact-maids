import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Icon1 from "../../../assets/images/JoinUs/icon-1.svg";
import Icon2 from "../../../assets/images/JoinUs/icon-2.svg";
import Icon3 from "../../../assets/images/JoinUs/icon-3.svg";
import { useRouter } from "next/router";

const JoinUs = () => {
  const router = useRouter();
  const handleGoTo = (location) => {
    let x = location;
    if (x !== "/") {
      router.push(x);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.joinUsWrapper} id="howitswork">
      <div className={styles.mainTitleMobileWhite}>
        <span>You Know</span>
        <h4>How it Works</h4>
      </div>

      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src={Icon1}
            alt=""
            className={styles.cardIcon}
            min-width={40}
            max-width={40}
          />
          <span>
            Submit the completed Application Form and the Required Documents
          </span>
          <div className={styles.btn} onClick={() => handleGoTo("/apply")}>
            Get a visa
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={Icon2}
            alt=""
            className={styles.cardIcon}
            min-width={40}
            max-width={40}
          />
          <span>E-Visa and Work Permit Issuance within 7 working days.</span>
        </div>
        <div className={styles.card}>
          <Image
            src={Icon3}
            alt=""
            className={styles.cardIcon}
            min-width={40}
            max-width={40}
          />
          <span>
            Medical Examination until Residence Visa Approval within the next 10
            working days.
          </span>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
