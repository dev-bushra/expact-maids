import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Card from 'react-bootstrap/Card';
import {FiArrowRight} from 'react-icons/fi'
import classnames from "classnames";
import {BsCheckCircleFill} from 'react-icons/bs';
import {FiUploadCloud} from 'react-icons/fi';
import {BsCheck2Circle} from 'react-icons/bs';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BannerImg from '../../../assets/images/ThankYou/thank_you_banner_img.png'
import SmallStarsImg from '../../../assets/images/ThankYou/small_stars_img.png'

function Banner() {
return (
    <Container fluid className={styles.thankYouWrapper}>
        <div className={styles.Row}>
            <div  className={styles.TextCol}>
                <div className={styles.leftTxtCol}>
                    <h1 className={styles.ThankuTxt}>Thank You!</h1>
                    <div className={styles.Txt}>
                        <span className={styles.body}>
                            Your visa sponsorship application <br/> 
                            form was completed successfully 
                        </span>
                        <span className={styles.subBody}>We will get back you soon..</span>
                    </div>
                <Image
                src={BannerImg}
                alt=""
                className={styles.bannerImg}
                /> 
                </div>
            </div>
        </div>
    </Container>
    );
}
export default Banner;