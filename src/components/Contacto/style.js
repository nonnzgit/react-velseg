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

  .cardContainer {
    border-radius: 10px;
    overflow: hidden;
  }

  .firstCard {
    background: ${colors.gradient};
    color: white;
  }

  .secondCard {
    background: white;
    color: black;

    .secondCardInfo {
    }
  }
`;
