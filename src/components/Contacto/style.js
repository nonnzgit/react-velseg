import styled from "styled-components";
import { colors } from "../../globalStyles";

export const ScContacto = styled.div`
  background: #fff;
  padding: 5rem 0 2rem 0;

  .heading {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .logoconj {
    width: 27rem;
    border-radius: 10px;

    @media (max-width: 541px) {
      width: 100%;
    }
  }

  .cardContainer {
    border-radius: 10px;
    overflow: hidden;
  }

  .firstCard {
    background: ${colors.gradient};
    color: white;

    .list {
      list-style: none;
      display: block;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      margin-bottom: 0.7rem;
      font-size: 1.3rem;

      .checkIcon {
        color: ${colors.secondary};
        margin: 0 1rem;
      }
    }
  }

  .secondCard {
    background: white;
    color: black;

    .secondCardInfo {
      display: flex;
      flex-direction: column;
      font-family: "Poppins", sans-serif;

      a:hover .iconSecondCard {
        background: ${colors.gradient};
        border: 1.5px solid #90caf9;
      }
    }

    .iconSecondCard {
      width: 80%;
      height: 35px;
      border: 1.5px solid #e6ee9c;
      margin: 0.5rem 0;
    }
  }
`;
