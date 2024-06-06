import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import BannerImg from "../../../assets/images/hero/banner-img.png";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

function Banner() {
  const router = useRouter();

  const handleApply = () => {
    router.push("/apply");
  };
  const handleContactUs = () => {
    router.push("/contact");
  };
  const callMe = () => {
    router.push("/apply");
    // window.open("tel:04 3544466", "_self");
  };

  return (
    <Container fluid className={styles.mainBannerWrapper}>
      <Row className={styles.bannerWrapper} id="banner">
        <div className={styles.bannerTextContainer}>
          <h1 className={styles.bannerText1}>Sponsored By Us,</h1>
          <h1 className={styles.bannerText2}>Working For You</h1>
        </div>
        <div className={styles.bannerButtonsContainer}>
          <div className={styles.ButtonsContainer}>
            <div className={styles.primaryBtn} onClick={handleContactUs}>
              Contact Us
            </div>
            <div
              onClick={() => callMe()}
              className={classnames(styles.secondaryBtn, styles.textDecNone)}
            >
              Get a Visa
              {/* 043544466 */}
            </div>
          </div>
        </div>
        <Image src={BannerImg} alt="" className={styles.bannerImg} />
      </Row>
    </Container>
  );
}
export default Banner;
