import { Layout } from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title font-manrope">
            Diseñar. Desarrollar. Potenciar.
          </h1>

          <p className="hero__subtitle font-inter">
            Todo lo que necesitas para crear tu negocio digital
          </p>
        </div>
      </section>

      <section id="inicio">
        <h1>Hero principal</h1>
      </section>

      <section id="servicios">
        <h2>Servicios</h2>
      </section>

      <section id="portfolio">
        <h2>Portfolio</h2>
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