// STYLED COMPONENTS
import {
  StyledButton,
  StyledPhoneIcon,
  StyledButtonWhite,
  StyledButtonNavigation,
} from "./styles.js";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPhoneAlt,
  faChevronUp,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
// ReactRouter
import { Link } from "react-router-dom";

export const ButtonPhone = (props) => {
  return (
    <StyledButton type="button" className="rounded-pill btn-rounded">
      {props.innerText}
      <StyledPhoneIcon>
        <FontAwesomeIcon icon={faPhoneAlt} />
      </StyledPhoneIcon>
    </StyledButton>
  );
};

export const ButtonArrow = (props) => {
  return (
    <StyledButton type="button" className="rounded-pill btn-rounded">
      {props.innerText}
      <StyledPhoneIcon>
        <FontAwesomeIcon icon={faArrowRight} />
      </StyledPhoneIcon>
    </StyledButton>
  );
};

export const ButtonArrowWhite = (props) => {
  return (
    <StyledButtonWhite type="button" className="rounded-pill btn-rounded">
      {props.innerText}
      <StyledPhoneIcon>
        <FontAwesomeIcon icon={faArrowRight} />
      </StyledPhoneIcon>
    </StyledButtonWhite>
  );
};

export const ButtonToTop = () => {
  const topPage = () => document.body.scrollIntoView({ behavior: "smooth" });

  return (
    <Link to="/" onClick={topPage}>
      <StyledButtonNavigation
        type="button"
        className="rounded-pill btn-rounded"
      >
        <FontAwesomeIcon icon={faChevronUp} />
      </StyledButtonNavigation>
    </Link>
  );
};

export const ButtonBack = () => {
  return (
    <Link to="/">
      <StyledButtonNavigation
        type="button"
        className="rounded-pill btn-rounded"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </StyledButtonNavigation>
    </Link>
  );
};
