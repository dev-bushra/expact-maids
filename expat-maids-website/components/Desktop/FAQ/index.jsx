import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Accordion, Card, Button } from "react-bootstrap";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";

function FAQ() {
  const [isArrowUpOrDown, SetIsArrowUpOrDown] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const toggleArrow = (index) => {
    let arr = [...isArrowUpOrDown];
    if (arr[index] == 0) {
      arr[index] = 1;
      SetIsArrowUpOrDown(arr);
    } else {
      arr[index] = 0;
      SetIsArrowUpOrDown(arr);
    }
  };
  return (
    <div className={styles.faqWrapper} id="faqs">
      <h1 className={styles.title} data-aos="zoom-in">
        FAQs
      </h1>
      <div className={styles.faqs} data-aos="zoom-in">
        <Accordion flush className={styles.accordion}>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(0)}
                  className={styles.accordionTxtHeader}
                >
                  How many years is the visa valid for?
                  <div>
                    {isArrowUpOrDown[0] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="0"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              We offer a two-year employment visa for your maid.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(1)}
                  className={styles.accordionTxtHeader}
                >
                  Is it possible for my maid to accompany me on a family holiday trip?
                  <div>
                    {isArrowUpOrDown[1] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="1"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              Travelling with your maid to other countries is hassle-free with us, as our employment letter is generally accepted by most embassies. Additionally, we provide free of charge no objection certificates (NOCs) for travel purposes.            
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="2"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(2)}
                  className={styles.accordionTxtHeader}
                >
                  What is the payment process for my maid's salary through DynamicMaids.com?
                  <div>
                    {isArrowUpOrDown[2] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="2"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              By the 23rd of each month, you will receive an invoice from us that includes your maid's salary and the monthly administrative fee. You can conveniently settle this invoice through various payment methods such as a secure online payment link, bank transfer, or post-dated cheque. Upon receipt of your payment, we will process the salary transfer to your maid's designated salary account within 3-5 working days.To ensure secure and hassle-free payment of your maid's salary, we provide an ATM card that is linked to the UAE's Wages Protection System (WPS). This system protects you from any potential labour disputes related to your maid's salary.              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="3"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(3)}
                  className={styles.accordionTxtHeader}
                >
                  Which documents are required to place my maid under DynamicMaids.com?
                  <div>
                    {isArrowUpOrDown[3] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="3"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              Compared to individual sponsorship, we only require a minimal set of documents from you. All you need to provide us with is a copy of your passport, visa, and Emirates ID.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="4"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(4)}
                  className={styles.accordionTxtHeader}
                >
                  If I terminate the contract before the completion of the 2-year period, will I be eligible for a refund?
                  <div>
                    {isArrowUpOrDown[4] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="4"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              Please note that any upfront payments made are non-refundable. However, if you cancel the contract before the completion of the 2-year period, any remaining monthly administrative fees will be nullified, and you will not be liable for further payments beyond the cancellation date.              </Card.Body>
            </Accordion.Collapse>
          </Card>
      
          <Card className={styles.accordionCard}>
            <Accordion.Collapse
              eventKey="5"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
                No, we don’t require security deposits. What we require is a security cheque for the end-of-service benefit (EOSB) of your maid. This cheque must be undated as it will not be banked and will be voided once your maid’s visa is cancelled and her EOSB is paid. 
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Accordion.Collapse
              eventKey="6"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
                We calculate the EOSB of your maid as per the UAE Labour Law. The calculation covers any unpaid annual leave, final salary, and gratuity.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="7"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(7)}
                  className={styles.accordionTxtHeader}
                >
                   What are the available visa designations that you offer?
                  <div>
                    {isArrowUpOrDown[7] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="7"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              As a mainland visa outsourcing company, we offer two visa designations: 'Cleaner' for maids, nannies, and cooks, and 'Light Vehicle Driver' for drivers. It is important to note that the visa designation does not determine the type of work that can be performed, nor does it restrict the offering of services anywhere in the UAE. 
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="9"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(9)}
                  className={styles.accordionTxtHeader}
                >
                  Do you provide assistance with Shram applications for Nepalese nationals?
                  <div>
                    {isArrowUpOrDown[9] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="9"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              Absolutely! The contracts issued under our license are accepted at the Nepal Embassy. Your maid can visit the embassy in Abu Dhabi and bring the documents we have prepared to process the attestation of her documents for the shram sticker. Alternatively, we also offer a PRO service where we can visit the embassy on her behalf for a minimum fee. This service simplifies the process for your maid and ensures efficient handling of the shram sticker documentation.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="10"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(0)}
                  className={styles.accordionTxtHeader}
                >
                  Are you regulated by the government?
                  <div>
                    {isArrowUpOrDown[0] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="10"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              Absolutely, we possess the necessary licensing and authorization from the Ministry of Human Resources and Emiratization (MOHRE) to offer visa outsourcing services. Our organization holds a manpower on-demand labour supply license, which grants us the authority to provide a range of outsourcing services, including visa outsourcing.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
          <Card className={styles.accordionCard}>
            <Card.Header className={styles.accordionHeader}>
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="11"
                className={styles.accordionToggle}
              >
                <span
                  onClick={() => toggleArrow(0)}
                  className={styles.accordionTxtHeader}
                >
                  Do you require security deposits?
                  <div>
                    {isArrowUpOrDown[0] == 0 ? (
                      <BsCaretDownFill />
                    ) : (
                      <BsCaretUpFill />
                    )}
                  </div>
                </span>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey="11"
              className={styles.accordionCollapse}
            >
              <Card.Body className={styles.accordionBody}>
              To clarify, we do not require security deposits from you. However, we require an undated security cheque of AED 5,500 for the purpose of safeguarding your maid's End of Service benefits (EOSB). It's important to understand that this cheque will not be cashed or deposited. Its sole purpose is to ensure the security of both parties' interests unless contact is lost. If the contract cancellation process proceeds as normal, the final calculation of your maid's EOSB will be invoiced to you and subsequently paid to your maid. Once your maid's visa is officially cancelled, the security cheque will be considered null and void and will be safely discarded.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <div className={styles.divider}></div>
        </Accordion>
      </div>
    </div>
  );
}
export default FAQ;
