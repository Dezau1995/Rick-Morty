import "../styles/loginPage.css";
import { useTheme } from "../contexts/theme";

function LoginPage() {

  const { theme } = useTheme();
  return (
    <div className={`display-login-page ${theme}`}>
        <section>
            <h1 className={`title-login ${theme}`}>Submit to be part on the Rick & Morty Family !</h1>
        </section>
      <form action="connexion" className="display-form">
        <input type="text" placeholder="enter your email" className={
            theme === "light" ? `input-login dark` : `input-login mystery-blue`
          } />
        <input type="text" placeholder="enter your password" className={
            theme === "light" ? `input-login dark` : `input-login mystery-blue`
          } />
        <button className={
            theme === "light" ? `btn-submit-login dark` : `btn-submit-login mystery-blue`
          }>Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
