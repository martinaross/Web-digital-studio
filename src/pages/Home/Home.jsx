import { Layout } from "../../components/Layout/Layout";
import Servicios from "../../section/Servicios";
import Proyectos from "../../section/Proyectos";
import "./Home.css";
import { FaCode, FaServer, FaLayerGroup, FaRocket, FaSearch } from "react-icons/fa";


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


      {/* tecnologias con las que trabajamos */}
      <section id="trabaja" className="process">

        <div className="process__container">

          {/* IZQUIERDA */}
          <div className="process__left">
            <div class="card">
              <div class="circle"></div>
              <div class="circle"></div>
            </div>

            <h2 className="process__title">
              Tecnologías
            </h2>

            <p className="process__subtitle">
              Las tecnologías que hacen posible nuestros proyectos.
            </p>
          </div>

          {/* DERECHA */}
          <div className="process__right">

            <div className="process__card">
              <div className="process__number">
                <FaCode />
              </div>

              <div className="process__content">
                <div className="process__text">
                  <h3>Desarrollo Frontend</h3>
                  <p>Interfaces modernas, rápidas e interactivas.</p>
                </div>

                <div className="process__tech">
                  <span>HTML5</span>
                  <span>CSS3</span>
                  <span>JS</span>
                  <span>React</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number">
                <FaServer />
              </div>

              <div className="process__content">
                <div className="process__text">
                  <h3>Desarrollo Backend</h3>
                  <p>Lógica del servidor y manejo de datos.</p>
                </div>

                <div className="process__tech">
                  <span>Node.js</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number">
                <FaLayerGroup />
              </div>

              <div className="process__content">
                <div className="process__text">
                  <h3>Frameworks UI</h3>
                  <p>Interfaces consistentes y rápidas.</p>
                </div>

                <div className="process__tech">
                  <span>Bootstrap</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number">
                <FaRocket />
              </div>

              <div className="process__content">
                <div className="process__text">
                  <h3>Performance</h3>
                  <p>Velocidad y optimización web.</p>
                </div>

                <div className="process__tech">
                  <span>Performance</span>
                </div>
              </div>
            </div>

            <div className="process__card">
              <div className="process__number">
                <FaSearch />
              </div>

              <div className="process__content">
                <div className="process__text">
                  <h3>SEO & Responsive</h3>
                  <p>Adaptabilidad y posicionamiento.</p>
                </div>

                <div className="process__tech">
                  <span>Responsive</span>
                  <span>SEO</span>
                </div>
              </div>
            </div>

          </div>

        </div>
        {/* por que elegirnos y como trabajamos  */}
        <section className="why" id="elegirnos">
          <div className="why__container">
            <div className="why__head">
              <h2 className="why__title">Cómo trabajamos</h2>
              <ul className="why__bullets">
                <li>Enfoque 100% profesional y empresarial</li>
                <li>Código mantenible y preparado para escalar</li>
                <li>Comunicación clara y constante</li>
                <li>Soluciones pensadas para crecer a largo plazo</li>
                <li>Trabajo en equipo (no freelance individual)</li>
              </ul>
            </div>

            <div className="why__grid">
              <article className="why__card">
                <span className="why__num">01</span>
                <h3 className="why__cardTitle"> Análisis y Diseño UX</h3>
                <p className="why__text">Definimos objetivos y diseñamos una estructura clara y funcional.</p>
              </article>

              <article className="why__card why__card--hot">
                <span className="why__num">02</span>
                <h3 className="why__cardTitle">Desarrollo</h3>
                <p className="why__text">Código limpio, escalable y pensado para crecer.</p>
              </article>

              <article className="why__card why__card--hot">
                <span className="why__num">03</span>
                <h3 className="why__cardTitle">Pruebas</h3>
                <p className="why__text">Seguimiento constante y diseño responsive</p>
              </article>

              <article className="why__card">
                <span className="why__num">04</span>
                <h3 className="why__cardTitle">Entrega & Soporte
                </h3>
                <p className="why__text">Lanzamiento acompañado y soporte post-entrega.</p>
              </article>
            </div>
          </div>
        </section>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
      </section>

    </Layout>
  );
};

export { Home };