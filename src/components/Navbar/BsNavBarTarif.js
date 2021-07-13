// BOOTSTRAP
import { Nav, Navbar, Container } from "react-bootstrap";
// STYLED COMPONENTS
import { ScNavbar, ScNavlink, ScReactRouterLink } from "./styles.js";
import { ButtonPhone } from "../Buttons/Buttons.js";
// LOGO
import Logo from "../../images/logo.png";
// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// HOOKS
import React, { useState } from "react";

const BsNavBarTarif = () => {
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <ScNavbar
      collapseOnSelect
      className="navbar-dark shadow sticky-top"
      expand="lg"
    >
      <Container fluid="xl">
        <Navbar.Brand>
          <img src={Logo} alt="logo empresa" width="130px" />
        </Navbar.Brand>
        <div className="CcHamMenu">
          <Navbar.Toggle
            onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            className="text-white border-0"
            aria-controls="basic-navbar-nav"
          >
            {toggleHam ? (
              <FontAwesomeIcon icon={faTimes} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto d-flex align-items-center">
            {/* Siempre hay condicionar el renderizado del boton a que no estemos en el path al que lleva ese boton */}

            {window.location.pathname !== "/tarificador/salud" && (
              <ScReactRouterLink
                to="/tarificador/salud"
                onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
              >
                Salud
              </ScReactRouterLink>
            )}

            {window.location.pathname !== "/tarificador/impagoalquiler" && (
              <ScReactRouterLink
                to="/tarificador/impagoalquiler"
                onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
              >
                Impago Alquiler
              </ScReactRouterLink>
            )}

            <ScNavlink
              href="tel:+34955327396"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              <ButtonPhone innerText={"955 327 396"} />
            </ScNavlink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </ScNavbar>
  );
};

export default BsNavBarTarif;
