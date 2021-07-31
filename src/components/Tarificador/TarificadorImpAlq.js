import React, { useState, useEffect } from "react";
// ESTILOS
import {
  ScPanel,
  ScTarificadorImpAlq,
  ScSelectorRenta,
  ScSelectorDoc,
  BannerAlquiler,
  ScPrecio,
  StickyDiv,
} from "./style.js";
import {
  ScSubtitle,
  Separator,
  ScTextBasic,
  ScTextTitle,
} from "../../globalStyles";
// BOOTSTRAP
import { Container, InputGroup, FormControl } from "react-bootstrap";

const TarificadorImpAlq = () => {
  const [renta, setRenta] = useState(0);
  const [doc, setDoc] = useState({
    asalariado: false,
    autonomo: false,
    pensionista: false,
    sociedad: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.value.match(/^\d{3,4}$/) != null) {
      setRenta(e.target.value);
    } else {
      setRenta(0);
    }
  };

  const handleCheckbox = (e) => {
    setDoc((prevState) => ({
      ...prevState,
      [e.target.value]: e.target.checked,
    }));
  };

  const darPrecio = () => {
    const rentaAnual = renta * 12;
    const primaNetaTipo = 0.044513;
    const ISSTipo = 0.08;
    const riesgosEsp = 1.23;
    const IDGSTipo = 0.0015;
    const primaNeta = primaNetaTipo * rentaAnual;
    const ISS = ISSTipo * primaNeta;
    const IDGS = IDGSTipo * primaNeta;
    const precio = primaNeta + ISS + IDGS + riesgosEsp;

    return Math.round(precio * 100) / 100;
    // Cometemos un pequeño error de 1 a 3 centimos al dar el precio, podemos asumirlo ya que no conocemos la tarifa exacta, y el precio es aproximado y porque no tiene que validar como true en ninguns condicional.
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScTarificadorImpAlq>
      <Container fluid={"xl"}>
        <ScSubtitle responsive>Tarificador Impago Alquiler</ScSubtitle>
        <Separator />
        <div className="parrilla">
          <ScPanel>
            <ScSelectorRenta>
              <h5 className="tituloRentaAsegurada">
                Importe del alquiler mensual
              </h5>
              <InputGroup>
                <FormControl
                  placeholder="Introduce una renta"
                  aria-label="Amount"
                  onChange={handleChange} //Regex included here.
                />
                <InputGroup.Text>€/mes</InputGroup.Text>
              </InputGroup>
            </ScSelectorRenta>
            <ScSelectorDoc>
              <div className="titleDoc">
                <ScTextBasic bold style={{ textAlign: "center" }}>
                  Documentación necesaria.
                </ScTextBasic>
                <h5 style={{ fontSize: "1rem" }}>
                  La compañía realiza un estudio, y determina si se puede hacer
                  el seguro a esos inquilinos. Para ello hay que aportar la
                  siguiente documentación:
                </h5>
                <p style={{ fontSize: "0.8rem", lineHeight: "1.2rem" }}>
                  (Marca la casilla correspondiente si existe algún inquilino o
                  avalista que reciba ingresos de esta forma)
                </p>
              </div>

              <div className="infoDoc">
                <ScTextBasic bold>Aportar siempre:</ScTextBasic>
                <ul>
                  <li>
                    Solicitud de seguro firmada{" "}
                    <a href="tel:+34955327396">(+info)</a>
                  </li>
                  <li>DNI/CIF de Inquilinos y Avalistas</li>
                </ul>
                <label className="checkboxLabel">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="asalariado"
                    value="asalariado"
                    onChange={handleCheckbox}
                  />
                  Recibe un salario
                </label>
                {doc.asalariado && (
                  <ul>
                    <li>Dos últimas Nóminas (Fijo {">"} 1 año)</li>
                    <li>Vida Laboral (Fijo {"<"} 1 año)</li>
                  </ul>
                )}
                <label className="checkboxLabel">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="autonomo"
                    value="autonomo"
                    onChange={handleCheckbox}
                  />
                  Es autonomo
                </label>
                {doc.autonomo && (
                  <ul>
                    <li>Alta de autónomo</li>
                    <li>Última declaración IRPF</li>
                    <li>Dos últimos pagos autónomo a la Seg. Social</li>
                  </ul>
                )}
                <label className="checkboxLabel">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="pensionista"
                    value="pensionista"
                    onChange={handleCheckbox}
                  />
                  Es pensionista
                </label>
                {doc.pensionista && (
                  <ul>
                    <li>Certificado pensiones</li>
                    <li>Comunicación actualización anual pensión</li>
                  </ul>
                )}
                <label className="checkboxLabel">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="sociedad"
                    value="sociedad"
                    onChange={handleCheckbox}
                  />
                  Es una empresa
                </label>
                {doc.sociedad && (
                  <ul>
                    <li>Alta Hacienda (Mod 036/037)</li>
                    <li>
                      Certificado de estar al corriente de pago obligaciones
                      tributarias y con la Seg. Social
                    </li>
                    <li>
                      IS del último ejercicio y justificante de sus ingresos a
                      cuenta
                    </li>
                  </ul>
                )}
              </div>
            </ScSelectorDoc>
          </ScPanel>
          <StickyDiv>
            <ScPrecio>
              {(renta === 0 && (
                <p>
                  Para conocer su precio, introduzca una renta comprendida entre
                  100 y 10000 € sin decimales.
                </p>
              )) || (
                <div>
                  <ScTextTitle>¿Cuanto me costará?</ScTextTitle>
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1.5rem",
                    }}
                  >
                    {`${darPrecio()} €/año`}
                  </p>
                </div>
              )}
            </ScPrecio>
          </StickyDiv>
        </div>
      </Container>
      <BannerAlquiler />
    </ScTarificadorImpAlq>
  );
};

export default TarificadorImpAlq;
