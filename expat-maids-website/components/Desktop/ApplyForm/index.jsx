import React, { useEffect, useState, useCallback } from "react";
import styles from "./styles.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import Card from "react-bootstrap/Card";
import { FiArrowRight } from "react-icons/fi";
import classnames from "classnames";
import { BsCheckCircleFill } from "react-icons/bs";
import { FiUploadCloud } from "react-icons/fi";
import { BsCheck2Circle } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import axiosConfig from "../../../utils/axiosConfig";
import "react-phone-number-input/style.css";
import _debounce from "lodash/debounce";
import { toast, ToastContainer } from "react-toastify";

function Banner() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [allName, setAllName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [jobType, setJobType] = useState(null);
  const [salary, setSalary] = useState("");
  const [passport, setPassport] = useState(null);
  const [visa, setVisa] = useState(null);
  const [emiratesId, setEmiratesId] = useState(null);
  const [photograph, setPhotograph] = useState(null);
  const [cancellationDocuments, setCancellationDocuments] = useState(null);
  const [policeClearance, setPoliceClearance] = useState(null);
  const [touristVisa, setTouristVisa] = useState(null);
  
  const [passportValid, setPassportValid] = useState(true);
  const [visaValid, setVisaValid] = useState(true);
  const [emiratesIdValid, setEmiratesIdValid] = useState(true);
  const [photographValid, setPhotographValid] = useState(true);
  const [cancellationDocumentsValid, setCancellationDocumentsValid] = useState(true);
  const [policeClearanceValid, setPoliceClearanceValid] = useState(true);
  const [touristVisaValid, setTouristVisaValid] = useState(true);

  const [submitLoader, setSubmitLoader] = useState(false)

  const [isValid, setIsValid] = useState("Check");
  const [isItAllowedFileType, setIsItAllowedFileType] = useState({
    passport: '',
    visa: '',
    emiratesId: '',
    photograph: '',
    cancellationDocuments: '',
    policeClearance: '',
    touristVisa: '',
  });
  const [allowedFiles, setAllowedFiles] = useState(['.pdf', '.doc', '.docx']);
  const [allowedFilesTypes, setAllowedFilesTypes] = useState(['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']);
  const [error, setError] = useState({
    status: false,
    message: "",
    type: [],
  });

  const [validated, setValidated] = useState(false);

  const debounceMobileFn = useCallback(_debounce(mobileDebounce, 800), [step]);

  // RegExp for Email & Phone
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  
  // validateEmail
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
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

  // ErrorMsg
  const ErrorMsg = (message = "Provide Valid Details, Try again.") => {
    return toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };

  // SuccessMsg
  const SuccessMsg = (message = "Your Application has send it successfully!") => {
    return toast.success(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });
  };
  
  // stepTwo
  const stepTwo = () => {
    if (
      allName != null &&
      allName.length &&
      email.length &&
      occupation.length &&
      // jobType.length &&
      salary.length &&
      email != null &&
      phone != null &&
      phone.length > 10 &&
      occupation != null &&
      // jobType != null &&
      salary != null
    ) {
      if (!validateEmail(email)) {
        ErrorMsg("Provide Valid Email Address");
        return;
      }
      setStep(2);
    } else {
      if (!allName.length) {
        ErrorMsg("Please Provide Full Name");
        return;
      }
      if (!email.length) {
        ErrorMsg("Please Provide Email");
        return;
      }
      if (!occupation.length) {
        ErrorMsg("Please Provide Occupation");
        return;
      }
      // if (!jobType.length) {
      //   ErrorMsg("Please Provide Job Type");
      //   return;
      // }
      if (!salary.length) {
        ErrorMsg("Please Provide Salary");
        return;
      }
      ErrorMsg();
    }
  };
  // stepOne
  const stepOne = () => {
    setStep(1);
  };

  // useEffect
  useEffect(() => {
    if (
      allName != null &&
      email != null &&
      phone != null &&
      occupation != null &&
      // jobType != null &&
      salary != null
    ) {
      setIsValid("Next");
    }
  }, [stepTwo]);

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // form
    let apply_form = document.querySelector("#apply_form");
    console.log("form: ", apply_form);

    if (
      document.querySelector("#passport")?.files[0] == undefined ||
      document.querySelector("#photograph")?.files[0] == undefined
    ) {
      ErrorMsg("Please Give Mandatory Fields");
      return;
    }
    // files
    // console.log("passport: ", document.querySelector("#passport")?.files[0]);
    console.log("visa: ", document.querySelector("#visa"));
    console.log("emirates_id: ", document.querySelector("#emirates_id"));
    console.log(
      "photograph: ",
      document.querySelector("#photograph")?.files[0]
    );
    console.log(
      "cancellation_documents: ",
      document.querySelector("#cancellation_documents")
    );
    console.log(
      "police_clearance: ",
      document.querySelector("#police_clearance")
    );

    // setting formaData
    formData.append("fullname", allName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("occupation", occupation);
    // formData.append("jobtype", jobType);
    formData.append("salary", salary);
    formData.append(
      "passport_copy",
      document.querySelector("#passport").files[0]
    );
    formData.append("visa_copy", document.querySelector("#visa").files[0]);
    formData.append(
      "emirates_id",
      document.querySelector("#emirates_id").files[0]
    );
    formData.append(
      "photograph",
      document.querySelector("#photograph").files[0]
    );
    formData.append(
      "cancellation_documents",
      document.querySelector("#cancellation_documents").files[0]
    );
    formData.append(
      "police_clearance",
      document.querySelector("#police_clearance").files[0]
    );

    // hitting endpoint
    try {
      setSubmitLoader(true)
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer ",
        },
      };
      const res = await axiosConfig.post(
        "/employer-personal-info",
        formData,
        config
      );
      console.log("res:", res);
      SuccessMsg("Your Application send successfully!")
      router.push("/thankyou");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitLoader(false)
    }
  };

  // checkIfFileTypeIsPdf
  const checkIfFileTypeIsPdf = (filename, doc) => {
    let fileType = '.' + filename.split('.').pop();
    console.log('filename', filename);
    let my_doc = doc
    console.log('doc', my_doc);
    switch (doc) {
      case 'passport':
        // if (fileType == '.pdf') {
          setPassport(filename)
          setPassportValid(true)
        // } else {
          // setPassportValid(false)
        // }
        break;
      case 'visa': 
        // if (fileType == '.pdf') {
          setVisa(filename)
          setVisaValid(true)
        // } else {
          // setVisaValid(false)
        // }
        break;
      case 'emiratesId': 
        // if (fileType == '.pdf') {
          setEmiratesId(filename)
          setEmiratesIdValid(true)
        // } else {
          // setEmiratesIdValid(false)
        // }
        break;
      case 'photograph': 
        // if (fileType == '.pdf') {
          setPhotograph(filename)
          setPhotographValid(true)
        // } else {
          // setPhotographValid(false)
        // }
        break;
      case 'cancellationDocuments': 
        // if (fileType == '.pdf') {
          setCancellationDocuments(filename)
          setCancellationDocumentsValid(true)
        // } else {
          // setCancellationDocumentsValid(false)
        // }
        break;
      case 'policeClearance':
        // if (fileType == '.pdf') {
          setPoliceClearance(filename)
          setPoliceClearanceValid(true)
        // } else {
          // setPoliceClearanceValid(false)
        // }
        break;
      case 'touristVisa': 
        // if (fileType == '.pdf') {
          setTouristVisa(filename)
          setTouristVisaValid(true)
        // } else {
          // setTouristVisaValid(false)
        // }
      break;
    }
  }

  return (
    <Container fluid className={styles.applyWrapper}>
      <Row className={styles.row1}>
        <h1 className={styles.header}>Visa Sponsorship Application Form</h1>
      </Row>
      <Row className={styles.row2}>
        <Col md={4} className={styles.col1}>
          <div className={styles.cardWrapper}>
            <div
              className={classnames(
                styles.currentStepCard,
                step == 1 ? styles.currentStepCard : styles.passedStepCard
              )}
              onClick={stepOne}
            >
              <div className={styles.currentStepCardContainer}>
                <div className={styles.title}>
                  {step == 1 ? (
                    <div className={styles.no}>1</div>
                  ) : (
                    <BsCheckCircleFill style={{ fontSize: "25px" }} />
                  )}
                  <span className={styles.stepName}>
                    Employer Personal Info
                  </span>
                </div>
                <span className={styles.body}>
                  Please fill in all fields below and upload the files required.
                </span>
              </div>
            </div>
            <div
              className={classnames(
                step == 2 ? styles.currentStepCard : styles.nextStepCard
              )}
              onClick={stepTwo}
            >
              <div className={styles.currentStepCardContainer}>
                <div className={styles.title}>
                  <div className={styles.no}>2</div>
                  <span className={styles.stepName}>Domestic Worker Info</span>
                </div>
                <span className={styles.body}>
                  Please fill in all fields below and upload the files required.
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6} className={styles.col2}>
          <div className={styles.formWrapper}>
            <Form
              id="apply_form"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              {step == 1 ? (
                <Row className={styles.formRow}>
                  <Col md={6} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Full Name <span className={styles.mandatory}>*</span>
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      id="full_name"
                      value={allName}
                      onChange={(e) => setAllName(e.target.value)}
                      minLength={9}
                      placeholder="Enter your full name"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Give Full Name.
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Phone <span className={styles.mandatory}>*</span>
                    </Form.Label>
                    <PhoneInput
                      className={styles.input}
                      countryCallingCodeEditable={false}
                      value={phone}
                      id="phone"
                      onChange={setPhone}
                      placeholder="Enter phone number"
                      defaultCountry="AE"
                      international
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Give Valid Phone.
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Email <span className={styles.mandatory}>*</span>
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                      minLength={8}
                      required
                      isInvalid={
                        error.status &&
                        (error.type.includes("email") || !validateEmail(email))
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Give Valid Email.
                    </Form.Control.Feedback>
                  </Col>
                  {/* <Col md={6} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Job Type <span className={styles.mandatory}>*</span>
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      id="jobType"
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      minLength={5}
                      placeholder="Select your job"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Give Valid Job.
                    </Form.Control.Feedback>
                  </Col> */}
                  <Col md={6} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Occupation{" "}
                      <small>
                        (in UAE) <span className={styles.mandatory}>*</span>
                      </small>
                    </Form.Label>
                    <Form.Control
                      className={styles.input}
                      type="text"
                      id="occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                      minLength={3}
                      placeholder="Enter your occupation in UAE"
                      required
                    />
                  </Col>
                  <Col md={6} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Minimum Monthly Salary{" "}
                      <small>
                        (in AED) <span className={styles.mandatory}>*</span>
                      </small>
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setSalary(e.target.value)}
                      name="salary"
                      id="salary"
                      value={salary}
                      className={styles.input}
                      type="number"
                      placeholder="Enter your minimum salary"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Give Valid Salary.
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              ) : (
                <Row className={styles.formRow}>
                  <Col md={12} className="mt-1"></Col>
                  <Col md={4} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Passport <span className={styles.mandatory}>*</span>
                    </Form.Label>
                    <Form.Group
                      controlId="passport"
                      className={styles.fileUploadInput}
                    >
                      <Form.Label className={styles.fileUploadLabel}>
                        {passport == null ? "No file selected" : passport}
                        <FiUploadCloud style={{ fontSize: "28px" }} />
                      </Form.Label>
                      <Form.Control
                        className={styles.fileUploaderInput}
                          type="file"
                          accept="application/pdf, application/doc, image/gif, image/jpeg, image/png"
                        id="passport"
                        onChange={(e) => checkIfFileTypeIsPdf(e.target.files[0].name, 'passport')}
                        />
                      </Form.Group>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ fontSize: '10px', color: 'red', display: 'inline', marginLeft: '5px' }}>
                          {passportValid == false ?
                            'please upload valid.pdf .docx files.'
                            :
                            ' '
                          }
                        </p>
                      </div>
                  </Col>
                  <Col md={4} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Old Residence Visa Copy
                    </Form.Label>
                    <Form.Group
                      controlId="visa"
                      className={styles.fileUploadInput}
                    >
                      <Form.Label className={styles.fileUploadLabel}>
                        {visa == null ? "No file selected" : visa}
                        <FiUploadCloud style={{ fontSize: "28px" }} />
                      </Form.Label>
                      <Form.Control
                        className={styles.fileUploaderInput}
                          type="file"
                          accept="application/pdf, application/doc, image/gif, image/jpeg, image/png"
                        id="visa"
                        onChange={(e) => checkIfFileTypeIsPdf(e.target.files[0].name, 'visa')}
                      />
                    </Form.Group>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ fontSize: '10px', color: 'red', display: 'inline', marginLeft: '5px' }}>
                          {visaValid == false?
                            'please upload valid.pdf .docx files.'
                            :
                            ''
                          }
                        </p>
                      </div>
                  </Col>
                  <Col md={4} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Emirates ID Copy
                    </Form.Label>
                    <Form.Group
                      controlId="emirates_id"
                      className={styles.fileUploadInput}
                    >
                      <Form.Label className={styles.fileUploadLabel}>
                        {emiratesId == null ? "No file selected" : emiratesId}
                        <FiUploadCloud style={{ fontSize: "28px" }} />
                      </Form.Label>
                      <Form.Control
                        className={styles.fileUploaderInput}
                          type="file"
                          accept="application/pdf, application/doc, image/gif, image/jpeg, image/png"
                        id="emirates_id"
                        onChange={(e) => checkIfFileTypeIsPdf(e.target.files[0].name, 'emiratesId')}
                      />
                    </Form.Group>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ fontSize: '10px', color: 'red', display: 'inline', marginLeft: '5px' }}>
                          {emiratesIdValid == false ?
                            'please upload valid.pdf .docx files.'
                            :
                            ''
                          }
                        </p>
                      </div>
                  </Col>

                  <Col md={12} className="mt-1"></Col>
                  <Col md={4} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Photograph <span className={styles.mandatory}>*</span>
                      <br />
                      <small style={{ fontSize: "12px" }}>
                        (see attached guidelines)
                      </small>
                    </Form.Label>
                    <Form.Group
                      controlId="photograph"
                      className={styles.fileUploadInput}
                    >
                      <Form.Label className={styles.fileUploadLabel}>
                        {photograph == null ? "No file selected" : photograph}
                        <FiUploadCloud style={{ fontSize: "28px" }} />
                      </Form.Label>
                      <Form.Control
                        className={styles.fileUploaderInput}
                          type="file"
                          accept="application/pdf, application/doc, image/gif, image/jpeg, image/png"
                        id="photograph"
                        onChange={(e) => checkIfFileTypeIsPdf(e.target.files[0].name, 'photograph')}
                      />
                    </Form.Group>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ fontSize: '10px', color: 'red', display: 'inline', marginLeft: '5px' }}>
                          {photographValid == false ?
                            'please upload valid.pdf .docx files.'
                            :
                            ''
                          }
                        </p>
                      </div>
                  </Col>
                  <Col md={4} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Cancellation Documents
                      <br />
                      <small style={{ fontSize: "12px" }}>(if available)</small>
                    </Form.Label>
                    <Form.Group
                      controlId="cancellation_documents"
                      className={styles.fileUploadInput}
                    >
                      <Form.Label className={styles.fileUploadLabel}>
                        {cancellationDocuments == null
                          ? "No file selected"
                          : cancellationDocuments}
                        <FiUploadCloud style={{ fontSize: "28px" }} />
                      </Form.Label>
                      <Form.Control
                        className={styles.fileUploaderInput}
                          type="file"
                          accept="application/pdf, application/doc, image/gif, image/jpeg, image/png"
                        id="cancellation_documents"
                        onChange={(e) => checkIfFileTypeIsPdf(e.target.files[0].name, 'cancellationDocuments')}
                      />
                      </Form.Group>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ fontSize: '10px', color: 'red', display: 'inline', marginLeft: '5px' }}>
                          {cancellationDocumentsValid == false ?
                            'please upload valid.pdf .docx files.'
                            :
                            ''
                          }
                        </p>
                      </div>
                  </Col>
                  <Col md={4} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Police Clearance
                      <br />
                      <small style={{ fontSize: "12px" }}>(for african nationals only)</small>
                    </Form.Label>
                    <Form.Group
                      controlId="police_clearance"
                      className={styles.fileUploadInput}
                    >
                      <Form.Label className={styles.fileUploadLabel}>
                        {policeClearance == null
                          ? "No file selected"
                          : policeClearance}
                        <FiUploadCloud style={{ fontSize: "28px" }} />
                      </Form.Label>
                      <Form.Control
                        className={styles.fileUploaderInput}
                          type="file"
                          accept="application/pdf, application/doc, image/gif, image/jpeg, image/png"
                        id="police_clearance"
                        onChange={(e) => checkIfFileTypeIsPdf(e.target.files[0].name, 'policeClearance')}
                      />
                    </Form.Group>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ fontSize: '10px', color: 'red', display: 'inline', marginLeft: '5px' }}>
                          {policeClearanceValid == false ?
                            'please upload valid.pdf .docx files.'
                            :
                            ''
                          }
                        </p>
                      </div>
                  </Col>
                  <Col md={4} className={styles.formCol}>
                    <Form.Label className={styles.label}>
                      Tourist Visa
                      <br />
                      <small style={{ fontSize: "12px" }}>(if available)</small>
                    </Form.Label>
                    <Form.Group
                      controlId="tourist_visa"
                      className={styles.fileUploadInput}
                    >
                      <Form.Label className={styles.fileUploadLabel}>
                        {touristVisa == null ? "No file selected" : touristVisa}
                        <FiUploadCloud style={{ fontSize: "28px" }} />
                      </Form.Label>
                      <Form.Control
                        className={styles.fileUploaderInput}
                          type="file"
                          accept="application/pdf, application/doc, image/gif, image/jpeg, image/png"
                        id="tourist_visa"
                        onChange={(e) => checkIfFileTypeIsPdf(e.target.files[0].name, 'touristVisa')}
                      />
                    </Form.Group>
                      <div style={{ display: 'flex', alignItems: 'center'}}>
                        <p style={{ fontSize: '10px', color: 'red', display: 'inline', marginLeft: '5px' }}>
                          {touristVisaValid === false ?
                            'please upload valid.pdf .docx files.'
                            :
                            ''
                          }
                        </p>
                      </div>
                  </Col>

                  <Col md={12} className="mt-1"></Col>
                </Row>
              )}
              <Row className={styles.actionBtnRow}>
                <Col md={3} className={styles.mainBtnContainer}>
                  {step == 1 ? (
                    <div className={styles.mainBtn} onClick={stepTwo}>
                      <span className={styles.next}>{isValid}</span>
                      <FiArrowRight />
                    </div>
                  ) : (
                    <div className={styles.mainBtn} onClick={(e)=>submitLoader===false && handleSubmit(e)} >
                      {submitLoader?<div className={styles.loader}></div>:<><span className={styles.next}>Submit</span>
                      <BsCheck2Circle
                        style={{ color: "#04A0BC", fontSize: "20px" }}
                      /></>}
                    </div>
                  )}
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
      </Row>
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
