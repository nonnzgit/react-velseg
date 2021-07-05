import styled from "styled-components";
import { colors } from "../../globalStyles.js";

export const ScCompanies = styled.section`
  padding: 5rem 0 1rem 0;
  background: white;


  span {
    color: ${colors.primary}
  }
  strong {
    color: ${colors.secondary}
  }

  .swiper-container {
    width: 100%;
    height: 120px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      max-height: 120px;
      object-fit: contain;
      transition: transform ease-in-out 0.2s;

      &:hover {
          border-bottom: solid ${colors.secondary};
          transform: translateY(-4px);
      }
    }
`;
