import styled from "styled-components";

export const colors = {
  primary: "#004db3",
  secondary: "#c5c900",
  gradient:
    "linear-gradient(to right, rgba(0, 77, 179, 0.95), rgba(14, 159, 255, 0.95))",
};

export const ScTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 10vw;
  font-weight: 600;
  line-height: 1;
  padding: 1rem 0;
  font-weight: bold;

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export const ScTextLead = styled.p.attrs(() => ({
  className: "lead",
}))`
  font-family: "Poppins", sans-serif;
  line-height: ${(props) => props.lineH && "2"};
  font-weight: ${(props) => props.bold && "bold"};

  @media (min-width: 576px) {
    font-size: ${(props) => props.responsive && "1.175rem"};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.responsive && "1.3rem"};
  }

  @media (min-width: 992px) {
    font-size: ${(props) => props.responsive && "1.5rem"};
  }
`;

export const ScTextBasic = styled.p`
  font-family: "Poppins", sans-serif;
  line-height: ${(props) => props.lineH && "2"};
  font-weight: ${(props) => props.bold && "bold"};
  

  @media (min-width: 576px) {
    font-size: ${(props) => props.responsive && "1.175rem"};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.responsive && "1.3rem"};
  
  @media (min-width: 992px) {
    font-size: ${(props) => props.responsive && "1.5rem"};
  }
`;
