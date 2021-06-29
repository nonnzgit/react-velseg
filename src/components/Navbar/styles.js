import styled from "styled-components";
import { colors } from "../../globalStyles.js";
// BOOTSTRAP
import { Nav, Navbar } from "react-bootstrap";

export const ScNavbar = styled(Navbar)`
  background: ${colors.gradient};

  .CcHamMenu {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ScNavlink = styled(Nav.Link)`
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.8rem;
  padding: 0.4rem 1rem !important;
  margin: auto 0;

  &:hover {
    text-decoration: underline !important;
    color: white;
    text-decoration-color: ${colors.secondary} !important;
    text-decoration-thickness: 3px !important;
    text-underline-offset: 1.6rem;
  }

  @media (hover) and (max-width: 992px) {
    &:hover {
      text-underline-offset: 0.5rem;
    }
  }
`;
