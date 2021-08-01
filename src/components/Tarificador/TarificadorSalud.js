import React, { useState, useEffect } from "react";
// ESTILOS
import {
  ScTarificadorSalud,
  ScFechas,
  ScPanel,
  ScPrecio,
  StickyDiv,
  BannerSalud,
  InfoDiv,
} from "./style.js";
import { ScUserButtons } from "../Buttons/styles.js";
import {
  ScSubtitle,
  Separator,
  ScTextTitle,
  ScTextBasic,
  ScTextLead,
} from "../../globalStyles.js";
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
  // HOOKS
  const [fechaNac, setFechaNac] = useState([]);
  const [numDental, setNumDental] = useState(0);
  // In case "clients" (items to map) fall behind "clients who wanna buy dental insurance" (numDental), update the last to match the actual max number of clients.
  useEffect(() => {
    if (numDental > fechaNac.length) {
      setNumDental(fechaNac.length);
    }
  }, [numDental, fechaNac]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FUNC
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

  const handleNumDental = (e) => {
    setNumDental(e.target.value);
  };

  const darPrecio = () => {
    // 1 . Create array for Age
    const edadCadaAsegurado = fechaNac.map((elem) => {
      // Set dates to compare
      const today = new Date();
      const input = new Date(elem.nac);
      // Extract data to use in logic
      const yearToday = today.getFullYear();
      const yearInput = input.getFullYear();
      const monthToday = today.getMonth();
      const monthInput = input.getMonth();
      const dayToday = today.getDate();
      const dayInput = input.getDate();
      const provAge = yearToday - yearInput;
      // Logic:
      // Get full lived number of years.
      if (yearToday === yearInput) return 0;
      if (monthToday < monthInput) return provAge - 1;
      if (monthToday === monthInput) {
        if (dayToday > dayInput) return provAge - 1;
        return provAge;
      }
      return provAge;
    });

    // 2. Calculate prices
    // Prices Tables
    const tarifaSaludG10 = [3982, 4366, 5085, 6780];
    const tarifaDentalG10 = 551;
    // Logic
    const precioCadaAsegurado = edadCadaAsegurado.map((edad) => {
      if (edad < 21) return tarifaSaludG10[0];
      if (edad < 50) return tarifaSaludG10[1];
      if (edad < 60) return tarifaSaludG10[2];
      return tarifaSaludG10[3];
    });

    // Add prices per client (Excl Dental)
    let precioTotal = 0;
    precioCadaAsegurado.forEach(
      (precioIndividual) => (precioTotal += precioIndividual)
    );
    // Add prices por client (Incl Dental)
    precioTotal += numDental * tarifaDentalG10;

    // 3.TOTAL
    return precioTotal / 100;
  };

  // UI
  return (
    <ScTarificadorSalud>
      <Container fluid={"xl"}>
        <ScSubtitle responsive>Tarificador de Salud</ScSubtitle>
        <Separator />
        <div className="parrilla">
          <ScPanel>
            <DatePick handleFecha={handleFecha} />
            <ScFechas>
              {fechaNac.length === 0 ? (
                <div>
                  <h5 style={{ textAlign: "center", fontWeight: "bold" }}>
                    Para empezar{" "}
                    <span style={{ color: "#448AFF", fontWeight: "bold" }}>
                      pulsa arriba, donde pone "Fecha de Nacimiento"
                    </span>{" "}
                    , selecciona una fecha, y añádela con el botón verde.
                  </h5>
                  <p style={{ textAlign: "center" }}>
                    ¡Ten en cuenta que puedes cambiar el año pulsando arriba a
                    la izquierda sobre él!
                  </p>
                  <p style={{ textAlign: "center" }}>
                    No tengas miedo, toca todo lo que quieras. En esta página no
                    podrás contratar, es solo para que tengas una orientación de
                    precio. ¡Y no vas a romper nada!
                  </p>
                </div>
              ) : (
                <div>
                  <ScTextBasic bold style={{ textAlign: "center" }}>
                    Lista de personas que vas a incluir en la póliza:
                  </ScTextBasic>
                  {fechaNac.map((elem, idx) => (
                    <Row key={elem.id} className="cardAsegurado">
                      <div className="datosAsegurado">
                        <h5 className="numeroAsegurado">{`Asegurado ${
                          idx + 1
                        }`}</h5>
                        <p className="fechaAsegurado">
                          {parseFechas(elem.nac)}
                        </p>
                      </div>
                      <ScUserButtons
                        danger
                        dangerborder
                        onClick={() => borrarFecha(elem.id)}
                      >
                        <FontAwesomeIcon icon={faUserTimes}></FontAwesomeIcon>
                      </ScUserButtons>
                    </Row>
                  ))}
                  <p
                    style={{
                      textAlign: "center",
                      color: "#EF5350",
                      fontWeight: "bold",
                      fontSize: "0.9rem",
                    }}
                  >
                    Puedes borrar personas que hayas incluido, pulsando el botón
                    rojo.
                  </p>
                </div>
              )}

              {fechaNac.length !== 0 ? (
                <form className="formDental">
                  <label class="labelSelect" for="dental">
                    <h6 style={{ textAlign: "center" }}>
                      ¿Cuantas de las personas que has añadido quieren también
                      <span style={{ color: "#448AFF" }}>
                        {" "}
                        cobertura dental
                      </span>
                      ?
                    </h6>
                  </label>
                  <select
                    name="numdental"
                    id="dental"
                    onChange={handleNumDental}
                    value={numDental}
                    className="select"
                  >
                    <option value={0}>0</option>
                    {fechaNac.map((elem, idx) => (
                      <option value={idx + 1}>{idx + 1}</option>
                    ))}
                  </select>
                </form>
              ) : null}
            </ScFechas>
          </ScPanel>
          <StickyDiv>
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
          </StickyDiv>
        </div>
      </Container>
      <InfoDiv>
        <Container>
          <ScTextBasic style={{ fontSize: "1.3rem" }}>
            Algunas cosas que deberías saber:
          </ScTextBasic>
          <ScTextLead small>
            <ol>
              <li>
                Los precios corresponden a seguros de salud COMPLETOS, esto
                quiere decir, que tienen cobertura para atención primaria,
                especialistas, pruebas diagnosticas, hospitalización, etc.
              </li>
              <li>
                Los precios corresponden a seguros de salud SIN COPAGO, esto
                quiere decir, que no tendrás que pagar cuando tengas que usarlo.
              </li>
              <li>
                El seguro de salud podrá usarse desde que el día que se
                contrate, pero algunas coberturas un tiempo más tarde. Esto es
                lo que llamamos CARENCIAS, no te preocupes, no son muchas, y
                además solemos tener promociones que las eliminan, pregúntanos.
              </li>
              El seguro de salud tiene un CUADRO MEDICO, que contiene todos los
              centros y profesionales a los que podrás ir.
              <li>
                El seguro dental también tiene un cuadro médico, pero en él no
                todos los servicios son gratuitos, pero tienen un descuento
                importante sobre los precios de mercado.
              </li>
              <li>
                Las compañías de salud solo cubren aquello que te ocurre desde
                que contratas el seguro, todas las enfermedades que tuvieras con
                anterioridad, podrán ser excluidas. Para ello, antes de
                contratar te pasaremos un cuestionario de salud que deberás
                entregar firmado, y la compañía nos responderá indicándonos si
                podemos emitir la póliza de seguro y si existiría alguna
                exclusión.
              </li>
              <li>
                Hemos realizado la web para que los precios se ajusten lo máximo
                posible a la realidad, casi seguro que se corresponderán con el
                que te ofrezcamos cuando contactes con nosotros, pero son solo
                una orientación.
              </li>
              <li>
                Este es el seguro que más contratan nuestros clientes, pero
                tenemos seguros de salud con todo tipo de coberturas y de
                diversas compañías, contacta con nosotros y te ofreceremos el
                que más se ajuste a tus necesidades.
              </li>
            </ol>
          </ScTextLead>
        </Container>
      </InfoDiv>
      <BannerSalud />
    </ScTarificadorSalud>
  );
};

export default TarificadorSalud;
