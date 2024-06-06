import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import { FiArrowRight } from "react-icons/fi";
import classnames from "classnames";
import { TbBrandTelegram } from "react-icons/tb";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineAccessTime } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BannerImg from "../../../assets/images/ThankYou/thank_you_banner_img.png";
import SmallStarsImg from "../../../assets/images/ThankYou/small_stars_img.png";
import { BsCheck2Circle } from "react-icons/bs";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast, ToastContainer } from "react-toastify";
import axiosConfig from "../../../utils/axiosConfig";

function Banner() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const { Group, Control, Label } = Form;
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({
    status: false,
    message: "",
    type: [],
  });

  const [validated, setValidated] = useState(false);

  const [loading, setLoading] = useState(false);

  // const debounceMobileFn = useCallback(_debounce(mobileDebounce, 800), [step]);

  const handleMeetUs = (e) => {
    e.preventDefault();
    window.open(
      // "https://www.google.com/maps/dir//n+%26+n+-+Dubai/@25.0751081,55.0986066,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f683066aaaacb:0xa9abb231fb30b22d!2m2!1d55.1398062!2d25.075036"
    );
  };

  // RegExp for Email & Phone
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSend = (e) => {
    e.preventDefault();
    router.push("/thankyou");
  };

  const handleGoHome = () => {
    router.push("/");
  };

  const handleEmailMe = (e) => {
    var subject = "Example Subject";
    var body = "Example Body";
    window.location.href =
      "mailto:bushra.ebox@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
  };
  const handleCallMe = (e) => {
    window.location.href = "tel:+971555190640";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("000: ", fullname, message);
    if (fullname == "" || message == "") {
      toast.error("Fields are is required.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (phone === "") {
      toast.error("Phone number is required.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    if (phone.length < 9) {
      toast.error("Enter Valid Phone Number.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setLoading(true);

    // if (!validateEmail(email)) {
    //   setError({
    //     type: ["email"],
    //     status: true,
    //     message: "Enter Valid Email",
    //   });
    //   return;
    // }
    // if (phone.length < 10) {
    //   setError({
    //     type: ["phone"],
    //     status: true,
    //     message: "Enter Valid Phone Number",
    //   });
    //   return;
    // }
    // const form = e.currentTarget;
    // // if (form.checkValidity() === false) {
    //   e.stopPropagation();
    //   return;
    // }

    const data = {
      fullname: fullname,
      email: email,
      phone: phone,
      urgent: "1 or 2 Months",
      message: message,
    };
    console.log("all from data:", data);

    try {
      const res = await axiosConfig.post("/get-in-touch", data);
      console.log("res:", res.data);
      toast.success("Your Message has send successfully!", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      router.push("/thankyou");
    } catch (err) {
      console.log(err);
      toast.error("Provide Valid Details, Try again.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }

    setValidated(true);
  };

  return (
    <Container fluid className={styles.thankYouWrapper}>
      {/* <div className={styles.mainBtn} onClick={handleSubmit}>
        <span className={styles.next}>Send</span>
      </div> */}
      <div className={styles.Row}>
        {/* <div className="mainTitleMobile">
          <h4>Contact Us</h4>
        </div> */}
        <Col md={12} sm={12} className={styles.Col2}>
          <AiOutlineClose
            className={styles.closeIcon}
            onClick={() => {
              handleGoHome();
            }}
          />
          <Form
            className={styles.contentWrapper}
            validated={validated}
            onSubmit={handleSubmit}
          >
            <h3 className={styles.header}>Get in Touch with Us</h3>
            <div className={styles.formRow}>
              <div md={12} sm={12} className={styles.formCol}>
                {/* <Form.Label className={styles.label}>Full Name <span className={styles.mandatory}>*</span></Form.Label> */}
                <Form.Control
                  className={styles.input}
                  type="text"
                  placeholder="Full Name"
                  onChange={(e) => setFullname(e.target.value)}
                />
              </div>
              <div md={12} sm={12} className={styles.formCol}>
                {/* <Form.Label className={styles.label}>Email <span className={styles.mandatory}>*</span></Form.Label> */}
                <Form.Control
                  className={styles.input}
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  isInvalid={
                    error.status &&
                    (error.type.includes("email") || !validateEmail(email))
                  }
                />
              </div>
              <div md={12} sm={12} className={styles.formCol}>
                {/* <Form.Label className={styles.label}>Phone <span className={styles.mandatory}>*</span></Form.Label> */}
                {/* <Form.Control
                  className={styles.input}
                  type="number"
                  placeholder="Phone"
                /> */}
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="AE"
                  className={styles.input}
                  value={phone}
                  onChange={setPhone}
                />
              </div>
              {/* <div md={12} sm={12} className={styles.formCol}>
                <select
                  className={classnames(styles.input, styles.select)}
                  placeholder="Required in"
                  aria-label="select one option"
                  onChange={(e) => setUrgent(e.target.value)}
                >
                  <option>Required in</option>
                  <option value="1 Month">1 Month</option>
                  <option value="2 Months">2 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="3+ Months">3+ Months</option>
                </select>
              </div> */}
            </div>
            <div md={12} sm={12} className={styles.textAreaContainer}>
              {/* <Form.Label className={styles.label}>Message <span className={styles.mandatory}>*</span></Form.Label> */}
              <Form.Control
                className={styles.textArea}
                as="textarea"
                rows={2}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className={styles.mainBtn} onClick={handleSubmit}>
              <span className={styles.next}>Send</span>
            </div>
          </Form>
        </Col>

        <div md={12} sm={12} className={styles.Col1}>
          <div className={styles.contentWrapper}>
            {/* Header */}
            <div className={styles.header}>
              <span className={styles.headerMainTxt}>
                Have a question?
                <br />
                <b>Drop us a line</b>
              </span>
              <span className={styles.headerSubTxt}>
              We are happy to answer any questions you have. We look forward to hear from you.
              </span>
            </div>

            {/* Contact Info */}
            <div className={styles.contactInfoCard}>
              <div className={styles.timingAndEmailAndphone}>
                <MdOutlineAccessTime
                  style={{ fontSize: "30px", marginBottom: "10px" }}
                />
                <span className={styles.cardTxt}>
                  Monday to Friday
                  <br /> 9:00 AM to 6:00 PM
                </span>
              </div>
              <div
                className={styles.timingAndEmailAndphone}
                onClick={handleEmailMe}
              >
                <TbBrandTelegram
                  style={{ fontSize: "30px", marginBottom: "10px" }}
                />
                <span className={styles.cardTxt}>bushra.ebox@gmail.com</span>
              </div>
              <div
                className={styles.timingAndEmailAndphone}
                onClick={handleCallMe}
              >
                <BiPhoneCall
                  style={{ fontSize: "30px", marginBottom: "10px" }}
                />
                <span className={styles.cardTxt}>+971555190640 | 04 237 8312</span>
              </div>
            </div>

            {/* Location Info */}
            <div className={styles.locationInfoCard}>
              <span className={styles.cardTxt}>
                Office 1340, 13th Floor, Rez Plaza, Dubai Rez, Dubai, UAE
              </span>
              <div className={styles.link} onClick={handleMeetUs}>
                Location Map
              </div>
            </div>
          </div>
        </div>

        <p style={{ margin: "1rem auto", fontSize: "8px", color: "grey" }}>
          Copyright © 2004-2023 Expat Maids.
        </p>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Container>
  );
}
export default Banner;
