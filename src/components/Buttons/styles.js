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

export const StyledButtonNavigation = styled.button`
  font-size: 1.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  color: white;
  font-weight: bold;
  border-radius: 50%;
  border: none;
  width: 3.5rem;
  height: 3.5rem;
  background: ${colors.secondary};
  z-index: 11;

  &:hover {
    background: black;
    transition: background 0.175s ease-in-out;
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

export const ScUserButtons = styled.button`
  background: ${colors.secondary};
  background: ${(props) => props.danger && "#EF5350"};
  border: 2px solid ${colors.secondary};
  border: ${(props) => props.dangerborder && "2px solid #EF5350"};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  margin: 0.5rem;
  color: white;
  border-radius: 10px;
  font-size: 1.2rem;
  height: 2.2rem;
  width: 2.2rem;
  box-shadow: 2px 2px rgba(37, 49, 55, 10%);

  &:hover {
    background: black;
  }
`;
