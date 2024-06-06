import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { Container } from "react-bootstrap";
import styles from "./styles.module.scss";
import Gdrfa from "../../../assets/images/about/gdfra_logo.png";
import Mohre from "../../../assets/images/about/mohre.png";
import Tabee from "../../../assets/images/about/tabee.png";
import Icon1 from "../../../assets/icons/about/about_icon_1.svg";
import Icon2 from "../../../assets/icons/about/about_icon_2.svg";
import Icon3 from "../../../assets/icons/about/about_icon_3.svg";

const About = () => {
  return (
    <Container className={styles.aboutWrapper} id="about">
      <Row className={styles.aboutContent}>
        <Row className={styles.abouttop}>
          <Col md={12}>
            <h3 className={styles.title} data-aos="zoom-in">
              Expat Maids is licensed and registered by the
              <br /> Ministry of Human Resources & Emiratisation (MOHRE)
            </h3>
          </Col>
          <Row className={styles.AboutLogo}>
            <Col md={3} lg={3} className={styles.AboutSingleLogo}>
              <Image
                src={Gdrfa}
                alt="logos"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </Col>
            <Col md={3} lg={3} className={styles.AboutSingleLogo}>
              <Image
                src={Mohre}
                alt="logos"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </Col>
            <Col md={3} lg={3} className={styles.AboutSingleLogo}>
              <Image
                src={Tabee}
                alt="logos"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              />
            </Col>
          </Row>
        </Row>
        <Row className={styles.aboutfooter}>
          <h2 className={styles.title} data-aos="zoom-in">
            Trusted. Transparent. Safe.
          </h2>
          <div className={styles.smallIconsContainer}>
            <div className={styles.smallIcon}>
              <Image src={Icon1} alt="logos" className="m-2" />
              <span>Take care of visa processing</span>
            </div>
            <div className={styles.smallIcon}>
              <Image src={Icon2} alt="logos" className="m-2" />
              <span>Guaranteed Maid Replacement</span>
            </div>
            <div className={styles.smallIcon}>
              <Image src={Icon3} alt="logos" className="m-2" />
              <span>ATM Salary Card(for WPS)</span>
            </div>
            <div className={styles.smallIcon}>
              <Image src={Icon1} alt="logos" className="m-2" />
              <span>Quick Respond on the Tickets</span>
            </div>
          </div>
        </Row>
      </Row>
    </Container>
  );
};
export default About;
