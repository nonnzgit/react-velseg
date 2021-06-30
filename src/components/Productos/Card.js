import { ScCardContainer } from "./styles.js";
import { Col } from "react-bootstrap";
import React from "react";

const Card = (props) => {
  return (
    <Col lg={4} md={6}>
      <ScCardContainer className="shadow">
        <img
          src={props.imagen}
          alt={props.alt}
          title={props.alt}
          className="img-fluid"
        />
        <div className="CcCardInfo">
          <div className="CcTextInfo">
            <h4>{props.titulo}</h4>
            <p>{props.bait}</p>
          </div>
        </div>
      </ScCardContainer>
    </Col>
  );
};

export default Card;
