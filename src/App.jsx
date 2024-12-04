import { useRef } from "react";
import Inicio from "./sections/inicio/Inicio";
import Header from "./components/Header";
import Sobre from "./sections/sobre/Sobre";
import Chocolate from "./sections/chocolates/Chocolates";

const App = () => {
  const sectionRefInicio = useRef(null);
  const scrollToInicio = () =>
    sectionRefInicio.current.scrollIntoView({ behavior: "smooth" });

  const sectionRefSobre = useRef(null);
  const scrollToSobre = () =>
    sectionRefSobre.current.scrollIntoView({ behavior: "smooth" });

  const sectionRefChocolates = useRef(null);
  const scrollToChocolates = () =>
    sectionRefChocolates.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="landing">
      <Header
        scrollToInicio={scrollToInicio}
        scrollToSobre={scrollToSobre}
        scrollToChocolates={scrollToChocolates}
      />
      <div ref={sectionRefInicio}>
        <Inicio />
      </div>
      <div ref={sectionRefChocolates}>
        <Chocolate />
      </div>
      <div ref={sectionRefSobre}>
        <Sobre />
      </div>
    </div>
  );
};

export default App;
