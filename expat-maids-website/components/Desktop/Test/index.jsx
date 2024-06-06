import styles from "./styles.module.scss";
import { Row, Col, Container, Button } from "react-bootstrap";
import Image from "next/image";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import React, { useRef } from 'react';
import {FiUploadCloud} from 'react-icons/fi';

function Banner() {
    const passportCopy =  useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (passportCopy.current) {
            passportCopy.current.value = '';
            console.log('1:', passportCopy);
            console.log('2:', passportCopy.current);
            console.log('3:', passportCopy.current.value);
        }
      };

return (
    <Container fluid className={styles.applyWrapper}>
        <Form.Group controlId="formFile" className={styles.fileUploadInput}>
            <Form.Label className={styles.fileUploadLabel}>
                { passportCopy != null ? 'No file selected' : {passportCopy} } 
                <FiUploadCloud style={{fontSize: '28px'}} />
            </Form.Label>
            <Form.Control className={styles.fileUploaderInput} type="file" onChange={handleChange} value={passportCopy} />
        </Form.Group>
    </Container>
    );
}
export default Banner;