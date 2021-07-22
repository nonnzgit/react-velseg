import styled from "styled-components";
import { colors } from "../../globalStyles";

export const ScTarificadorSalud = styled.section`
  background: white;
  padding-top: 5rem;
`;

export const ScTarificadorImpAlq = styled.section`
  background: white;
  padding-top: 5rem;
`;

export const ScPanel = styled.div`
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ScFechas = styled.div`
  background: #d7ccc8;
  border-radius: 10px;
  padding: 3rem 1rem;
  width: 18rem;
  color: black;

  .cardAsegurado {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .datosAsegurado {
    width: 172.33px;
    height: 48px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1.7px solid;

    .numeroAsegurado {
      color: rgba(0, 0, 0, 40%);
      font-size: 0.8rem;
      padding: 0;
      margin-bottom: 7px;
    }

    .fechaAsegurado {
      padding-bottom: 7px;
      margin: 0;
      line-height: 1rem;
    }
  }
`;

export const ScPrecio = styled.div``;
