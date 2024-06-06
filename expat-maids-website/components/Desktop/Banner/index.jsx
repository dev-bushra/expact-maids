import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import BannerImg from "../../../assets/images/hero/banner-img.png";
import ButtonIcon from "../../../assets/images/hero/banner-btn-icon.png";
import UserPic from "../../../assets/images/hero/user-5.png";
// import ChatIcon from "../../../assets/images/hero/chat_icon.svg";
import StarsIcon from "../../../assets/icons/hero/star.png";
import BannerElement1 from "../../../assets/images/banner_elements.svg";
import BannerElement2 from "../../../assets/images/banner_elements2.svg";
import { BiPhoneCall } from "react-icons/bi";
// import ContactDialog from "../ContactDialog";
import { useRouter } from "next/router";
import gsap from "gsap";
import classnames from "classnames";

// ChatBot icons
import {
  AiOutlineWhatsApp,
  AiOutlineSend,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
import Lottie from "lottie-react";

function Banner() {
  const router = useRouter();
  const messageRef = useRef();
  const util = gsap.utils.selector(messageRef);

  const [toggle, setToggle] = useState(false);

  const handleContactUs = () => {
    router.push("/contact");
  };
  const handleApplyOnline = () => {
    router.push("/apply");
  };
  const whatsappClick = () => {
    setToggle(!toggle);
  };
  function changeText2() {
    var userInput = document.getElementById("userInput").value;
    var lnk = document.getElementById("lnk");
    lnk.href = "https://wa.me/971555190640?text=" + userInput;

    window.open = ("https://wa.me/971555190640?text=" + userInput, "_blank");
  }
  useLayoutEffect(() => {
    gsap.set(util(".whatsapp-bubble-input"), {
      opacity: 0,
      x: 100,
    });
    gsap.set(util(".whatsapp-bubble"), {
      opacity: 0,
    });
    gsap.set(util(".textloading"), {
      y: 120,
    });
    gsap.set(messageRef.current, {
      // opacity: 0,
      // pointerEvents: "none",
      // x: -100,
    });
    // gsap.set(messageRef.current, {
    //   x: -100,
    //   opacity: 0,
    // });
  }, []);
  const callMe = () => {
    router.push("/apply");
    // window.open("tel:043544466", "_self");
  };

  return (
    <Container fluid className={styles.mainBannerWrapper}>
      {/* ChatBot */}
      <div
        className={classnames(
          styles.whatsappContainer,
          toggle ? styles.heightFull : styles.heightHalf
        )}
        ref={messageRef}
      >
        <div className={styles.whatsappMenu} onClick={whatsappClick}>
          <div className={styles.whatsappRow}>
            <AiOutlineWhatsApp className={styles.whatsappIcon} />
            <p className={styles.whatsappName}>Chat with us now</p>
          </div>
          {toggle ? (
            <AiOutlineArrowDown className={styles.whatsappIcon2} />
          ) : (
            <AiOutlineArrowUp className={styles.whatsappIcon2} />
          )}
        </div>
        {toggle && (
          <div className={styles.whatsappContentContainer}>
            <div className={styles.whatsappRow}>
              <div className={styles.whatsappPerson} />
              <div className={styles.whatsappBubble}>
                Connect with us using Whatsapp!
              </div>
            </div>
            <div className={styles.whatsappBubbleInput}>
              <Lottie className={styles.lottieText} />
            </div>
            <div className={styles.whatsappRow}>
              <input
                id="userInput"
                placeholder="Send a message to Expat Maids!"
                className={styles.whatsappInput}
              />
              <a
                className={styles.whatsappButton}
                href=""
                id="lnk"
                rel="canonical"
                target="_blank"
                onClick={changeText2}
              >
                <AiOutlineSend className={styles.whatsappIcon3} />
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <Row className={styles.bannerWrapper} id="banner">
        <Col md={6} className={styles.bannerImgContainer} data-aos="fade-right">
          <div className={styles.bannerSubImg}>
            <div className={styles.UserAvatar}>
              <Image
                src={UserPic}
                alt=""
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h6 className="">Clinton Lobo</h6>
                <Image src={StarsIcon} alt="" />
              </div>
            </div>
            <p className="mt-3">
              Did our maids visa through Expat Maids, service was very
              professional, quick with timely feedback through the entire
              process.
            </p>
          </div>
          <div>
            <Image src={BannerImg} alt="" className={styles.bannerImg} />
          </div>
        </Col>
        <Col md={6} className={styles.bannerTextContainer} data-aos="fade-left">
          <div>
            <div className={styles.ElementGroup}>
              <Image
                src={BannerElement1}
                className={styles.bannerElement1}
                alt=""
              />
              <Image
                src={BannerElement2}
                className={styles.bannerElement2}
                alt=""
              />
            </div>
            <h1 className={styles.bannerText}>
              <b>Sponsored By Us,</b> <br />
              <span>Working For You.</span>
            </h1>
            <div className={styles.bannerButtonsContainer}>
              <span className={styles.bannerSubtext}>To know more details</span>
              <div className={styles.bannerButtons}>
                <div className={styles.primaryBtn} onClick={handleContactUs}>
                  Contact Us
                </div>
                <div
                  onClick={() => callMe()}
                  className={classnames(
                    styles.secondaryBtn,
                    styles.textDecNone
                  )}
                >
                  Get a Visa
                  {/* <BiPhoneCall style={{marginRight: "10px" }} />
                  043544466 */}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className={styles.BannerFooter}>
        <p>
          Monday to Friday
          <span>9:00 AM to 6:00 PM</span>
        </p>
      </div>
    </Container>
  );
}
export default Banner;
