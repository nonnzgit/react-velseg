import styled from "styled-components";
import { colors } from "../../globalStyles.js";

/* PRODUCTOS */
export const ScProductos = styled.div`
  background: white;
  padding: 5rem 0 2rem 0;

  .botonera {
    display: flex;
    justify-content: center;
    margin: 3rem 0 1rem 0;
  }

  .btnTarif {
    color: black;
    font-weight: 600;
    background: white;
    border: 2px solid ${colors.secondary} !important;

    &:hover {
      background: ${colors.secondary};
      color: white;
      transition: all 0.0001s linear;
    }

    &:active {
      outline: 4px solid #e6ee9c;
      color: white !important;
    }

    &:focus {
      outline: 4px solid #e6ee9c;
    }
  }
`;

/* CARDS */

export const ScCards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

/* CARD */
export const ScCardContainer = styled.div`
  position: relative;
  width: 90%;
  height: auto;
  overflow: hidden;
  margin-bottom: 1.2rem;
  border-radius: 1rem;
  border-top: solid 0.4rem;
  border-color: ${colors.secondary};
  justify-content: center;
  width: 100%;

  &:hover {
    .CcCardInfo {
      visibility: visible;
      opacity: 1;
    }

    img {
      transform: scale(1.2);
      transition: all 0.75s ease-in-out;
    }
  }

  .CcCardInfo {
    background-color: rgba(0, 77, 179, 0.75);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: visibility 0.25s linear, opacity 0.25s linear;
  }

  .CcTextInfo {
    margin: 0 auto;
    text-align: center;
    color: white;
    width: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h4 {
      font-weight: bold;
      margin-bottom: 0.3rem;
      padding: 0.2rem 0;
      border: solid 1px ${colors.secondary};
      width: 75%;
      margin: 0.5rem auto;

      span {
        color: ${colors.secondary};
      }
    }

    p {
      width: 100%;
    }
  }
`;
