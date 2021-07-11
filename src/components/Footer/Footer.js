import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LogoG10 from "../../images/logoG10.png";
import { ScFooter } from "./style.js";

const Footer = () => {
  return (
    <ScFooter id="footer">
      <Container fluid="xl">
        <Row>
          <Col className="companies" lg={4}>
            <a href="https://grupo10mb.com/" target="_blank" rel="noreferrer">
              <img src={LogoG10} alt="logo correduria" />
            </a>
          </Col>
          <Col className="linksCol" lg={2}></Col>
          <Col className="linksCol" lg={2}></Col>
          <Col className="linksCol" lg={2}>
            <span>Tarificador</span>
            <ul>
              <li>Seguro de Salud</li>
              <li>Seguro de Impago Alquiler</li>
            </ul>
          </Col>
          <Col className="linksCol" lg={2}>
            <span>Enlaces de interés</span>
            <ul>
              <li>Telefonos compañías</li>
              <li>Sede Catrastro</li>
              <li>Consorcio compensación de seguros</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </ScFooter>
  );
};

export default Footer;
