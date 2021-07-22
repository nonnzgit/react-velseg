import React, { useState } from "react";

// DATEPICKER
import esLocale from "date-fns/locale/es";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { lime } from "@material-ui/core/colors";

//ESTILOS
import { ScSelectorFecha } from "./style.js";
import { ScUserButtons } from "../Buttons/styles.js";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// DATEPICKER THEME CONFIG
const defaultMaterialTheme = createTheme({
  palette: {
    primary: lime,
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "2px solid lightgray",
        },
      },
    },
    MuiInputBase: {
      input: {
        color: "white",
      },
    },
    MuiFormLabel: {
      root: {
        color: "lightgray",
      },
    },
    MuiFormControl: {
      root: {
        width: "172.33px",
      },
    },
  },
});

function DatePick(props) {
  const [selectedDate, handleDateChange] = useState(null);

  const passFecha = () => {
    selectedDate
      ? props.handleFecha(selectedDate)
      : window.alert(
          "Comprueba que hayas introducido una fecha de nacimiento correcta para el asegurado del que pretendas conocer su tarifa."
        );
  };

  return (
    <ScSelectorFecha>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <DatePicker
            value={selectedDate}
            onChange={handleDateChange}
            label="Fecha de Nacimiento"
            format="dd '/' MM '/' yyy"
            disableFuture
            style={{ margin: "1rem" }}
          />
          <ScUserButtons onClick={passFecha}>
            <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
          </ScUserButtons>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </ScSelectorFecha>
  );
}

export default DatePick;
