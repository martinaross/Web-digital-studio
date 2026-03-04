import { Layout } from "../../components/Layout/Layout";
import Servicios from "../../section/Servicios";
import Proyectos from "../../section/Proyectos";
import "./Home.css";

const Home = () => {
  return (
    <Layout>

      <section id="inicio" className="hero">


        {/* fondo de estrellas SOLO del hero */}
        <div className="hero__stars">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>

        {/* texto del hero */}
        <div className="hero__content">
          <h1 className="hero__title font-manrope">
            DISEÑAR. DESARROLLAR. POTENCIAR.
          </h1>

          <p className="hero__subtitle font-inter">
            Construimos tu web, fortalecemos tu marca.
          </p>
        </div>

      </section>

      <section id="servicios">
        <Servicios />
      </section>

      <section id="portfolio">
        <Proyectos />
      </section>

      <section id="planes">
        <h2>Planes</h2>
      </section>

      <section id="trabaja">
        <h2>Trabajá con nosotros</h2>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
      </section>

    </Layout>
  );
};

export { Home };