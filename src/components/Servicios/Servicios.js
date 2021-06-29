import React from "react";
// BOOTSTRAP
import { Container, Row, Col } from "react-bootstrap";
// ESTILOS Y COMPONENTES
import { ScServicios } from "./styles.js";
import {
  ScSubtitle,
  Separator,
  ScTextBasic,
  ScTextTitle,
} from "../../globalStyles.js";
import { ButtonArrowWhite } from "../Buttons/Buttons.js";
// FONT AWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPeopleCarry,
  faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";
// IMAGENES
import Servicio1 from "../../images/Servicios/servicios1.svg";
import Servicio2 from "../../images/Servicios/servicios2.svg";
import Servicio3 from "../../images/Servicios/servicios3.svg";

const Servicios = () => {
  return (
    <>
      <ScServicios id="servicios">
        {/* CABECERA */}
        <Container fluid="xl">
          <Row>
            <Col>
              <ScSubtitle responsive>Nuestros servicios</ScSubtitle>
              <Separator />
            </Col>
          </Row>
          <Row style={{ padding: "1rem", alignItems: "center" }}>
            <Col md={6} sm={12} className="pl-2 pr-2 text-center">
              <h2 className="fw-bold">LO QUE PODEMOS HACER POR TI</h2>
            </Col>
            <Col md={6} sm={12} className="pl-2 pr-2">
              <ScTextBasic style={{ margin: "auto 0" }}>
                Sabemos que la vida no es sencilla, y queremos que puedas
                disfrutarla sin preocupaciones. Descubre como nuestro trabajo en
                muchas ocasiones puede ayudarte a vivir sin preocupaciones.
              </ScTextBasic>
            </Col>
          </Row>
        </Container>
        {/* CONTENIDO */}
        <Container fluid="xl">
          {/* PRIMERA FILA */}
          <Row style={{ padding: "1rem", alignItems: "center" }}>
            <Col md={6} sm={12}>
              <div>
                <FontAwesomeIcon
                  className="CcIconosServicios"
                  icon={faAddressCard}
                />
                <ScTextTitle>Estudio de necesidades aseguradoras</ScTextTitle>
                <p style={{ lineHeight: "2" }}>
                  ¡Sin costes! ¡Sin compromiso! ¡De forma cómoda! Tan solo
                  tienes que facilitarnos una copia de tus pólizas, y si no las
                  encuentras, tan solo contestarnos unas preguntas. Además si
                  quieres podemos calcular tu perfil asegurador y te
                  recomendaremos el tipo de seguro que más se adapte a ti.{" "}
                </p>
                <a href="#contacto">
                  <ButtonArrowWhite innerText={"Más información"} />
                </a>
              </div>
            </Col>
            <Col md={6} sm={12} className="CcContenedorImagen">
              <img src={Servicio1} alt="Estudio poliza" />
            </Col>
          </Row>
          {/* SEGUNDA FILA */}
          <Row style={{ padding: "1rem", alignItems: "center" }}>
            <Col md={6} sm={12} className="CcContenedorImagen">
              <img src={Servicio2} alt="Mediacion" />
            </Col>
            <Col md={6} sm={12}>
              <div>
                <div>
                  <FontAwesomeIcon
                    className="CcIconosServicios"
                    icon={faPeopleCarry}
                  />
                  <ScTextTitle>Somos mediadores</ScTextTitle>
                  <p style={{ lineHeight: "2" }}>
                    Te acompañamos y ayudamos, y lo hacemos de principio a fin.
                    Cuando contratas te ayudaremos a elegir la compañía y
                    coberturas que necesitas. Si tienes un siniestro, velaremos
                    porque las compañías cumplan todo lo estipulado en el
                    contrato y te asesoraremos en aquellos siniestros más
                    complejos.
                  </p>
                  <a href="#contacto">
                    <ButtonArrowWhite innerText={"Más información"} />
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          {/* TERCERA FILA */}
          <Row style={{ padding: "1rem", alignItems: "center" }}>
            <Col md={6} sm={12}>
              <div>
                <FontAwesomeIcon
                  className="CcIconosServicios"
                  icon={faShieldAlt}
                />
                <ScTextTitle>Con toda la seguridad</ScTextTitle>
                <p style={{ lineHeight: "2" }}>
                  Estudiamos y comparamos las diferentes pólizas de seguro que
                  hay en el mercado previamente a la contratación por parte de
                  nuestros clientes. Trabajamos con las mejores compañías y con
                  las pólizas más completas del mercado.
                </p>
                <a href="#contacto">
                  <ButtonArrowWhite innerText={"Más información"} />
                </a>
              </div>
            </Col>
            <Col md={6} sm={12} className="CcContenedorImagen">
              <img src={Servicio3} alt="Seguridad" />
            </Col>
          </Row>
        </Container>
      </ScServicios>
    </>
  );
};

export default Servicios;
