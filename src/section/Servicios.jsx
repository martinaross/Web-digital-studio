import "../styles/servicios.css"

export default function Servicios() {
  return (
    <section className="services" id="services">
<div className="projects-header">
  <h2 className="title">
    Nuestros <span className="gradient-text">servicios</span>
  </h2>

  <div className="title-line"></div>

  <p className="subtitle">
    Todo lo que necesites a tu alcance.
  </p>
</div>
      <div className="services-grid">

        {/* PROTAGONISTA */}
        <div className="block landing">
          <div className="content">
            <span className="badge">Servicio Principal</span>
            <h2>Sitios Web Originales</h2>
            <p>
              Landing Page . Sitios a medida · 
              Paginas Atogestionables.
            </p>
          </div>
        </div>

        <div className="block ecommerce">
          <div className="content">
            <h3>Tiendas Online – Ecommerce</h3>
            <p>
              Página con carro de compras autogestionable.
              Convertí tu web en una herramienta real de ventas.
            </p>
          </div>
        </div>

        <div className="block redes">
          <div className="content">
            <h3>Gestión de Redes Sociales</h3>
            <p>
              Estrategias de comunicación alineadas a tu marca.
            </p>
          </div>
        </div>

        <div className="block marketing">
          <div className="content">
            <h3>Marketing Digital</h3>
            <p>
              Google Ads y Meta Ads para escalar tu negocio.
            </p>
          </div>
        </div>
<div className="block actualizacion">
          <div className="content">
            <h3>Actualizacion y Mantenimiento</h3>
            <p>
              Renova tu pagina web, y llevala al siguiente nivel.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}