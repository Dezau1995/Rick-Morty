import "../styles/header.css";
import rick_logo from "../assets/rick_logo.png";
import { useNavigate } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import { useTheme } from "../contexts/theme";

function Header() {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <section
      className={
        theme === "light" ? `display-header dark` : `display-header light`
      }
    >
      <img src={rick_logo} alt="rick-sanchez-logo" className="logo-header" />
      <button className={
        theme === "light" ? `btn-nav-bar greenlazer` : `btn-nav-bar dark`
      } onClick={() => navigate("/")}>Home</button>
      <button className={
        theme === "light" ? `btn-nav-bar greenlazer` : `btn-nav-bar dark`
      } onClick={() => navigate("/login")}>Connexion</button>
      <ToggleTheme />
    </section>
  );
}

export default Header;
