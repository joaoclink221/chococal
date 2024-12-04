import logo from "../assets/images/logo.png";
import "./Header.scss";
import { navigation } from "../constants";
import { Menu, X } from "lucide-react"; 
import { useState } from "react";

const Header = ({ scrollToInicio, scrollToSobre, scrollToChocolates }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scrollFunctions = {
    scrollToInicio,
    scrollToSobre,
    scrollToChocolates,
  };

  return (
    <div className="Header">
      <img src={logo} width={180} height={85} alt="Logo" className="logo" />
      <div className={`body-header ${isMenuOpen ? "open" : ""}`}>
        {navigation.map((item) => (
          <button
            className="Buttons"
            key={item.id}
            onClick={() => {
              scrollFunctions[item.onClick]();
              setMenuOpen(false); 
            }}
          >
            {item.title}
            <span className="gradient-underline"></span>
          </button>
        ))}
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
      </button>
    </div>
  );
};

export default Header;
