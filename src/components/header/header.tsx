import logoWithName from "../../assets/logo-with-name.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img src={logoWithName} alt="Natya Gurukul Banner" className="banner-image" />
    </header>
  );
}


