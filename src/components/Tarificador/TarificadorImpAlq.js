import React, { useState, useEffect } from 'react';
// ESTILOS
import {
  ScPanel,
  ScTarificadorImpAlq,
  ScSelectorRenta,
  ScSelectorDoc,
  BannerAlquiler,
  ScPrecio,
  StickyDiv,
  InfoDiv,
} from './style.js';
import {
  ScSubtitle,
  Separator,
  ScTextBasic,
  ScTextTitle,
  ScTextLead,
} from '../../globalStyles';
// BOOTSTRAP
import { Container, InputGroup, FormControl } from 'react-bootstrap';

const TarificadorImpAlq = () => {
  const [renta, setRenta] = useState(0);
  const [doc, setDoc] = useState({
    asalariado: false,
    autonomo: false,
    pensionista: false,
    sociedad: false,
  });

  const handleChange = e => {
    e.preventDefault();
    if (e.target.value.match(/^\d{3,4}$/) != null) {
      setRenta(e.target.value);
    } else {
      setRenta(0);
    }
  };

  const handleCheckbox = e => {
    setDoc(prevState => ({
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

    if (renta !== 0) return Math.round(precio * 100) / 100;
    return 0;
    // Cometemos un pequeño error de 1 a 3 centimos al dar el precio, podemos asumirlo ya que no conocemos la tarifa exacta, y el precio es aproximado y porque no tiene que validar como true en ninguns condicional.
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ScTarificadorImpAlq>
      <Container fluid={'xl'}>
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
              {(renta === 0 && (
                <div className="instrucciones">
                  <h5 style={{ fontWeight: 'bold ', textAlign: 'center' }}>
                    Debes{' '}
                    <span style={{ color: '#448AFF' }}>
                      introducir el importe del alquiler.
                    </span>{' '}
                    en el recuadro de arriba para obtener el precio.
                  </h5>
                  <br />
                  <p style={{ fontSize: '1rem', textAlign: 'center' }}>
                    Solo serán válidos importes sin decimales entre 100 y 9999
                    €/mensuales.
                  </p>
                  <p style={{ fontSize: '1rem', textAlign: 'center' }}>
                    Aunque no influya en el precio, también te informaremos de
                    la documentación que necesitarás para contratar el seguro,
                    ya que los seguro de impago de alquiler necesitan que
                    aportes documentación que normalmente tendrás que pedir a
                    otras personas.
                  </p>
                </div>
              )) || (
                <div>
                  <div className="titleDoc">
                    <ScTextBasic bold style={{ textAlign: 'center' }}>
                      Documentación necesaria para contratar:
                    </ScTextBasic>
                    <h5 style={{ fontSize: '1rem' }}>
                      Las compañías de seguro de impago de alquiler, necesitan
                      comprobar que en el momento de la contratación hay un
                      nivel mínimo de solvencia por parte de inquilinos y
                      avalistas. Para ello debes de reunir la siguiente
                      documentación.
                    </h5>
                  </div>

                  <div className="infoDoc">
                    <ScTextBasic bold>Siempre necesitaras:</ScTextBasic>
                    <ul style={{ fontSize: '0.9rem' }}>
                      <li>
                        Solicitud de seguro firmada{' '}
                        <a href="tel:+34955327396" rel="noreferrer noopener">
                          (+info)
                        </a>
                      </li>
                      <li>DNI/CIF de Inquilinos y Avalistas</li>
                    </ul>
                    <ScTextBasic bold>
                      Si los inquilinos o avalistas son:
                    </ScTextBasic>
                    <label className="checkboxLabel">
                      <input
                        className="checkbox"
                        type="checkbox"
                        id="asalariado"
                        value="asalariado"
                        onChange={handleCheckbox}
                      />
                      Trabajador asalariado
                    </label>
                    {doc.asalariado && (
                      <ul className="innerList">
                        <li>Dos últimas Nóminas (Fijo {'>'} 1 año)</li>
                        <li>Vida Laboral (Fijo {'<'} 1 año)</li>
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
                      Autonomo
                    </label>
                    {doc.autonomo && (
                      <ul className="innerList">
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
                      Pensionista
                    </label>
                    {doc.pensionista && (
                      <ul className="innerList">
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
                      Empresas
                    </label>
                    {doc.sociedad && (
                      <ul className="innerList">
                        <li>Alta Hacienda (Mod 036/037)</li>
                        <li>
                          Certificado de estar al corriente de pago obligaciones
                          tributarias y con la Seg. Social
                        </li>
                        <li>
                          IS del último ejercicio y justificante de sus ingresos
                          a cuenta
                        </li>
                      </ul>
                    )}
                    <p
                      style={{
                        textAlign: 'center',
                        color: '#EF5350',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                      }}
                    >
                      Marca tantas casillas como sean necesarias, según el tipo
                      de trabajo de cada inquilino.
                    </p>
                  </div>
                </div>
              )}
            </ScSelectorDoc>
          </ScPanel>
          <StickyDiv>
            <ScPrecio>
              {
                <div>
                  <ScTextTitle>¿Cuanto me costará?</ScTextTitle>
                  <p
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      fontSize: '1.5rem',
                    }}
                  >
                    {`${darPrecio()} €/año`}
                  </p>
                </div>
              }
            </ScPrecio>
          </StickyDiv>
        </div>
      </Container>
      <InfoDiv>
        <Container>
          <ScTextBasic style={{ fontSize: '1.3rem' }}>
            Algunas cosas que deberías saber:
          </ScTextBasic>
          <ScTextLead small>
            <ol>
              <li>
                Los precios corresponden a seguros que cubren 12 mensualidades
                de alquiler impagadas.
              </li>
              <li>
                Ten en cuenta que existe un mes de franquicia en el seguro de
                impago de alquiler.
              </li>
              <li>
                Hemos realizado la web para que los precios se ajusten lo máximo
                posible a la realidad, pero en el caso del seguro de impago de
                alquiler, el propio tarificador puede dar lugar a una diferencia
                de centimos, en cualquier caso, podría haber diferencias de
                precio por diversos motivos, por lo que solo deberías tomarlos
                como una orientación.
              </li>
              <li>
                Este es el seguro que más contratan nuestros clientes, pero
                tenemos seguros de impago de alquiler con mas coberturas y de
                diversas compañías, contacta con nosotros y te ofreceremos el
                que más se ajuste a tus necesidades, o simplemente si tienes
                alguna duda o quieres ampliar información.
              </li>
            </ol>
          </ScTextLead>
        </Container>
      </InfoDiv>
      <BannerAlquiler />
    </ScTarificadorImpAlq>
  );
};

export default TarificadorImpAlq;
