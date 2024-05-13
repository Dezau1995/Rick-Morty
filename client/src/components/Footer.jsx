import facebook_icon from "../assets/facebook_icon.png"
import "../styles/footer.css"
import { useTheme } from "../contexts/theme";


function Footer() {
    const { theme } = useTheme();
    return (
        <div className={`display-footer ${theme}`}>
           <img src={facebook_icon} alt="logo-facebook" className="facebook-logo"/>
        </div>
    );
}

export default Footer;