import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Logo from "../../../assets/images/DM-Official-Logo.png";
import IconOne from "../../../assets/icons/sub-card-icon-1.png";
import IconTwo from "../../../assets/icons/sub-card-icon-2.png";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
    const router = useRouter();
    return ( 
        <div className={styles.footerWrapper}>
            <div className={styles.content}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <p>Sponsored By Us,<br/> Working For You.</p>
                        <Image
                        src={Logo}
                        alt="logo"
                        width={190}
                        height={44}
                        href="/"
                        />
                    </div>
                    <div className={styles.right}>
                        <div className={styles.div1}>
                        <div onClick={()=> router.push('/')} className={styles.cursorPointer}>Home</div>
                        <div onClick={()=> router.push('/#packages')} className={styles.cursorPointer}>Packages</div>
                        <div onClick={()=> router.push('/#howitswork')} className={styles.cursorPointer}>How it works</div>
                        <div onClick={()=> router.push('/#faq')} className={styles.cursorPointer}>FAQ</div>
                        </div>
                        <div className={styles.div2}>
                            <p>Monday to Friday</p>
                            <p>9:00am to 6:00pm</p>
                            <p>Call Us : 04 237 8312</p>
                            <p className={styles.lastP}>Office 1006, 10th Floor, Rez Plaza, Dubai Rez, Dubai, UAE</p>
                        </div>
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