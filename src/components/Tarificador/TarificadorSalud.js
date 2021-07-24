import React, { useState } from "react";
// ESTILOS
import { ScTarificadorSalud, ScFechas, ScPanel, ScPrecio } from "./style.js";
import { ScUserButtons } from "../Buttons/styles.js";
import { ScSubtitle, Separator, ScTextTitle } from "../../globalStyles.js";
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
      setFechaNac([...fechaNac, { id: uuidv4(), nac: fechaSeleccionada }]);
    }
  };

  const borrarFecha = (id) => {
    const filtrarFecha = fechaNac.filter((elem) => elem.id !== id);
    setFechaNac([...filtrarFecha]);
  };

  const tarifaSaludG10 = [3982, 4366, 5085, 6780];
  const tarifaDentalG10 = 551;

  const darPrecio = (fecha) => {
    let precio = 0;

    const precioCadaAsegurado = fecha.map((elem) => {
      const edadMiliseg = Date.now() - elem.nac;
      const edadAnios = edadMiliseg / 1000 / 60 / 60 / 24 / 365;
      const edadAbs = parseInt(edadAnios);

      if (edadAbs < 21) return tarifaSaludG10[0];
      if (edadAbs < 50) return tarifaSaludG10[1];
      if (edadAbs < 60) return tarifaSaludG10[2];
      return tarifaSaludG10[3];
    });

    precioCadaAsegurado.forEach((elem) => (precio += elem));

    return precio / 100;
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
                    <p className="fechaAsegurado">{parseFechas(elem.nac)}</p>
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
          <ScPrecio>
            <ScTextTitle>¿Cuanto me costará?</ScTextTitle>
            <p
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              {`${darPrecio(fechaNac)} €/mes`}
            </p>
          </ScPrecio>
        </ScPanel>
      </Container>
    </ScTarificadorSalud>
  );
};

export default TarificadorSalud;
