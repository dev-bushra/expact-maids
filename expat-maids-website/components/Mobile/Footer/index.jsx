import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "../../../assets/images/DM-Official-Logo.png";
import IconOne from "../../../assets/icons/sub-card-icon-1.png";
import IconTwo from "../../../assets/icons/sub-card-icon-2.png";
import { useRouter } from 'next/router'
import Link from "next/link";

const Footer = () => {
    const router = useRouter();
    const [link, setLink] = useState('https://www.google.com/maps/dir//dynamic+maids+google+maps/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3e5f5f9fafe3f8b1:0x5104a5f8b404f0d3?sa=X&ved=2ahUKEwjGsoPIjdn9AhViRaQEHUxsAbwQ9Rd6BAhXEAU');
    const handleGetStarted = (e) => {
        e.preventDefault()
        router.push('/apply');
    };
    const handleCallUs = (e) => {
        e.preventDefault()
        router.push('/contact');
    };
    const handleMeetUs = (e) => {
        e.preventDefault()
        window.open('/contact');
    };

    return ( 
        <div className={styles.footerWrapper}>
            <div className={styles.cards}>
                <h4 className={styles.cardTitle}>Apply for your maid’s visa,<br /> it’s easy.</h4>
                <div className={styles.subCardsWrapper}>
                    <div className={styles.subCard}>
                        <Image
                        className={styles.cardIcon}
                        src={IconOne}
                        alt=""
                        width={50}
                        height={50}
                        />
                        <h5>Submit your application online.</h5>
                        <span className={styles.subCardSubText}>
                            Our online application takes just few minutes to complete. 
                            You can also track the status of your application online.
                        </span>
                        <div className={styles.primaryBtn1} onClick={handleGetStarted}>
                            <span className={styles.primaryBtnTxt}>Get Started</span>
                        </div>
                    </div>
                    <div className={styles.subCard}>
                        <Image
                        src={IconTwo}
                        alt=""
                        width={50}
                        height={50}
                        />
                        <h5>Call us / Visit our office</h5>
                        <span className={styles.subCardSubText}>
                        Visit our offices in Dubai Rez to talk to us directly or call us to speak to one of our consultants. 
                        </span>
                        <div className={styles.btnsWrapper}>
                            <div className={styles.primaryBtn} onClick={handleCallUs}>
                                <span className={styles.primaryBtnTxt}>Call Us</span>
                            </div>
                            <div className={styles.secondaryBtn} onClick={handleMeetUs}>
                                <span className={styles.secondaryBtnTxt}>Schedule a Meeting </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <p className={styles.details}>Monday to Friday-9:00am to 6:00pm<br/>Call us: 04 237 8312<br/>Office 1006, 10th Floor, Rez Plaza, <br/>Dubai Rez, Dubai, UAE</p>
                        <p className={styles.hiring}>Sponsored By Us,<br/>Working For You.</p>
                        <Image
                        src={Logo}
                        alt="logo"
                        width={190}
                        height={44}
                        className={styles.logo}
                        />
                    </div>
                    <div className={styles.right}>
                        <div onClick={()=> router.push('/')} className={styles.cursorPointer}>Home</div>
                        <div onClick={()=> router.push('/#packages')} className={styles.cursorPointer}>Packages</div>
                        <div onClick={()=> router.push('/#howitswork')} className={styles.cursorPointer}>How it works</div>
                        <div onClick={()=> router.push('/#faqs')} className={styles.cursorPointer}>FAQ</div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>Copyright © 2004-2023 Expat Maids. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
export default Footer;