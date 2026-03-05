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


      {/* seccion trabaja con nosotros */}
      <section id="trabaja" className="process">

        <div className="process__container">

          {/* IZQUIERDA */}
          <div className="process__left">
            <div class="card">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>

            <h2 className="process__title">
              Cómo trabajamos
            </h2>

            <p className="process__subtitle">
              Un proceso claro para llevar tu idea a un negocio digital real.
            </p>
          </div>



          {/* DERECHA */}
          <div className="process__right">

            <div className="process__card">
              <div className="process__number">01</div>
              <div>
                <h3>Análisis y Diseño UX </h3>
                <p>Objetivos claros, diseños efectivos.</p>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number">02</div>
              <div>
                <h3>Desarrollo</h3>
                <p>Código limpio y escalable.</p>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number">04</div>
              <div>
                <h3>Pruebas</h3>
                <p>Performance, responsive y compatibilidad.</p>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number">05</div>
              <div>
                <h3>Entrega & Soporte</h3>
                <p>Acompañamiento post-lanzamiento.</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="contacto">
        <h2>Contacto</h2>
      </section>

    </Layout>
  );
};

export { Home };