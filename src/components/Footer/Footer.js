import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LogoG10 from '../../images/logoG10.png';
import { ScFooter } from './style.js';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <ScFooter id="footer">
      <Container fluid="xl">
        <Row>
          <Col className="companies" lg={4}>
            <a
              href="https://grupo10mb.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={LogoG10} alt="logo correduria" />
            </a>
          </Col>
          <Col className="linksCol" lg={2}></Col>
          <Col className="linksCol" lg={2}></Col>
          <Col className="linksCol" lg={2}>
            <span>Tarificador</span>
            <ul>
              <li>
                <Link to="/tarificador/salud" className="routerLink">
                  Seguro de Salud
                </Link>
              </li>
              <li>
                <Link to="/tarificador/impagoalquiler" className="routerLink">
                  Seguro de Impago Alquiler
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="linksCol" lg={2}>
            <span>Enlaces de interés</span>
            <ul>
              <li>Telefonos compañías</li>

              <li>
                <a
                  href="https://www1.sedecatastro.gob.es/cycbieninmueble/ovcbusqueda.aspx"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="routerLink"
                >
                  Sede Catrastro
                </a>
              </li>

              <li>
                <a
                  href="https://www.consorseguros.es/web/inicio"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="routerLink"
                >
                  Consorcio compensación de seguros
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </ScFooter>
  );
};

export default Footer;
