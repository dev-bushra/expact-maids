import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";

//BOOTSTRAP
import { Row, Col, Container } from "react-bootstrap";

// ASSETS
import styles from "./styles.module.scss";
import Logo from "../../../assets/images/DM-Official-Logo-White.png";
import DarkLogo from "../../../assets/images/DM-Official-Logo.png";
import PhoneIcon from "../../../assets/icons/navbar/phone-ringing.svg";
import { useRouter } from "next/router";

function Navbar({ useDarkLogo = false }) {
  const [y, setY] = useState(0);
  const [whiteBg, setWhiteBg] = useState(false);
  const router = useRouter();

  const handleGoTo = (location) => {
    let x = location;
    if (x !== "/") {
      router.push(x);
    } else {
      router.push("/");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);
  }, []);

  const changeNavbarBg = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY > 120) {
        setWhiteBg(true);
      } else if (window.scrollY <= 120) {
        setWhiteBg(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", changeNavbarBg);
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, [changeNavbarBg]);

  const callMe = () => {
    window.open("tel:043544466", "_self");
  };

  return (
    <div
      className={classnames(
        styles.navbarWrapper,
        whiteBg ? styles.whiteBg : styles.transparentBg
      )}
      data-aos="fade-down"
    >
      <div className={styles.navbarContent}>
        <div className={styles.logoWrapper}>
          {whiteBg || useDarkLogo ? (
            <div onClick={() => handleGoTo("/")}>
              <Image
                src={DarkLogo}
                alt="Darklogo"
                className={styles.logo}
                property
                width={240}
                height={40}
              />
            </div>
          ) : (
            <div onClick={() => handleGoTo("/")}>
              <Image
                src={Logo}
                alt="Logo"
                className={styles.Logo}
                property
                height={40}
              />
            </div>
          )}
        </div>
        <div className={styles.navTextWrap}>
          <ul className={classnames("d-none d-lg-flex", styles.navUl)}>
            {/* <li>
              <Link href="/#about">About us</Link>
            </li> */}
            <li>
              <div className={styles.dropdown}>
                <span>
                  Packages{" "}
                  <span
                    className={classnames(styles.chevron, styles.chevronBottom)}
                  ></span>
                </span>
                <div className={styles.dropdownContent}>
                  <div className={styles.dropdownCC}>
                    <p onClick={() => handleGoTo("/#packages")}>
                      Package Pricing
                    </p>
                    <p onClick={() => handleGoTo("/#prefer")}>
                      Compare Our Service
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div onClick={() => handleGoTo("/#testimonials")}>
                Testimonials
              </div>
            </li>
            <li>
              <div onClick={() => handleGoTo("/#platform")}>Platform</div>
            </li>
            <li>
              <div onClick={() => handleGoTo("/#howitswork")}>How it works</div>
            </li>
            <li>
              <div onClick={() => handleGoTo("/#faqs")}>FAQs</div>
            </li>
            <li>
              <div onClick={() => handleGoTo("/contact")}>Contact</div>
            </li>
            <div>
              <div onClick={() => callMe()} className={styles.callUsWrapper}>
                <Image
                  src={PhoneIcon}
                  alt="phone icon"
                  width={28}
                  height={26}
                />
                <div className={styles.callUsText}>
                  Call Us : <b className={styles.ml2}>04 237 8312</b>
                </div>
              </div>
            </div>
            {/* <li className={styles.portalLogin}>
              <a href="https://client.expatmaids.ae" target="_blank">
                <b>Portal Login</b>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
