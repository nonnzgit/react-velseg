import styled from "styled-components";
import { colors } from "../../globalStyles.js";
// BOOTSTRAP
import { Nav, Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  background: ${colors.gradient};

  .CcHamMenu {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledNavlink = styled(Nav.Link)`
  color: white;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.8rem;
  padding: 0.4rem 1rem;
  margin: auto 0;
`;
