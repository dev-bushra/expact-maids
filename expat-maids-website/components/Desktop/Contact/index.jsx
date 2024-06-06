import React, { useEffect, useState, useCallback } from "react";
import _debounce from "lodash/debounce";
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
import axiosConfig from "../../../utils/axiosConfig";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast, ToastContainer } from "react-toastify";

function Banner() {
  const [step, setStep] = useState(0);
  const { Group, Control, Label } = Form;
  const router = useRouter();
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
  const [loading, setLoading] = useState(false);

  const [validated, setValidated] = useState(false);

  const debounceMobileFn = useCallback(_debounce(mobileDebounce, 800), [step]);

  const handleMeetUs = (e) => {
    e.preventDefault();
    window.open(
      "https://www.google.com/maps/dir//n+%26+n+-+Dubai/@25.0751081,55.0986066,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3e5f683066aaaacb:0xa9abb231fb30b22d!2m2!1d55.1398062!2d25.075036"
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
    window.location.href = "tel:+97143888400";
  };

  // mobileDebounce
  function mobileDebounce(value) {
    const getCheckElement = document.getElementById("check_loader_pop_mobile");
    const getCheckMarkElement = document.getElementById("checkmark_pop_mobile");
    if (value && isValidPhoneNumber(value)) {
      getCheckElement.classList.add("load-complete");
      getCheckMarkElement.style.display = "block";
      if (step === 1) {
        setStep(2);
        console.log("this again works");

        gsap
          .timeline()
          .add("email2")
          .add("mobile2")
          .add("vectorLogo")
          .fromTo(
            ".contact_popmobile_inputemail_container",
            {
              y: -90,
            },
            {
              y: -315,
            },
            "email"
          )
          .fromTo(
            ".contact_popmobile_inputphone_container",
            {
              y: 0,
            },
            {
              y: -225,
            },
            "mobile2"
          )
          .to(
            ".contact_form_mob_bgLogo",
            {
              filter: "opacity(0.2)",
            },
            "vectorLogo"
          )
          .fromTo(
            ".contact_popmobile_selectReason_container",
            {
              display: "none",
              opacity: 0,
              scale: 0.2,
            },
            {
              display: "flex",
              opacity: 1,
              scale: 1,
            }
          );
      }
    } else {
      getCheckElement.classList.contains("load-complete") &&
        getCheckElement.classList.remove("load-complete");
      getCheckMarkElement.style.display = "none";
    }
  }

  // handleMobile
  const handleMobile = (value) => {
    setMobile(value);
    debounceMobileFn(value);
  };

  // Redirection to Thank you page
  const handleSend = (e) => {
    e.preventDefault();
    router.push("/thankyou");
  };

  // Submitting the form
  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const data = {
      fullname: fullname,
      email: email,
      phone: phone,
      urgent: "1 or 2 Months",
      message: message,
    };
    console.log("contact form data:", data);

    try {
      const res = await axiosConfig.post("/get-in-touch", data);
      console.log("res:", res.data);
      toast.success("Your Message has been sended successfully!.", {
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
    <div className={styles.contactSection}>
      <Container fluid className={styles.thankYouWrapper}>
        <Row className={styles.Row}>
          <Col className={styles.Col1}>
            <div className={styles.contentWrapper}>
              {/* Header */}
              <div className={styles.header}>
                <span className={styles.headerMainTxt}>
                  Have a question?
                  <br />
                  <b>Drop us a line</b>
                </span>
                <span className={styles.headerSubTxt}>
                  We are happy to answer any questions you have. We look forward
                  to hear from you.
                </span>
              </div>

              {/* Contact Info */}
              <div className={styles.contactInfoCard}>
                <div className={styles.timing}>
                  <MdOutlineAccessTime style={{ fontSize: "30px" }} />
                  <span className={styles.cardTxt}>
                    Monday to Friday, 9:00 AM to 6:00 PM
                  </span>
                </div>
                <div className={styles.emailAndphone}>
                  <div className={styles.email}>
                    <TbBrandTelegram style={{ fontSize: "30px" }} />
                    <span
                      className={styles.cardTxt}
                      style={{ cursor: "pointer" }}
                      onClick={handleEmailMe}
                    >
                      bushra.ebox@gmail.com
                    </span>
                  </div>
                  <div className={styles.phone}>
                    <BiPhoneCall style={{ fontSize: "30px" }} />
                    <span
                      className={styles.cardTxt}
                      style={{ cursor: "pointer" }}
                      onClick={handleCallMe}
                    >
                      +971555190640
                    </span>
                  </div>
                  <div className={styles.phone}>
                    <BiPhoneCall style={{ fontSize: "30px" }} />
                    <span
                      className={styles.cardTxt}
                      style={{ cursor: "pointer" }}
                      onClick={handleCallMe}
                    >
                      +971 4354 4466
                    </span>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className={styles.locationInfoCard}>
                <div className={styles.timing}>
                  <MdOutlineAccessTime style={{ fontSize: "30px" }} />
                  <span className={styles.cardTxt}>
                    Office 1006, 10th Floor, Rez Plaza, Dubai Rez, Dubai,
                    UAE
                  </span>
                </div>
                <a
                  className={styles.link}
                  onClick={handleMeetUs}
                  style={{ cursor: "pointer" }}
                >
                  Location Map
                </a>
              </div>
            </div>
          </Col>

          <Col className={styles.Col2}>
            <Form
              className={styles.contentWrapper}
              validated={validated}
              onSubmit={handleSubmit}
              action=""
            >
              <h3 className={styles.header}>Get in Touch with Us</h3>
              <div className={styles.formFullWidth}>
                <Group controlId="fullname">
                  <Label className={styles.label}>Full Name</Label>
                  <Control
                    required
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    onChange={(e) => setFullname(e.target.value)}
                    className={styles.input}
                    minLength={5}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Give Full Name.
                  </Form.Control.Feedback>
                </Group>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formCol}>
                  <Group controlId="email">
                    <Label className={styles.label}>Email</Label>
                    <Control
                      required
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input}
                      minLength={8}
                      isInvalid={
                        error.status &&
                        (error.type.includes("email") || !validateEmail(email))
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Give Valid Email.
                    </Form.Control.Feedback>
                  </Group>
                </div>
                <div className={styles.formCol}>
                  <Group
                    controlId="phone"
                    className={styles.contactPopmobileSelectReasonContainer}
                  >
                    <Label className={styles.label}>Phone</Label>
                    {/* <Control
                      required
                      type="number"
                      name="phone"
                      placeholder="Enter phone number"
                      onChange={(e) => setPhone(e.target.value)}
                      className={styles.input}
                      minLength={10}
                      isInvalid={error.status && error.type.includes("phone")}
                    /> */}
                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="AE"
                      className={styles.input}
                      value={phone}
                      onChange={setPhone}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Give Valid Phone.
                    </Form.Control.Feedback>
                  </Group>
                </div>
                {/* <div md={6} className={styles.formCol}>
                  <Group controlId="urgent">
                    <Label className={styles.label}>Required in</Label>
                    <select
                      required
                      name="Required in"
                      aria-label="select one option"
                      // placeholder="1/3 Months"
                      onChange={(e) => setUrgent(e.target.value)}
                      className={classnames(styles.input, styles.select)}
                    >
                      <option>Select a value</option>
                      <option value="1 Month">1 Month</option>
                      <option value="2 Months">2 Months</option>
                      <option value="3 Months">3 Months</option>
                      <option value="3+ Months">3+ Months</option>
                    </select>
                  </Group>
                </div> */}
              </div>
              <div className={styles.textAreaContainer}>
                <Group controlId="message">
                  <Label className={styles.label}>Message</Label>
                  <Control
                    required
                    name="message"
                    as="textarea"
                    rows={3}
                    placeholder="Type here...."
                    onChange={(e) => setMessage(e.target.value)}
                    className={styles.textArea}
                    minLength={5}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Give Message.
                  </Form.Control.Feedback>
                </Group>
              </div>
              {!loading ? (
                <Button className={styles.mainBtn} type="submit">
                  <span className={styles.next}>Send</span>
                </Button>
              ) : (
                <div className={styles.loaderWrap}>
                  <div className={styles.loader}></div>
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
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
    </div>
  );
}
export default Banner;
