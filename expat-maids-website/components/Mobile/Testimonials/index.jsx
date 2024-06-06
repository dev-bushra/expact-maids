import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import Image from "next/image";
import CustomerOne from '../../../assets/images/Customer/Ellipse 115.png'
import CustomerTwo from '../../../assets/images/Customer/Ellipse 116.png'
import CustomerThree from '../../../assets/images/Customer/Ellipse 117.png'
import Stars from '../../../assets/images/Customer/test-stars.png'
import { RxDotFilled } from 'react-icons/rx';
import { RxDot } from 'react-icons/rx';

const Customer = () => {
    return ( 
        <div className={styles.customerWrapper}>

            <div className={styles.col1}>
                <div className={styles.mainTitleMobileWhite}>
                    <span>Testimonials</span>
                    <h4>Our customers say It best</h4>
                </div>
                {/* <div className={styles.body}>
                    <span className={styles.caption}>How it works</span>
                    <p className={styles.captionP}>Expat maid is an epitome of the so called-outstanding customer service provider with no doubt</p>
                </div> */}
                <div className={styles.bottomContainer}>
                    <div className={styles.bottom}>
                        <span className={styles.starCount}>4.5</span>
                        <Image src={Stars} alt="" width={120} height={20} />
                    </div>
                    <span className={styles.sub}>Average of our client ratings</span>
                </div>
            </div>

            <div className={styles.col2}>
                <div className={styles.card}>
                    <div className={styles.userDetails}>
                    <Image
                    src={CustomerOne}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.cardImg}
                    />
                    <h6 className={styles.userName}>Ehab</h6>
                    </div>
                    <div className={styles.cardText}>
                        <span> My only interface with your company has been in dealing with Ms. Grace and she has shown from the beginning great professionalism and a thorough approach in her dealing with me.  This has made the process very clear and straightforward from the start. Thanks!
</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.userDetails}>
                    <Image
                    src={CustomerTwo}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.cardImg}
                    />
                    <h6 className={styles.userName}>Andrew</h6>
                    </div>
                    <div className={styles.cardText}>
                        <span> Expat Maids has provided an easy solution for sponsoring our Nanny. Communication has been very easy and regular through their WhatsApp chat which has made the process transparent and relatively quick.
</span>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.userDetails}>
                    <Image
                    src={CustomerThree}
                    alt=""
                    width={40}
                    height={40}
                    className={styles.cardImg}
                    />
                    <h6 className={styles.userName}>Morris</h6>
                    </div>
                    <div className={styles.cardText}>
                        <span>              The process was so easy, and the coordination was hassle-free. It is so convenient and saves a lot of my time as compared to previous years (i.e., when I was processing the visa renewal of my nannies on my own under my sponsorship).
</span>
                    </div>
                </div>
            </div>

            <div className={styles.col3}>
                <div className={styles.dotsCon}>
                    <RxDot />
                    <RxDotFilled />
                    <RxDot />
                </div>
            </div>

        </div>
    );
}

export default Customer;