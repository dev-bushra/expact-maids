import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import Arrow from "../../../assets/icons/arrow-upload.png";
import Logo from "../../../assets/images/DM-Official-Logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const Platform = () => {
  let [content, setContent] = useState([
    {
      title: "Visa Cost",
      package: "AED 10,000",
      private: "AED 19,000",
    },
    {
      title: "Visa Validity",
      package: "2 years",
      private: "1 year",
    },
    {
      title: "Health Insurance",
      package: "2 years",
      private: "1 year",
    },
    {
      title: "Required Documents from you",
      package: "Passport Copy, Residence Visa Copy, emirate id Emirates ID Copy",
      private:
        "Passport Copy, Residence Visa Copy, Original Emirate ID, Minimum Salary of AED 25,000, Ejari/Tenancy Contract (At least 2 Bedroom Flat + Maids Room), Attested Marriage Certificate, Embassy Deposit and Documents (if you are hiring a relate).",
    },
    {
      title: "Typing Center Visit",
      package: "None",
      private: "Up to 8 times",
    },
    {
      title: "WPS Payroll",
      package: "Service Provided",
      private: "Apply through an Exchange House",
    },
    {
      title: "HR Support",
      package: "Service Provided",
      private: "Not Applicable",
    },
    {
      title: "Mobile App & Portal Access",
      package: "Service Provided",
      private: "Not Applicable",
    },
  ]);

  return (
    <div className={styles.preferWrapper} id="prefer">
      <h3 className={styles.title}>Find out why customers prefer us</h3>
      <div className={styles.pa}>
        <div className={styles.rowTitle}>
          <Image src={Logo} alt="" />
          <span>Private Sponsorship</span>
        </div>

        {/*       
                {
                    content.map((item, index) => {
                        return (
                            <Row className={styles.row1} key={index}>
                                <Col md={4} lg={4} className={styles.colo1}>
                                    <span className={styles.text}>{ content[index].title }</span>
                                    <Image src={Arrow} width={9} height={9} className={styles.img} alt="" />
                                </Col>
                                <Col md={8} lg={8} className={styles.colsContainer}>
                                    <span className={styles.colo2}>{ content[index].package }</span>
                                    <span className={styles.colo3}>{ content[index].private }</span>
                                </Col>
                            </Row>
                        );
                    })
                } 
            */}

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>Visa Cost</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>AED 10,000</span>
            <span className={styles.colo3}>AED 19,000</span>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>Visa Validity</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>2 years</span>
            <span className={styles.colo3}>1 year</span>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>Health Insurance</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>2 Years</span>
            <span className={styles.colo3}>1 Year</span>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>Required Documents from you</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>
              <ul className="ml-3">
                <li>Passport Copy</li>
                <li>Residence Visa Copy</li>
                <li>Emirates ID Copy</li>
              </ul>
            </span>
            <span className={styles.colo3}>
              <ul className="ml-3">
                <li>Passport Copy</li>
                <li>Residence Visa Copy</li>
                <li>Original Emirate ID</li>
                <li>Minimum Salary of AED 25,000</li>
                <li>
                  Ejari/Tenancy Contract (At least 2 Bedroom Flat + Maids Room)
                </li>
                <li>Attested Marriage Certificate</li>
                <li>
                  Embassy Deposit and Documentation <br /> (if you are hiring a
                  relative)
                </li>
              </ul>
            </span>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>Typing Centre Visit</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
  
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>
              {/* <BsFillCheckCircleFill
                style={{ color: "#1ebea5", fontSize: 30 }}
              /> */}
               <span >None</span>
            </span>
            <span className={styles.colo3}>Up to 8 times</span>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>WPS Payroll</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>
              <BsFillCheckCircleFill
                style={{ color: "#1ebea5", fontSize: 30 }}
              />
            </span>
            <span className={styles.colo3}>
              Apply through an Exchange House
            </span>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>HR Support</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>
              <BsFillCheckCircleFill
                style={{ color: "#1ebea5", fontSize: 30 }}
              />
            </span>
            <span className={styles.colo3}>
              <AiFillCloseCircle style={{ color: "#ff5555", fontSize: 30 }} />
            </span>
          </Col>
        </Row>

        <Row className={styles.row1}>
          <Col md={4} lg={4} className={styles.colo1}>
            <span className={styles.text}>Mobile App & Portal Access</span>
            <Image
              src={Arrow}
              width={9}
              height={9}
              className={styles.img}
              alt=""
            />
          </Col>
          <Col md={8} lg={8} className={styles.colsContainer}>
            <span className={styles.colo2}>
              <BsFillCheckCircleFill
                style={{ color: "#1ebea5", fontSize: 30 }}
              />
            </span>
            <span className={styles.colo3}>
              <AiFillCloseCircle style={{ color: "#ff5555", fontSize: 30 }} />
            </span>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Platform;
