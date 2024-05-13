import "../styles/footer.css";
import { useTheme } from "../contexts/theme";

function Footer() {
  const { theme } = useTheme();
  return (
    <div className={`display-footer ${theme}`}>
      <p className={`footer-title ${theme}`}>Adult Swim Production</p>
    </div>
  );
}

export default Footer;
