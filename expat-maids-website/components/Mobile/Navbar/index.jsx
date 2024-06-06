import React, { useEffect, useState, useCallback } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import classnames from "classnames";
import MenuIcon from "../../../assets/icons/navbar/hmenu-icon.svg";
import PhoneIcon from "../../../assets/icons/navbar/phone-icon.svg";
import ProfileIcon from "../../../assets/icons/navbar/profile-icon.svg";
import Logo from "../../../assets/images/DM-Official-Logo-White.png";
import DarkLogo from "../../../assets/images/DM-Official-Logo.png";
import {
  SlSocialLinkedin,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";
import {CiFacebook} from 'react-icons/ci'
import {FiFacebook} from 'react-icons/fi'
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

function Navbar({ useDarkLogo = false }) {
  const [y, setY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsOpen(false);
  };
  const handleGoTo = (location) => {
    router.push(location);
    setIsOpen(false);
  };
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else if (window.scrollY <= 120) {
        setIsScrolled(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleNavOpen = (e) => {
    e.preventDefault();
    if (isOpen) {
      handleClose(e);
    } else {
      setIsOpen(true);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    const sideBar = document.getElementById("sideBar");
    const sideBarWrap = document.getElementById("sideBarWrap");
    sideBar.classList.add(styles.slideOut);
    sideBarWrap.classList.add(styles.opacityZero);
    setIsOpen(false);
  };

  return (
    <Row
      className={classnames(
        styles.navWrap,
        isScrolled ? styles.bgWhiteNav : ""
      )}
    >
      <Col md={4} xs={4} className={styles.brandWrap}>
        <div>
          {isScrolled || useDarkLogo ? (
            <Image
              src={DarkLogo}
              alt="n & n"
              className={styles.logo}
              priority
            />
          ) : (
            <Image
              src={Logo}
              alt="n & n"
              className={styles.logo}
              priority
            />
          )}
        </div>
      </Col>
      <Col md={8} xs={8} className={styles.navTextWrap}>
        <div className="d-flex justify-content-end mr-2 align-items-center">
          <a
            href="tel:+97143544466"
            className={styles.rightCon}
            style={{ textDecoration: "none" }}
          >
            <div className={styles.callBtn}>
              <Image
                src={PhoneIcon}
                className={styles.callBtnIcon}
                alt=""
                width={25}
              />
              Call us
            </div>
            <Image
              src={ProfileIcon}
              alt=""
              width={35}
              className={styles.ProfileIcon}
            />
          </a>
          <div
            className={classnames("hamburger", isOpen ? "is-active" : "")}
            id="hamburger-11"
            onClick={handleNavOpen}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
        {isOpen ? (
          <div
            className={classnames("d-flex d-lg-none", styles.sideBarWrap)}
            id="sideBarWrap"
          >
            <div className={styles.sideBar} id="sideBar">
              <ul>
                <li>
                  <a onClick={() => handleGoTo("/")}>Home</a>
                </li>
                {/* <li>
                  <a onClick={() => handleGoTo("/#aboutmobile")}>About</a>
                </li>
                <li>
                  <a onClick={() => handleGoTo("/#servicesmobile")}>
                    Services
                  </a>
                </li> */}
                <li>
                  <a onClick={() => handleGoTo("/#packagesmobile")}>
                    Package
                  </a>
                </li>
                <li>
                  <a onClick={() => handleGoTo("/contact")}>Contact Us</a>
                </li>
                <li>
                  <a href="/apply" target="_self">
                  Get a Visa
                  </a>
                </li>
                {/* <li>
                  <div onClick={() => handleGoTo("/")}>More..</div>
                </li> */}
              </ul>
              <div className={styles.socialContent}>
                <p>Follow us on</p>
                <div className={styles.socialWrap}>
                  <a target="_blank" href='https://www.linkedin.com/company/dynamicprofessionalservices'>
                    <SlSocialLinkedin />
                  </a>
                  <a target="_blank" href='https://www.instagram.com/dynamic.cleaners/'>
                    <SlSocialInstagram />
                  </a>
                  <a target="_blank" href='https://www.facebook.com/p/Expat-Maids-100063571302583/'>
                    <FiFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </Col>
    </Row>
  );
}

export default Navbar;
