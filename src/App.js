import BsNavBar from "./components/Navbar/BsNavBar.js";
import Intro from "./components/Intro/Intro.js";
import Servicios from "./components/Servicios/Servicios.js";
import Productos from "./components/Productos/Productos.js";
import Companies from "./components/Companies/Companies.js";
import Faq from "./components/FAQ/Faq.js";
import Contacto from "./components/Contacto/Contacto.js";

function App() {
  return (
    <>
      <BsNavBar />
      <Intro />
      <Servicios />
      <Productos />
      <Companies />
      <Faq />
      <Contacto />
    </>
  );
}

export default App;
