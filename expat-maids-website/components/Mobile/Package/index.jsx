import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";
import classnames from "classnames";
import Tab from "../../shared/Tab";
import CheckIcon from "../../../assets/icons/check-icon.png";
import CheckIconGreen from "../../../assets/icons/check-icon-green.png";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";

// import ServiceBg from "../../../assets/images/service-bg.png"

const Package = () => {
  const [toggleState, setToggleState] = useState(0);
  const router = useRouter();

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleGetStarted = () => {
    router.push("/contact");
  };

  return (
    <div className={styles.packageWrapper} id="packagesmobile">
      <div className={styles.mainTitleMobileWhite}>
        <span>Service Plan</span>
        <h4>Most affordable Package</h4>
      </div>
      {/* 
      <div className={styles.packageTogglerRow}>
        <div className={styles.packageTogglerContainer}>
          <div
            className={classnames(
              styles.packageNotSelected,
              toggleState === 0
                ? styles.packageSelected
                : styles.packageNotSelected
            )}
            onClick={() => toggleTab(0)}
          >
            Domestic Worker
          </div>
          <div
            className={classnames(
              styles.packageNotSelected,
              toggleState === 1
                ? styles.packageSelected
                : styles.packageNotSelected
            )}
            onClick={() => toggleTab(1)}
          >
            Live-in Worker
          </div>
        </div>
      </div> */}

      <div className={styles.packagesCardRow}>
        <div className={styles.packagesCardContainer}>
          <div
            className={classnames(
              styles.card1,
              toggleState === 0 ? styles.card1 : styles.dNone
            )}
          >
            <div className={styles.s1}>
              <h5>2 Years Package Plan</h5>
              <div className={styles.price}>
                <h3>AED 8,500</h3>
                <span>10,000</span>
              </div>
              {/* <span className={styles.vat}>*VAT exc - Upfront Cost</span> */}
            </div>
            <div className={styles.s2}>
              <div className={styles.check}>
                <Image src={CheckIcon} width={16} height={16} alt="checkIcon" />
                <span>Residence Visa</span>
              </div>
              <div className={styles.check}>
                <Image src={CheckIcon} width={16} height={16} alt="checkIcon" />
                <span>Work Permit</span>
              </div>
              <div className={styles.check}>
                <Image src={CheckIcon} width={16} height={16} alt="checkIcon" />
                <span>Medical Examinations</span>
              </div>
              <div className={styles.check}>
                <Image src={CheckIcon} width={16} height={16} alt="checkIcon" />
                <span>Emirates ID Registration</span>
              </div>
              <div className={styles.check}>
                <Image src={CheckIcon} width={16} height={16} alt="checkIcon" />
                <span>Health Insurance</span>
              </div>
              <div className={styles.check}>
                <Image src={CheckIcon} width={16} height={16} alt="checkIcon" />
                <span>ATM Salary Card(for WPS)</span>
              </div>
            </div>
            <span className={styles.footer}>
              AED 150 – Monthly Service Fee <br />
              Renewal Price: AED 7500 upfront and AED 150 per month.
            </span>

            <div className={styles.primaryBtn} onClick={handleGetStarted}>
              <span>Get Started</span>
              <BsFillArrowRightCircleFill
                style={{ fontSize: "18px", marginLeft: "0.5rem" }}
              />
            </div>
          </div>

          <div
            className={classnames(
              styles.labelText,
              toggleState === 0 ? styles.labelText : styles.dNone
            )}
            style={{
              textAlign: "center",
              margin: "1rem auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <label style={{ textAlign: "center" }}>
              The cost includes Work Permit Issuance, Medical Applications,
              Emirates ID Applications, Residence Visas, and Standard Health
              Insurance.
              <br />
              <strong> Note: </strong> 5% VAT will apply over and above the
              package fees. 
            </label>
          </div>

          <div
            className={classnames(
              styles.card1,
              toggleState === 1 ? styles.card2 : styles.dNone
            )}
          >
            <div className={styles.s1}>
              <h5>Full Time Package Plan</h5>
              <div className={styles.priceContainer}>
                <div className={styles.price}>
                  <p className={styles.weekly}>Weekly</p>
                  <div className={styles.priceTitle}>
                    <h3>AED 1,200</h3>
                    <span>(VAT Includes)</span>
                  </div>
                </div>
                <div className={styles.price}>
                  <p className={styles.weekly}>Monthly</p>
                  <div className={styles.priceTitle}>
                    <h3>AED 4,500</h3>
                    <span>(VAT Includes)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.s2}>
              <div className={styles.check}>
                <Image
                  src={CheckIconGreen}
                  width={16}
                  height={16}
                  alt="checkIcon"
                />
                <span>Residence Visa</span>
              </div>
              <div className={styles.check}>
                <Image
                  src={CheckIconGreen}
                  width={16}
                  height={16}
                  alt="checkIcon"
                />
                <span>Work Permit</span>
              </div>
              <div className={styles.check}>
                <Image
                  src={CheckIconGreen}
                  width={16}
                  height={16}
                  alt="checkIcon"
                />
                <span>Medical Examinations</span>
              </div>
              <div className={styles.check}>
                <Image
                  src={CheckIconGreen}
                  width={16}
                  height={16}
                  alt="checkIcon"
                />
                <span>Emirates ID Registration</span>
              </div>
              <div className={styles.check}>
                <Image
                  src={CheckIconGreen}
                  width={16}
                  height={16}
                  alt="checkIcon"
                />
                <span>Health Insurance</span>
              </div>
              <div className={styles.check}>
                <Image
                  src={CheckIconGreen}
                  width={16}
                  height={16}
                  alt="checkIcon"
                />
                <span>ATM Salary Card(for WPS)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
