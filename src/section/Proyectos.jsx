import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "../styles/proyectos.css"
import antartida from"../assets/imagenes/webantartida.webp"
import lapelu from"../assets/imagenes/lapeluweb.webp"
import nails from "../assets/imagenes/nailsweb.webp"
import servicios from "../assets/imagenes/servicio.webp"
import eccomerce from "../assets/imagenes/tienda.webp"
import zapateria from "../assets/imagenes/lyp.webp"


export default function Proyectos() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Nuestras <span>Webs</span> </h2>
        <p>Algunos de nuestros desarrollos recientes</p>
      </div>

 <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={40}
  slidesPerView={3}
  autoplay={{ delay: 3500 }}
  pagination={{ clickable: true }}
  loop={true}
  grabCursor={true}

  breakpoints={{
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 3 },
  }}

  className="projects-swiper"
>
 <SwiperSlide>
  <div className="project-card">

    <div className="project-image">
      <img src={antartida} alt="Pagina Web Servicios"/>

      <div className="project-overlay">
        <span className="project-badge">Web</span>
        <h3>Pagina Web Servicios</h3>
        <p>Sitio web de servicios Frigoristas y calderistas.</p>
      </div>
    </div>

    <div className="project-info">
      <h3>Climatización Antártida</h3>
      <p>Web corporativa para empresa de climatización.</p>
    </div>

  </div>
</SwiperSlide>


<SwiperSlide>
  <div className="project-card">

    <div className="project-image">
      <img src={nails} alt="Landing page manicurista"/>

      <div className="project-overlay">
        <span className="project-badge">Landing Page</span>
        <h3>Landing Manicurista</h3>
        <p>Landing page profesional para servicios de uñas.</p>
      </div>
    </div>

    <div className="project-info">
      <h3>Nails Studio</h3>
      <p>Landing page para servicios de estética.</p>
    </div>

  </div>
</SwiperSlide>


<SwiperSlide>
  <div className="project-card">

    <div className="project-image">
      <img src={lapelu} alt="Página web peluquería"/>

      <div className="project-overlay">
        <span className="project-badge">Sitio Web</span>
        <h3>Página Web Peluquería</h3>
        <p>Diseño moderno y elegante para salón de belleza.</p>
      </div>
    </div>

    <div className="project-info">
      <h3>Salón de Belleza</h3>
      <p>Web moderna para peluquería profesional.</p>
    </div>

  </div>
</SwiperSlide>


<SwiperSlide>
  <div className="project-card">

    <div className="project-image">
      <img src={servicios} alt="Sitio Web Empresa"/>

      <div className="project-overlay">
        <span className="project-badge">Sitio Web</span>
        <h3>Tienda Web Informativa</h3>
        <p>Sitio web de servicios de climatización.</p>
      </div>
    </div>

    <div className="project-info">
      <h3>Empresa de Servicios</h3>
      <p>Web institucional para empresa técnica.</p>
    </div>

  </div>
</SwiperSlide>


<SwiperSlide>
  <div className="project-card">

    <div className="project-image">
      <img src={zapateria} alt="Ecommerce Zapatería"/>

      <div className="project-overlay">
        <span className="project-badge">Ecommerce</span>
        <h3>Tienda Online</h3>
        <p>Ecommerce de calzados infantiles.</p>
      </div>
    </div>

    <div className="project-info">
      <h3>Zapatería Infantil</h3>
      <p>Tienda online con catálogo de productos.</p>
    </div>

  </div>
</SwiperSlide>


<SwiperSlide>
  <div className="project-card">

    <div className="project-image">
      <img src={eccomerce} alt="Ecommerce tienda online"/>

      <div className="project-overlay">
        <span className="project-badge">Ecommerce</span>
        <h3>Tienda Online</h3>
        <p>Ecommerce autogestionable con carrito.</p>
      </div>
    </div>

    <div className="project-info">
      <h3>Tienda Ecommerce</h3>
      <p>Plataforma de ventas con carrito de compras.</p>
    </div>

  </div>
</SwiperSlide>
</Swiper>
    </section>
  )
}