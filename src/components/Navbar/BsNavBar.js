// BOOTSTRAP
import { Nav, Navbar } from "react-bootstrap";
// STYLED COMPONENTS
import { StyledNavbar, StyledNavlink } from "./styles.js";
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

  const toggleButton = () => {
    setToggleHam({ toggleHam: !toggleHam });
  };

  return (
    <StyledNavbar
      collapseOnSelect
      className="navbar-dark shadow sticky-top"
      expand="lg"
    >
      <div className="container">
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
            <StyledNavlink
              active
              href="#home"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Servicios
            </StyledNavlink>
            <StyledNavlink
              active
              href="#home"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Productos
            </StyledNavlink>
            <StyledNavlink
              active
              href="#home"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Compañías
            </StyledNavlink>
            <StyledNavlink
              active
              href="#home"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              FAQ
            </StyledNavlink>
            <StyledNavlink
              active
              href="#home"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              Contacta
            </StyledNavlink>
            <StyledNavlink
              href="tel:+34955327396"
              onClick={() => setToggleHam((prevToggleHam) => !prevToggleHam)}
            >
              <ButtonPhone innerText={"955 327 396"} />
            </StyledNavlink>
          </Nav>
        </Navbar.Collapse>
      </div>
    </StyledNavbar>
  );
};

export default BsNavBar;
