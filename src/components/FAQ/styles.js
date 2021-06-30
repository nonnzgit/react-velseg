import styled from "styled-components";
import { colors } from "../../globalStyles";

export const ScFaq = styled.section`
  background: ${colors.gradient};
  color: white;

  .acordeon {
    color: black;
    justify-content: flex-end;
    width: 100%;
    border-radius: 0.5rem;
    display: flex;
    margin: 3rem 0 0 0;

    strong {
      color: ${colors.secondary};
      font-weight: 700;
    }
  }

  #faq {
    padding: 5rem 15px;
  }
`;
