import React from "react";
import { ScSubtitle } from "../../globalStyles";
// BOOTSTRAP
import { Container } from "react-bootstrap";
import { ScProductos } from "./styles.js";

const Productos = () => {
  return (
    <ScProductos>
      <Container fluid={"xl"}>
        <ScSubtitle>Productos</ScSubtitle>
      </Container>
    </ScProductos>
  );
};

export default Productos;
