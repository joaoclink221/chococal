import logo from "../assets/images/logo.png"; 
import "./Header.scss";
import { navigation } from "../constants";

const Header = () => {
  return (
    <div className="Header">
        <img src={logo} width={180} height={85} alt="Logo" className="logo" />
      <div className="body-header">
        {navigation.map((item) => (
          <button
            className="Buttons"
            key={item.id}
            href={item.url}
            onClick={item.onClickbad}
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
