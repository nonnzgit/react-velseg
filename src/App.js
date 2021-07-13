import BsNavBar from "./components/Navbar/BsNavBar.js";
import Intro from "./components/Intro/Intro.js";
import Servicios from "./components/Servicios/Servicios.js";
import Productos from "./components/Productos/Productos.js";
import Companies from "./components/Companies/Companies.js";
import Faq from "./components/FAQ/Faq.js";
import Contacto from "./components/Contacto/Contacto.js";
import Footer from "./components/Footer/Footer.js";
import Tarificador from "./components/Tarificador/Tarificador.js";

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
      </Route>
      <Route path="/tarificador">
        <BsNavBar />
        <Tarificador />
        <Footer />
      </Route>
    </BrowserRouter>
  );
}

export default App;
