import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";
import classnames from "classnames";
import Tab from "../../shared/Tab";
import CheckIcon from "../../../assets/icons/check-icon.png";
import CheckIconGreen from "../../../assets/icons/check-icon-green.png";
import {BsFillArrowRightCircleFill} from 'react-icons/bs';
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
    <div className={styles.packageWrapper} id="packages">
      {/* row-1 */}
      <div className={styles.packageSubWrap}>
        {/* <div className={styles.row1} data-aos="zoom-out-down">
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
              Domestic Worker Visa Package
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
              Live-in Worker Visa Package
            </div>
          </div>
        </div> */}

        {/* row-2 */}
        <div className={styles.row2}>
          {/* col-1 */}
          <div className={styles.col1} data-aos="zoom-in">
            <div className={styles.mainTitle}>
              <span>Plan</span>
              <h3>
              Domestic 
                <br />Maid Visa Package
              </h3>
            </div>
          </div>

          {/* col-2 */}
          <div className={styles.col2}>
            {/* card-1 */}
            <div
              className={classnames(
                styles.card1,
                toggleState === 0 ? styles.card1 : styles.dNone
              )}
            >
              <div className={styles.s1}>
                <h6>
                  2 Years <br /> Package Plan
                </h6>
                <div className={styles.price}>
                  <h3>AED 8,500</h3>
                  <span>10,000</span>
                </div>
                {/* <span className={styles.vat}>*VAT exc - Upfront Cost</span> */}

                <div className={styles.footer}>
                  <span style={{display: 'inline'}}>
                    <span style={{fontWeight: 'bold'}}>AED 150</span> - <div style={{textDecoration: 'line-through', display: 'inline'}}>AED 180</div> <br /> Monthly Service Fee<br />
                    <br />
                    <span style={{fontWeight: 'bold'}}>Renewal Price:</span> AED 7500 upfront and AED 150 per month</span>
                </div>

                <div
                  className={styles.primaryBtn}
                  onClick={handleGetStarted}
                >
                  <span>Get Started</span>
                  <BsFillArrowRightCircleFill style={{fontSize:'18px', marginLeft: '0.5rem'}} />
                </div>

              </div>

              <div className={styles.s2}>
                <div className={styles.check}>
                  <Image
                    src={CheckIcon}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Residence Visa</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIcon}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Work Permit</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIcon}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Medical Examinations</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIcon}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Emirates ID Registration</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIcon}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Health Insurance</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIcon}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>ATM Salary Card(for WPS)</span>
                </div>
              </div>
            </div>
            <label
              className={classnames(
                toggleState === 0 ? styles.subText : styles.dNone
              )}
              style={{textAlign: 'center', margin: '0.5rem auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              The cost includes Work Permit Issuance, Medical Applications, Emirates ID Applications, Residence Visas, and Standard Health Insurance.
              <br />
              Note: 5% VAT will apply over and above the package fees. 
              </label>

            {/* card-2 */}
            <div
              className={classnames(
                styles.card1,
                toggleState === 1 ? styles.card2 : styles.dNone
              )}
            >
              <div className={styles.s1}>
                <h5>
                  Full Time
                  <br /> Package Plan
                </h5>
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
                  <div className={styles.price}>
                    <p className={styles.weekly}>Yearly</p>
                    <div className={styles.priceTitle}>
                      <h3>AED 3,500</h3>
                      <span>(VAT Includes)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.s2}>
                <div className={styles.check}>
                  <Image
                    src={CheckIconGreen}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Residence Visa</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIconGreen}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Work Permit</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIconGreen}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Medical Examinations</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIconGreen}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Emirates ID Registration</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIconGreen}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>Health Insurance</span>
                </div>
                <div className={styles.check}>
                  <Image
                    src={CheckIconGreen}
                    width={24}
                    height={24}
                    alt="checkIcon"
                  />
                  <span>ATM Salary Card(for WPS)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
