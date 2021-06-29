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

  &:hover {
    background-color: white;
    color: black;
  }

  &:active,
  &:visited,
  &:focus,
  &:hover {
    background-color: white;
    color: black;
    border: 1.5px solid white;
    box-shadow: none;
  }

  @media (hover) {
    &:hover {
      background: ${colors.gradient};
      color: white;
      border: 1.5px solid white;

      div {
        transition: all 0.1s linear;
        background-color: black;
      }
    }
  }
`;

export const StyledButtonWhite = styled(StyledButton)`
  border: 1.5px solid ${colors.primary};

  &:active,
  &:visited,
  &:focus,
  &:hover {
    border: 1.5px solid ${colors.primary};
    box-shadow: none;
  }

  @media (hover) {
    &:hover {
      border: 1.5px solid ${colors.primary};
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
