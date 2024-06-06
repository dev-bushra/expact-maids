import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { FiArrowLeftCircle, FiArrowRightCircle } from 'react-icons/fi';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const Platform = () => {
    let [content, setContent] = useState([
        {title: 'Visa Cost', package: 'AED 10,000', private: 'AED 19,000' },
        {title: 'Visa Validity', package: '2 years', private: '1 year' },
        {title: 'Health Insurance', package: '2 years', private: '1 year' },
        {title: 'Required Documents from you', package: '', private: '' },
        {title: 'Typing Center Visit', package: 'O', private: 'Up to 8 times' },
        {title: 'WPS Payroll', package: 'O', private: 'Apply through an Exchange House' },
        {title: 'HR Support', package: 'O', private: 'x' },
        {title: 'Mobile App & Portal Access', package: 'O', private: 'x' },
    ]);
    let [toggler, setToggler] = useState(1);

    return ( 
        <div className={styles.preferWrapper} id="prefer">
            <div className="mainTitleMobile">
                <h4>Find out why customers prefer us</h4>
            </div>
            <div className={styles.FindOutSection}>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>Visa Cost</div>
                    <div className={styles.TwoColInOne}>
                    { toggler == 1 ? 
                        <div className={styles.ColA}>{ content[0].package }</div> :
                        <div className={styles.ColB}>{ content[0].private }</div> }
                    </div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>Visa validity</div>
                    <div className={styles.TwoColInOne}>
                    { toggler == 1 ? 
                        <div className={styles.ColA}>{ content[1].package }</div> :
                        <div className={styles.ColB}>{ content[1].private }</div> }
                    </div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>Health Insurance</div>
                    <div className={styles.TwoColInOne}>
                    { toggler == 1 ? 
                        <div className={styles.ColA}>{ content[1].package }</div> :
                        <div className={styles.ColB}>{ content[1].private }</div> }
                    </div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>Required Documents from you</div>
                    <div className={styles.TwoColInOne}>
                    { toggler == 1 ? 
                            <div className={styles.ColABig}>
                                <ul className="ml-3">
                                    <li>Passport Copy</li>
                                    <li>Residence Visa Copy</li>
                                    <li>Emirates ID Copy</li>
                                </ul>
                            </div>
                            :
                            <div className={styles.ColBBig} style={{ height: 'fit-content' }}>
                                <ul className="ml-3">
                                    <li>Passport Copy</li>
                                    <li>Residence Visa Copy</li>
                                    <li>Original Emirate ID</li>
                                    <li>Minimum Salary of AED 25,000</li>
                                    <li>
                                    Ejari/Tenancy Contract (At least 2 Bedroom Flat + Maids Room)
                                    </li>
                                    <li>Attested Marriage Certificate</li>
                                    <li>
                                    Embassy Deposit and Documentation (if you are hiring a
                                    relative)
                                    </li>
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>Typing Centre Visit</div>
                    <div className={styles.TwoColInOne}>
                    { toggler == 1 ? 
                        <div className={styles.ColA}>
                            None
                                    </div> :
                        <div className={styles.ColB}>{ content[4].private }</div> }
                    </div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>WPS Payroll</div>
                    <div className={styles.TwoColInOne}>
                        { 
                        toggler == 1 ? 
                                <div className={styles.ColA}>
                                    <BsFillCheckCircleFill
                                    style={{ color: "#1ebea5", fontSize: 30 }}
                                    />
                                </div> 
                        :
                            <div className={styles.ColB}>{ content[5].private }</div> 
                        }
                    </div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>HR Support</div>
                    <div className={styles.TwoColInOne}>
                    { toggler == 1 ? 
                            <div className={styles.ColA}>
                                <BsFillCheckCircleFill
                                    style={{ color: "#1ebea5", fontSize: 30 }}
                                    /></div> :
                        <div className={styles.ColB}>
                                <AiFillCloseCircle style={{ color: "#ff5555", fontSize: 30 }} />
                            </div>}
                    </div>
                </div>
                <div className={styles.Row}>
                    <div className={styles.TitleCol}>Mobile App & Portal Access</div>
                    <div className={styles.TwoColInOne}>
                    { toggler == 1 ? 
                            <div className={styles.ColA}>
                                <BsFillCheckCircleFill
                                    style={{ color: "#1ebea5", fontSize: 30 }}
                                    /></div> :
                        <div className={styles.ColB}>
                                <AiFillCloseCircle style={{ color: "#ff5555", fontSize: 30 }} />
                            </div>}
                    </div>
                </div>
            </div>
            <div className={styles.ArrowsContainer}>
                { toggler == 1 ? 
                    <BsArrowRightCircleFill className={styles.Arrow} onClick={ () => { setToggler(0) }} style={{ color: 'rgb(30, 190, 165)' }} /> 
                    :
                    <BsArrowLeftCircleFill className={styles.Arrow} onClick={() => { setToggler(1) }} />
                }
            </div>
        </div>
    );
}
export default Platform;