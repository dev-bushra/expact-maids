import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ServiceBg from "../../../assets/images/service-bg.png";
import StarsIcon from "../../../assets/icons/small-star.png";
import { useRouter } from "next/router";

function Banner() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/contact");
  };

  return (
    <Row className={styles.serviceWrapper} id="servicesmobile">
      <div className={styles.mainTitleMobileWhite}>
        <span>What we provide</span>
        <h4>Visa Solutions and maid help services</h4>
      </div>
      <div className={styles.colContainer}>
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
        {/* <div className={styles.customCard}>
          <h5 className={styles.cardTitle}>Domestic Worker Visa</h5>
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
        </div> */}
      </div>
      <div className={styles.RowContainer}>
        <p className={styles.servicesListMiniTitle}>Service Includes:</p>
        <ul className={styles.servicesListUL}>
          <li className={styles.servicesListLI}>
            <Image
              src={StarsIcon}
              alt=""
              width={16}
              height={16}
              className="mr-6"
            />
            <span>Two Years Residence Visa</span>
          </li>
          <li className={styles.servicesListLI}>
            <Image
              src={StarsIcon}
              alt=""
              width={16}
              height={16}
              className="mr-6"
            />
            <span>Emirates ID</span>
          </li>
          <li className={styles.servicesListLI}>
            <Image
              src={StarsIcon}
              alt=""
              width={16}
              height={16}
              className="mr-6"
            />
            <span>Work Permit</span>
          </li>
          <li className={styles.servicesListLI}>
            <Image
              src={StarsIcon}
              alt=""
              width={16}
              height={16}
              className="mr-6"
            />
            <span>Health Insurance</span>
          </li>
          <li className={styles.servicesListLI}>
            <Image
              src={StarsIcon}
              alt=""
              width={16}
              height={16}
              className="mr-6"
            />
            <span>Employer Protection</span>
          </li>
          <li className={styles.servicesListLI}>
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
    </Row>
  );
}
export default Banner;
