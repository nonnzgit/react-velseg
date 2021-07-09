import { ScContacto } from "./style.js";
import logoConj from "../../images/logocon.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Separator, ScSubtitle } from "../../globalStyles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contacto = () => {
  return (
    <ScContacto id="contacto">
      <Container>
        <Row className="heading">
          <ScSubtitle responsive className="d-block">
            Contacta
          </ScSubtitle>
          <Separator className="d-block" />
        </Row>
        <Row className="cardContainer m-1 mt-5 shadow">
          <Col lg={6} className="firstCard p-3">
            <div className="col-12 p-0 mt-3 mb-3 d-flex justify-content-center">
              <img
                src={logoConj}
                alt="logotipo conjunto corredurias"
                width="100%"
                style={{ borderRadius: "10px" }}
              />
            </div>
            <div className="w-100">
              <h4 className="display-4 fw-bold">Confía en nosotros</h4>
              <p className="lh-lg">
                Somos una correduría con{" "}
                <strong>más de 10 años de antigüedad</strong>. Con profesionales
                con más de 30 años de experiencia dentro del sector asegurador.
                Trabajamos con las mejores compañías, y casi todos los ramos de
                seguro que hay en el mercado.
              </p>
              <h3 className="display-3--brief">
                Quiero que reviséis mis seguros ¿Qué tengo que hacer?
              </h3>
              <ul className="">
                <li>Llámanos</li>
                <li>Escríbenos un correo</li>
                <li>Visítanos</li>
              </ul>
              <h3>Encontrarás toda la información a continuación</h3>
            </div>
          </Col>
          <Col lg={6} className="secondCard bg-white p-3">
            <div className="row secondCardInfo lh-lg">
              <div className="col-6 text-center">
                <a
                  href="https://goo.gl/maps/XgzeU54osK4gJuVq6"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    className="btn btn-rounded bg-secondary text-white shadow"
                    icon={faStoreAlt}
                    size="lg"
                  />
                </a>
              </div>
              <div className="col-6 text-center">
                Plaza de Italia, Nº 4, Local 4 C{" "}
                <span className="d-block"> 41089, Montequinto (Sevilla)</span>
              </div>
              <div className="col-6 text-center">
                <a href="tel:+34606342351">
                  <FontAwesomeIcon
                    className="btn btn-rounded bg-secondary text-white shadow"
                    icon={faPhoneAlt}
                    size="lg"
                  />
                </a>
              </div>
              <div className="col-6 text-center">
                955 327 396 <span className="d-block">606 342 351</span>{" "}
              </div>
              <div className="col-6 text-center ">
                <a href="mailto:montequinto@grupo10mb.com">
                  <FontAwesomeIcon
                    className="btn btn-rounded bg-secondary text-white shadow"
                    icon={faEnvelope}
                    size="lg"
                  />
                </a>
              </div>
              <div className="col-6 text-center">montequinto@grupo10mb.com</div>
            </div>
            <iframe
              className="row m-auto p-3"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6344.2782365560015!2d-5.929943!3d37.339215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88662029080a5aa0!2sVelarde%20Seguros%2C%20Grupo10%20Montequinto!5e0!3m2!1ses!2ses!4v1624123683841!5m2!1ses!2ses"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              title="gmaps"
              frameBorder="0"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </ScContacto>
  );
};

export default Contacto;
