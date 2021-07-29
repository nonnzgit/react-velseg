import styled from "styled-components";
import { colors } from "../../globalStyles";
import bannerSalud from "../../images/banners/seguro-salud.webp";
import bannerAlquiler from "../../images/banners/seguro-alquiler.jpg";

export const ScTarificadorSalud = styled.section`
  background: white;
  padding-top: 5rem;

  .parrilla {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }
`;

export const ScPanel = styled.div`
  padding: 5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 687px) {
    padding: 5rem 1rem 1rem 1rem;
  } ;
`;

export const ScFechas = styled.div`
  background: #d7ccc8;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  width: 18rem;
  color: black;
  margin-bottom: 1rem;

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

export const ScPrecio = styled.div`
  padding: 1.5rem 1rem;
  background: whitesmoke;
  width: 18rem;
  margin-bottom: 1rem;
  border: 2px solid ${colors.secondary};
  text-align: center;
  color: black;
  position: sticky;
  top: 5rem;
  left: 0;
`;

export const StickyDiv = styled.div`
  padding: 5rem 1rem;

  @media (max-width: 687px) {
    padding: 1rem 1rem 5rem 1rem;
  } ;
`;

export const BannerSalud = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 77, 179, 0.4),
      rgba(14, 159, 255, 0.4)
    ),
    url(${bannerSalud});
  background-position: center;
  background-size: 100% auto;
  padding: 0;
  margin: 0;
  height: 10rem;
`;

export const InfoDiv = styled.div`
  background: whitesmoke;
  padding: 5rem 1rem;
`;

export const ScTarificadorImpAlq = styled.section`
  background: white;
  padding-top: 5rem;

  .parrilla {
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .tituloRentaAsegurada {
    color: white;
    font-size: 0.8rem;
    padding: 0;
    margin-bottom: 7px;
    align-self: flex-start;
  }
`;

export const ScSelectorRenta = styled.div`
  background: ${colors.gradient};
  color: white;
  width: 18rem;
  margin-bottom: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const BannerAlquiler = styled.div`
  background-image: linear-gradient(
      to right,
      rgba(0, 77, 179, 0.4),
      rgba(14, 159, 255, 0.4)
    ),
    url(${bannerAlquiler});
  background-position: center;
  background-size: 100% auto;
  padding: 0;
  margin: 0;
  height: 10rem;
`;

export const ScSelectorDoc = styled.div`
  background: #d7ccc8;
  border-radius: 10px;
  padding: 1.5rem 1rem;
  width: 18rem;
  color: black;
  margin-bottom: 1rem;

  .titleDoc {
    padding: 0 0.7rem;
  }

  .infoDoc {
    border: 2px solid ${colors.secondary};
    background: white;
    padding: 0.5rem 0.5rem 0.5rem 0.7rem;
    border-radius: 10px;

    ul {
      list-style-position: inside;
    }
  }

  .checkboxLabel {
    display: flex;
  }

  .checkbox {
    margin: 0.5rem;
  }
`;
