import styled from "styled-components";
import { colors } from "../../globalStyles.js";
// BOOTSTRAP
import { Button } from "react-bootstrap";

export const StyledButton = styled(Button)`
  padding: 0.2rem 0.5rem 0.2rem 1rem;
  color: black;
  font-weight: 600;
  background: white;
  transition: all 0.1s linear;
  border: 1.5px solid white;

  @media (hover) {
    &:hover {
      background: ${colors.gradient};
      color: white;
      border: 1px solid white;

      div {
        transition: all 0.1s linear;
        background-color: black;
      }
    }
  }
`;

export const StyledPhoneIcon = styled.div`
  display: inline-block;
  padding: 0.2rem;
  margin-left: 0.5rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background: ${colors.secondary};
  transition: all 0.0001s linear;
`;
