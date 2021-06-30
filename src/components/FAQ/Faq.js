import React from "react";
import {
  Container,
  Accordion,
  Card,
  useAccordionToggle,
} from "react-bootstrap";
import {
  ScSubtitle,
  Separator,
  ScTextLead,
  colors,
} from "../../globalStyles.js";
import { ScFaq } from "./styles";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <button
      type="button"
      style={{
        background: `${colors.gradient}`,
        border: "none",
        margin: "3px",
        padding: "5px 10px",
        color: "white",
        fontWeight: "600",
        borderRadius: "0.5rem",
        minHeight: "3rem",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const Faq = () => {
  return (
    <ScFaq>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,64L60,64C120,64,240,64,360,90.7C480,117,600,171,720,202.7C840,235,960,245,1080,224C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Container fluid={"xl"} id="faq">
        <ScSubtitle responsive>FAQ</ScSubtitle>
        <Separator green></Separator>
        <ScTextLead style={{ textAlign: "center" }}>
          Te dejamos respuestas a las preguntas más frecuentes
        </ScTextLead>
        <div className="acordeon">
          {/* ACORDEON */}
          <Accordion
            style={{ width: "100%", justifyContent: "center" }}
            defaultActiveKey="0"
          >
            <Card
              style={{
                border: "none",
                margin: "0 0 10px 0",
                borderRadius: "0.5rem",
                backgroundColor: "white",
              }}
            >
              <CustomToggle as={Card.Header} eventKey="0">
                ¿Tengo que pagar más al contratar a través vuestra que si
                contrato directamente en la compañía aseguradora?
              </CustomToggle>
              <Accordion.Collapse style={{ fontWeight: "600" }} eventKey="0">
                <Card.Body>
                  <strong>
                    No tendras que pagar mas al contratar con nosotros.
                  </strong>{" "}
                  A nosotros nos pagan directamente las compañías, por la labor
                  que realizamos con los clientes, la cual les permite tener
                  menos gastos, por ejemplo en personal y oficinas. Suele ser al
                  contrario, ya que frecuentemente nosotros tenemos promociones
                  y descuentos que la compañía no suele aplicar cuando contratas
                  un seguro de forma directa.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                border: "none",
                margin: "10px 0",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              <CustomToggle as={Card.Header} eventKey="1">
                ¿Cuándo pierdo la bonificación en el seguro de auto?
              </CustomToggle>
              <Accordion.Collapse style={{ fontWeight: "600" }} eventKey="1">
                <Card.Body>
                  Tu compañía actual puede tener en cuenta todos los golpes que
                  hayas tenido para establecer el precio de renovación, pero
                  esto no significa que hayas perdido la bonificación. De cara a
                  otras compañías de seguro solo perderás parte de tu
                  bonificación en caso de que tengas un{" "}
                  <strong>
                    accidente con tu vehículo en el que exista al menos un
                    tercero y seas culpable
                  </strong>{" "}
                  del mismo.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                border: "none",
                margin: "10px 0",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              <CustomToggle as={Card.Header} eventKey="2">
                Quiero cambiar de seguro ¿Cuándo vence mi seguro? ¿Tengo que
                avisar a la compañía?
              </CustomToggle>
              <Accordion.Collapse style={{ fontWeight: "600" }} eventKey="2">
                <Card.Body>
                  Las pólizas de seguro, salvo excepciones, suelen ser anuales
                  renovables. De este modo tu seguro vencerá un año despues de
                  la contratación y se{" "}
                  <strong>
                    renovará automáticamente si no avisas a la compañía de que
                    no quieres renovar
                  </strong>
                  . Ten en cuenta que aunque el seguro te lo cobren trimestral o
                  semestralmente, no podrás cambiarte de seguro hasta que llegue
                  el vencimiento anual, y que el aviso se debe de hacer con al
                  menos un mes de antelación mediante un documento firmado
                  indicando que no quieres renovar, acompañado de una copia de
                  tu DNI.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card
              style={{
                border: "none",
                margin: "10px 0 0 0",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              <CustomToggle as={Card.Header} eventKey="3">
                ¿Puedo cambiar de seguro de decesos o perderé la "antigüedad"?
              </CustomToggle>
              <Accordion.Collapse style={{ fontWeight: "600" }} eventKey="3">
                <Card.Body>
                  La antigüedad como tal no existe. Es una forma coloquial de
                  decir que a veces puede no convenir cambiar de seguro de
                  decesos. <strong>Si te cobran cada año lo mismo</strong> por
                  el seguro de decesos tienes contratada una tarifa con prima
                  nivelada, en estos casos{" "}
                  <strong>
                    hay que estudiar detenidamente si merece la pena cambiar de
                    seguro
                  </strong>{" "}
                  de decesos. ¡Consúltanos! Puedes confiar en nosotros, si ya
                  estás bien asegurado te explicaremos por qué y te
                  recomendaremos que te quedes en tu actual compañía.
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    </ScFaq>
  );
};

export default Faq;
