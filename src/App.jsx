import  { useRef } from "react";
import Inicio from "./sections/inicio/Inicio";
import Header from "./components/Header";
import Sobre from "./sections/sobre/Sobre";



const App = () => {
  const sectionRef = useRef(null);
  const scrollToSection = () =>
    sectionRef.current.scrollIntoView({ behavior: "smooth" });

  const sectionRef2 = useRef(null);
  const scrollToSection2 = () =>
    sectionRef2.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="landing">
      <Header 
        scrollToInicio={scrollToSection} 
        scrollToSobre={scrollToSection2} 
      />
      <div ref={sectionRef}>
        <Inicio />
      </div>
      <div ref={sectionRef2}>
        <Sobre />
      </div>
    </div>
  );
};

export default App;
