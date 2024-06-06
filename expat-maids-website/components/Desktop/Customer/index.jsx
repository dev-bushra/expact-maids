import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";
import CustomerOne from "../../../assets/images/Customer/Ellipse 115.png";
import CustomerTwo from "../../../assets/images/Customer/Ellipse 116.png";
import CustomerThree from "../../../assets/images/Customer/Ellipse 117.png";
import Stars from "../../../assets/images/Customer/test-stars.png";
import classNames from "classnames";

const Customer = () => {
  return (
    <div className={styles.customerSection} id="testimonials">
      <div className={classNames("row", styles.customerWrapper)}>
        <div className={styles.col1}>
          <div className={styles.mainTitle} data-aos="zoom-in">
            <span>Testimonials</span>
            <h3>
              Our customers
              <br /> say It best
            </h3>
          </div>
          {/* <div className={styles.body} data-aos="zoom-out-right">
            <span>How it works</span>
            <p>
              Expat maid is an epitome of the so called-outstanding customer
              service provider with no doubt
            </p>
          </div> */}
          <div className={styles.bottom} data-aos="zoom-out-right">
            <h1>4.5</h1>
            <Image src={Stars} alt="" width={120} height={20} />
            <span className={styles.sub}>Average of our client ratings</span>
          </div>
        </div>
        <div></div>
        <div className={styles.col2}>
          <div
            className={styles.card}
            data-aos="fade-left"
            // data-aos-offset="500"
            // data-aos-duration="300"
          >
            <Image
              src={CustomerOne}
              alt=""
              width={82}
              height={82}
              className=""
            />
            <div>
              <h6>Ehab</h6>
              <span>
              My only interface with your company has been in dealing with Ms. Grace and she has shown from the beginning great professionalism and a thorough approach in her dealing with me.  This has made the process very clear and straightforward from the start. Thanks!
              </span>
            </div>
          </div>
          <div
            className={styles.card}
            data-aos="fade-left"
            // data-aos-offset="500"
            // data-aos-duration="600"
          >
            <Image
              src={CustomerTwo}
              alt=""
              width={82}
              height={82}
              className=""
            />
            <div>
              <h6>Andrew</h6>
              <span>
              Expat Maids has provided an easy solution for sponsoring our Nanny. Communication has been very easy and regular through their WhatsApp chat which has made the process transparent and relatively quick.
              </span>
            </div>
          </div>
          <div
            className={styles.card}
            data-aos="fade-left"
            // data-aos-offset="500"
            // data-aos-duration="900"
          >
            <Image
              src={CustomerThree}
              alt=""
              width={82}
              height={82}
              className=""
            />
            <div>
              <h6>Morris</h6>
              <span>
              The process was so easy, and the coordination was hassle-free. It is so convenient and saves a lot of my time as compared to previous years (i.e., when I was processing the visa renewal of my nannies on my own under my sponsorship).
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customer;
