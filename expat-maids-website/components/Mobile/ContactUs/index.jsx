import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Banner() {
return (
    <Container fluid className={styles.applyWrapper}>
        <Row className={styles.applyRow}>
            <Col md={12} className={styles.applyCol}>
                <h1>Submit your Visa Sponsorship Application</h1>

                <Row className={styles.firstForm}>
                    <Col md={12}>
                        <h5>Employer Info:</h5>
                        <span>Please fill in all fields below and upload the files required.</span>
                    </Col>
                    <Col md={3}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="John Done" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Family Name</Form.Label>
                        <Form.Control type="text" placeholder="John" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="John" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="John" />
                    </Col>
                    {/* <Col md={3}>
                        <Form.Label>Job Type</Form.Label>
                        <Form.Control type="text" placeholder="Maids" />
                    </Col> */}
                    <Col md={3}>
                        <Form.Label>Monthly Salary</Form.Label>
                        <Form.Control type="text" placeholder="AED 18,000" />
                    </Col>
                </Row>
                <Row className={styles.secondForm}>
                    <Col md={12}>
                        <h5>Employer Docs:</h5>
                        <span>Please upload the files required.</span>
                    </Col>
                    <Col md={3}>
                        <Form.Label>Passport</Form.Label>
                        <Form.Control type="file" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Visa</Form.Label>
                        <Form.Control type="file" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Emirates ID</Form.Label>
                        <Form.Control type="file" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Old Emirates ID</Form.Label>
                        <Form.Control type="file" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Photograph</Form.Label>
                        <Form.Control type="file" />
                    </Col>
                    <Col md={3}>
                        <Form.Label>Cancellation Documents</Form.Label>
                        <Form.Control type="file" />
                    </Col>
                    <Col md={12} className="mt-4">
                        <Card border="secondary" style={{ width: '100%' }}>
                            <Card.Header className=" small" style={{ padding: '0.6rem' }}>Notes</Card.Header>
                                <span className="p-2 small">
                                    Upon Receipt of your application our support team 
                                    will contact you to confirm the application. You can 
                                    choose to visit our offices to make payment or pay 
                                    online via credit card to start the visa application.
                                </span>
                        </Card>
                    </Col>
                </Row>
                <Row className="my-4 justify-content-center">
                    <Col md={8}></Col>
                    <Col md={2} className="d-flex flex-row justify-content-between">
                        <Button className="px-5 mr-3" color="primary" size="lg" href="/">Send</Button>
                        <Button size="lg" className={styles.cancelBtn} href="/">Cancel</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    );
}
export default Banner;