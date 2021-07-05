// BOOTSTRAP
import { Nav, Navbar, Container } from "react-bootstrap";
// STYLED COMPONENTS
import { ScNavbar, ScNavlink } from "./styles.js";
import { ButtonPhone } from "../Buttons/Buttons.js";
// LOGO
import Logo from "../../images/logo.png";
// FONTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// HOOKS
import React, { useState } from "react";

const BsNavBar = () => {
  const [toggleHam, setToggleHam] = useState(false);

  return (
    <ScNavbar
      collapseOnSelect
      className="navbar-dark shadow sticky-top"
      expand="lg"
    >
      <Container fluid="xl">
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo empresa" />
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
            <ScNavlink
              active
              href="#servicios"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Servicios
            </ScNavlink>
            <ScNavlink
              active
              href="#productos"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Productos
            </ScNavlink>
            <ScNavlink
              active
              href="#companies"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Compañías
            </ScNavlink>
            <ScNavlink
              active
              href="#faq"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              FAQ
            </ScNavlink>
            <ScNavlink
              active
              href="#contacto"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Contacta
            </ScNavlink>
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

export default BsNavBar;
