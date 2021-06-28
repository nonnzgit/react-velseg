// STYLED COMPONENTS
import { StyledButton, StyledPhoneIcon } from "./styles.js";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

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
