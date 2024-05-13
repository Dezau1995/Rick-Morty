import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./styles/globals.css"


function App() {
  return (
    <section className="app">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}

export default App;
