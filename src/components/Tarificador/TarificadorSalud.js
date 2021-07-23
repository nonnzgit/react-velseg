import React, { useState } from "react";
// ESTILOS
import { ScTarificadorSalud, ScFechas, ScPanel, ScPrecio } from "./style.js";
import { ScUserButtons } from "../Buttons/styles.js";
import { ScSubtitle, Separator } from "../../globalStyles.js";
// COMPONENTES
import DatePick from "../Datepick/DatePick.js";
// BOOTSTRAP
import { Container, Row } from "react-bootstrap";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTimes } from "@fortawesome/free-solid-svg-icons";
// UUID
import { v4 as uuidv4 } from "uuid";

const TarificadorSalud = () => {
  const [fechaNac, setFechaNac] = useState([]);

  const parseFechas = (fecha) => {
    const dia = fecha.getDate() < 10 ? "0" + fecha.getDate() : fecha.getDate();
    const mes =
      fecha.getMonth() < 9
        ? "0" + (fecha.getMonth() + 1)
        : fecha.getMonth() + 1;
    const anio = fecha.getFullYear();
    return `${dia} / ${mes} / ${anio}`;
  };

  const handleFecha = (fechaSeleccionada) => {
    if (fechaNac.length === 6) {
      window.alert(
        "Si quieres saber cual es la tarifa correspondiente a más de 6 asegurados en una misma póliza, por favor contacta con nosotros."
      );
    } else {
      setFechaNac([...fechaNac, { id: uuidv4(), Nac: fechaSeleccionada }]);
    }
  };

  const borrarFecha = (id) => {
    const filtrarFecha = fechaNac.filter((elem) => elem.id !== id);
    setFechaNac([...filtrarFecha]);
  };

  return (
    <ScTarificadorSalud>
      <Container fluid={"xl"}>
        <ScSubtitle responsive>Tarificador de Salud</ScSubtitle>
        <Separator />
        <ScPanel>
          <DatePick handleFecha={handleFecha} />
          <ScFechas>
            <p style={{ textAlign: "center", fontWeight: "bold" }}>
              Personas a incluir:
            </p>
            {fechaNac.length === 0 ? (
              <p style={{ textAlign: "center" }}>
                Empieza agregando la fecha de nacimiento de un asegurado
              </p>
            ) : (
              fechaNac.map((elem, idx) => (
                <Row key={elem.id} className="cardAsegurado">
                  <div className="datosAsegurado">
                    <h5 className="numeroAsegurado">{`Asegurado ${
                      idx + 1
                    }`}</h5>
                    <p className="fechaAsegurado">{parseFechas(elem.Nac)}</p>
                  </div>
                  <ScUserButtons
                    danger
                    dangerborder
                    onClick={() => borrarFecha(elem.id)}
                  >
                    <FontAwesomeIcon icon={faUserTimes}></FontAwesomeIcon>
                  </ScUserButtons>
                </Row>
              ))
            )}
          </ScFechas>
          <ScPrecio />
        </ScPanel>
      </Container>
    </ScTarificadorSalud>
  );
};

export default TarificadorSalud;
