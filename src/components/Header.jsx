import { navigation } from "../constants";
const Header = () => {
  return (
    <div className="header">
      <div>
        {navigation.map((item) => (
          <button
            className="buttons"
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
