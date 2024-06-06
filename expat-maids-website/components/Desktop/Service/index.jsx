import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ServiceBg from "../../../assets/images/service-bg.png";
import StarsIcon from "../../../assets/icons/small-star.png";
import { useRouter } from "next/router";
import classNames from "classnames";

function Banner() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <Row className={styles.serviceWrapper} id="services">
      <div className={classNames("row", styles.serviceRow)}>
        <Col xs={12} md={7} className={styles.colContainer}>
          <div className={styles.textSection}>
            <div className={styles.mainTitle}>
              <span
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                What we provide
              </span>
              <h3
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Visa Solutions and
                <br /> Maid Help Services
              </h3>
            </div>
            <p
              className={styles.servicesListMiniTitle}
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Service Includes:
            </p>
            <ul className={styles.servicesListUL}>
              <li
                className={styles.servicesListLI}
                
              >
                <Image
                  src={StarsIcon}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-6"
                />
                <span>Two Years Residence Visa</span>
              </li>
              <li
                className={styles.servicesListLI}
              
              >
                <Image
                  src={StarsIcon}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-6"
                />
                <span>Emirates ID</span>
              </li>
              <li
                className={styles.servicesListLI}
               
              >
                <Image
                  src={StarsIcon}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-6"
                />
                <span>Work Permit</span>
              </li>
              <li
                className={styles.servicesListLI}
             
              >
                <Image
                  src={StarsIcon}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-6"
                />
                <span>Health Insurance</span>
              </li>
              <li
                className={styles.servicesListLI}
    
              >
                <Image
                  src={StarsIcon}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-6"
                />
                <span>Employer Protection</span>
              </li>
              <li
                className={styles.servicesListLI}
           
              >
                <Image
                  src={StarsIcon}
                  alt=""
                  width={16}
                  height={16}
                  className="mr-6"
                />
                <span>Salary Protection</span>
              </li>
            </ul>
          </div>
        </Col>
        <Col
          md={5}
          className={styles.colContainer}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className={styles.customCard}>
            <h5 className={styles.cardTitle}>Domestic Worker Visa</h5>
            <div className={styles.cardTextContainer}>
              <span className={styles.cardText}>2 Years Residence Visa</span>
              <span className={styles.cardText}>
                2 Years Standard Health Insurance
              </span>
              <span className={styles.cardText}>No Typing Centre Visit</span>
              <span className={styles.cardText}>Free HR Support</span>
            </div>
            <div className={styles.cardBtn} onClick={handleClick}>
              View More
            </div>
          </div>
        </Col>
        {/* <Col
          md={8}
          xxl={3}
          className={styles.colContainer}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <div className={styles.customCard}>
            <h5 className={styles.cardTitle}>Full-Time Live-In Maid</h5>
            <div className={styles.cardTextContainer}>
              <span className={styles.cardText}>Fully Sponsored Maids</span>
              <span className={styles.cardText}>
                Experienced and Well-Trained Maids
              </span>
              <span className={styles.cardText}>Free Replacement</span>
              <span className={styles.cardText}>Flexible Payment Plan</span>
            </div>
            <div className={styles.cardBtn} onClick={handleClick}>
              View More
            </div>
          </div>
        </Col> */}
      </div>
    </Row>
  );
}
export default Banner;
