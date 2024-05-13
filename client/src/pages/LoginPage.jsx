import "../styles/loginPage.css";

function LoginPage() {
  return (
    <div className="display-login-page">
        <section>
            <h1>Submit to be part on the Rick & Morty Family !</h1>
        </section>
      <form action="connexion" className="display-form">
        <input type="text" placeholder="enter your email" className="input-decoration" />
        <input type="text" placeholder="enter your password"  className="input-decoration" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
