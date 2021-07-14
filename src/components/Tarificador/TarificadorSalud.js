import React from "react";
import { ScTarificadorSalud } from "./style.js";
import { ScSubtitle, Separator } from "../../globalStyles";

const TarificadorSalud = () => {
  return (
    <ScTarificadorSalud>
      <ScSubtitle responsive>Tarificador de Salud</ScSubtitle>
      <Separator />
      <form action="">
        <button>+</button>
        <input type="date" />
      </form>
    </ScTarificadorSalud>
  );
};

export default TarificadorSalud;
