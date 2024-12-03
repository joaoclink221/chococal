
import logo from "../assets/images/logo.png";
import "./Header.scss";
import { navigation } from "../constants";
import { Link } from "react-router-dom";

const Header = ({ scrollToInicio, scrollToSobre }) => {
  return (
    <div className="Header">
      <img src={logo} width={180} height={85} alt="Logo" className="logo" />
      <div className="body-header">
        {navigation.map((item) => (
          <button
            className="Buttons"
            key={item.id}
            onClick={
              item.title === "inicio"
                ? scrollToInicio
                : item.title === "sobre"
                ? scrollToSobre
                : item.title === "Chocolates"
                ? <Link to="/chocolate"/>
                : null
            }
          >
            {item.title}
            <span className="gradient-underline"></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
