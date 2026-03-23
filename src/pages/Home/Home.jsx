import { Layout } from "../../components/Layout/Layout";
import Servicios from "../../section/Servicios";
import Proyectos from "../../section/Proyectos";
import Nosotros from "../../section/Nosotros"
import Contacto from "../../section/Contacto"
import "./Home.css";
import { FaCode, FaServer, FaLayerGroup, FaRocket, FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <Layout>
      {/* HERO */}
      <section id="inicio" className="hero">

        <div className="hero__stars">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>

        <div className="hero__content">
          <h1 className="hero__title font-manrope">
            DISEÑAR. DESARROLLAR. POTENCIAR.
          </h1>

          <p className="hero__subtitle font-inter">
            Construimos tu web, fortalecemos tu marca.
          </p>
        </div>

      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <Servicios />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      {/* PROYECTOS */}
      <section id="proyectos">
        <Proyectos />
      </section>



      {/* CÓMO TRABAJAMOS */}
      <section id="trabaja">
        <section className="why" id="elegirnos">

          <div className="why__container">

            <div className="why__head">
              <h2 className="why__title">Cómo trabajamos</h2>

              <ul className="why__bullets">
                <li>Enfoque profesional</li>
                <li>Código escalable</li>
                <li>Comunicación constante</li>
                <li>Soluciones a largo plazo</li>
                <li>Trabajo en equipo</li>
              </ul>
            </div>

            <div className="why__grid">

              <article className="why__card">
                <span>01</span>
                <h3>Análisis UX</h3>
                <p>Estrategia y estructura.</p>
              </article>

              <article className="why__card">
                <span>02</span>
                <h3>Desarrollo</h3>
                <p>Código limpio y escalable.</p>
              </article>

              <article className="why__card">
                <span>03</span>
                <h3>Pruebas</h3>
                <p>Validación y responsive.</p>
              </article>

              <article className="why__card">
                <span>04</span>
                <h3>Entrega</h3>
                <p>Soporte post-lanzamiento.</p>
              </article>

            </div>

          </div>
        </section>
      </section>

      {/* TECNOLOGÍAS */}
      <section id="tecnologias" className="process">

        <div className="process__container">

          <div className="process__left">
            <div className="card">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>

            <h2 className="process__title">Tecnologías</h2>

            <p className="process__subtitle">
              Las tecnologías que hacen posible nuestros proyectos.
            </p>
          </div>

          <div className="process__right">

            <div className="process__card">
              <div className="process__number"><FaCode /></div>
              <div className="process__content">
                <h3>Desarrollo Frontend</h3>
                <p>Interfaces modernas, rápidas e interactivas.</p>
                <div className="process__tech">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JS</span>
                  <span>React</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number"><FaServer /></div>
              <div className="process__content">
                <h3>Backend</h3>
                <p>Lógica del servidor y datos.</p>
                <div className="process__tech">
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number"><FaLayerGroup /></div>
              <div className="process__content">
                <h3>UI Frameworks</h3>
                <p>Interfaces consistentes.</p>
                <div className="process__tech">
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number"><FaRocket /></div>
              <div className="process__content">
                <h3>Performance</h3>
                <p>Optimización y velocidad.</p>
                <div className="process__tech">
                  <span>Optimización</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number"><FaSearch /></div>
              <div className="process__content">
                <h3>SEO & Responsive</h3>
                <p>Adaptabilidad y posicionamiento.</p>
                <div className="process__tech">
                  <span>Responsive</span>
                  <span>SEO</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <Contacto />
      </section>

    </Layout>
  );
};

export { Home };