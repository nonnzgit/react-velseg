import BsNavBar from "./components/Navbar/BsNavBar.js";
import BsNavBarTarif from "./components/Navbar/BsNavBarTarif.js";
import Intro from "./components/Intro/Intro.js";
import Servicios from "./components/Servicios/Servicios.js";
import Productos from "./components/Productos/Productos.js";
import Companies from "./components/Companies/Companies.js";
import Faq from "./components/FAQ/Faq.js";
import Contacto from "./components/Contacto/Contacto.js";
import Footer from "./components/Footer/Footer.js";
import TarificadorImpAlq from "./components/Tarificador/TarificadorImpAlq.js";
import TarificadorSalud from "./components/Tarificador/TarificadorSalud.js";
import { ButtonToTop, ButtonBack } from "./components/Buttons/Buttons.js";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <BsNavBar />
        <Intro />
        <Servicios />
        <Productos />
        <Companies />
        <Faq />
        <Contacto />
        <Footer />
        <ButtonToTop />
      </Route>

      <Route exact path="/tarificador/salud">
        <BsNavBarTarif />
        <TarificadorSalud />
        <Footer />
        <ButtonBack />
      </Route>

      <Route exact path="/tarificador/impagoalquiler">
        <BsNavBarTarif />
        <TarificadorImpAlq />
        <Footer />
        <ButtonBack />
      </Route>
    </BrowserRouter>
  );
}

export default App;
