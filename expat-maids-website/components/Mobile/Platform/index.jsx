import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import PlatformImg from "../../../assets/images/side_img.png";
import { useRouter } from "next/router";

const Platform = () => {
    const router = useRouter();

    const handleLearnMore = () => {
        router.push("/contact");
    }
    
    return ( 
        <div className={styles.platformWrapper}>
            <div className={styles.mainTitleMobileWhite}>
                <span>Digital Platform</span>
                <h4>
                    Desktop and Mobile App 
                    for employer to track 
                    and manage maids , 
                    at home or in the office.
                </h4>
            </div>

                <Image
                    src={PlatformImg}
                    className={styles.PlatformImg}
                    alt=""
                />

            <div className={styles.mainText}>
                <span className={styles.txt}>
                    Track your maid’s visa application process. Request for NOC’s & other letters on the go. Download your Maid’s Visa documents. View and Select available Maids for Full Time Live In. Create Support tickets. 
                </span>
                <p className={styles.txt}>All through our unique digital portal.</p>
                <div className={styles.primaryBtn} onClick={handleLearnMore}>
                    <span>Coming Soon</span>
                </div>
            </div>
        </div>
    );
}

export default Platform;