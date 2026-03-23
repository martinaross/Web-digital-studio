import { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import "./Planes.css";

const planesData = [
  {
    id: 1,
    nombre: "Landing Page",
    precio: "$120.000",
    periodo: "pago único",
    descripcion:
      "Ideal para emprendedores, marcas personales o negocios que necesitan presencia online clara y profesional.",
    boton: "Solicitar servicio",
    incluye: [
      "Diseño responsive",
      "Sección principal impactante",
      "Botón directo a WhatsApp",
      "Formulario de contacto",
      "Optimización básica",
      "Entrega lista para publicar",
    ],
  },
  {
    id: 2,
    nombre: "Sitio Web Profesional",
    precio: "$250.000",
    periodo: "pago único",
    descripcion:
      "Perfecto para negocios que necesitan una web moderna, sólida y pensada para generar confianza.",
    boton: "Elegir servicio",
    incluye: [
      "Hasta 5 secciones",
      "Diseño personalizado",
      "Animaciones e interacción",
      "Responsive para celular y PC",
      "Formulario de contacto",
      "Optimización visual y estructura",
    ],
  },
  {
    id: 3,
    nombre: "Tienda o Catálogo Online",
    precio: "$420.000",
    periodo: "desde",
    descripcion:
      "Pensado para marcas que quieren mostrar productos, vender online o escalar su negocio digital.",
    boton: "Consultar proyecto",
    incluye: [
      "Catálogo o tienda online",
      "Carga inicial de productos",
      "Integración con WhatsApp",
      "Diseño adaptable",
      "Estructura optimizada",
      "Soporte inicial de lanzamiento",
    ],
  },
];

const Planes = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <Layout>
      <section className="planes-page">
        <div className="planes-bg"></div>
        <div className="planes-grid-overlay"></div>

        <div className="planes-hero">
          <span className="planes-badge">Llevá tu negocio al siguiente nivel</span>

          <h1 className="planes-title">
            Descubrí nuestros servicios
            <br />
            para páginas web
          </h1>

          <p className="planes-subtitle">
            Creamos sitios web modernos, funcionales y pensados para destacar tu
            marca. Elegí la opción que mejor se adapte a tu proyecto.
          </p>

          <div className="planes-toggle">
            <button className="active">Servicios</button>
            <a
              href="https://wa.me/5492615964429?text=Hola,%20quiero%20un%20servicio%20web%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>Personalizado</button>
            </a>
          </div>
        </div>

        <div
          className="planes-cards"
          onMouseLeave={() => setActiveCard(null)}
        >
          {planesData.map((plan) => (
            <article
              key={plan.id}
              className={`plan-card ${activeCard === plan.id ? "is-active" : ""}`}
              onMouseEnter={() => setActiveCard(plan.id)}
            >
              <div className="plan-icon">
                <div className="plan-icon-inner"></div>
              </div>

              <h3 className="plan-name">{plan.nombre}</h3>
              <p className="plan-description">{plan.descripcion}</p>

              <div className="plan-price-row">
                <span className="plan-price">{plan.precio}</span>
                <span className="plan-periodo">/ {plan.periodo}</span>
              </div>

              <button className="plan-button">{plan.boton}</button>

              <div className="plan-divider"></div>

              <h4 className="plan-includes-title">Qué incluye</h4>

              <ul className="plan-list">
                {plan.incluye.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export { Planes };