import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "../styles/proyectos.css"
import antartida from"../assets/imagenes/webantartida.png"
import lapelu from"../assets/imagenes/lapeluweb.png"
import nails from "../assets/imagenes/nailsweb.png"


export default function Proyectos() {
  return (
    <section className="projects" id="projects">
      <div className="projects-header">
        <h2>Nuestras Webs</h2>
        <p>Algunos de nuestros desarrollos recientes</p>
      </div>

      <Swiper
  modules={[Autoplay, Pagination]}
  spaceBetween={40}
  slidesPerView={3}
  autoplay={{ delay: 3500 }}
  pagination={{ clickable: true }}
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
      </div>

      <div className="project-content">
        <h3>Pagina Web Servicios</h3>
        <p>Sitio web de servicios Frigoristas y calderistas.</p>
      </div>
    </div>
  </SwiperSlide>


  <SwiperSlide>
    <div className="project-card">
      <div className="project-image">
        <img src={nails} alt="Landing page"/>
      </div>

      <div className="project-content">
        <h3>Landing Page</h3>
      <p>Landing page de servicios manicurista.</p>
      </div>
    </div>
  </SwiperSlide>


  <SwiperSlide>
    <div className="project-card">
      <div className="project-image">
        <img src={lapelu} alt="Peluqueria"/>
      </div>

      <div className="project-content">
        <h3>Página Web Peluquería</h3>
        <p>Diseño sutil y elegante</p>
      </div>
    </div>
  </SwiperSlide>

</Swiper>
    </section>
  )
}