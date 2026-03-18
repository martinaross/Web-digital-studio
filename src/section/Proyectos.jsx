import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/proyectos.css";

import antartida from "../assets/imagenes/webantartida.webp";
import lapelu from "../assets/imagenes/lapeluweb.webp";
import nails from "../assets/imagenes/nailsweb.webp";
import servicios from "../assets/imagenes/servicio.webp";
import eccomerce from "../assets/imagenes/tienda.webp";
import zapateria from "../assets/imagenes/lyp.webp";

export default function Proyectos() {

  const proyectos = [
    {
      img: antartida,
      alt: "Pagina Web Servicios",
      badge: "Web",
      overlayTitle: "Pagina Web Servicios",
      overlayDesc: "Sitio web de servicios Frigoristas y calderistas.",
      title: "Climatización Antártida",
      desc: "Web corporativa para empresa de climatización."
    },
    {
      img: nails,
      alt: "Landing page manicurista",
      badge: "Landing Page",
      overlayTitle: "Landing Manicurista",
      overlayDesc: "Landing page profesional para servicios de uñas.",
      title: "Nails Studio",
      desc: "Landing page para servicios de estética."
    },
    {
      img: lapelu,
      alt: "Página web peluquería",
      badge: "Sitio Web",
      overlayTitle: "Página Web Peluquería",
      overlayDesc: "Diseño moderno y elegante para salón de belleza.",
      title: "Salón de Belleza",
      desc: "Web moderna para peluquería profesional."
    },
    {
      img: servicios,
      alt: "Sitio Web Empresa",
      badge: "Sitio Web",
      overlayTitle: "Tienda Web Informativa",
      overlayDesc: "Sitio web de servicios de climatización.",
      title: "Empresa de Servicios",
      desc: "Web institucional para empresa técnica."
    },
    {
      img: zapateria,
      alt: "Ecommerce Zapatería",
      badge: "Ecommerce",
      overlayTitle: "Tienda Online",
      overlayDesc: "Ecommerce de calzados infantiles.",
      title: "Zapatería Infantil",
      desc: "Tienda online con catálogo de productos."
    },
    {
      img: eccomerce,
      alt: "Ecommerce tienda online",
      badge: "Ecommerce",
      overlayTitle: "Tienda Online",
      overlayDesc: "Ecommerce autogestionable con carrito.",
      title: "Tienda Ecommerce",
      desc: "Plataforma de ventas con carrito de compras."
    }
  ];

  return (
    <section className="projects" id="projects">

      <div className="projects-header">
        <h2>Nuestras <span>Webs</span></h2>
        <p>Algunos de nuestros desarrollos recientes</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={40}
        slidesPerView={3}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        grabCursor={true}
        speed={800}

        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}

        className="projects-swiper"
      >

        {proyectos.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="project-card">

              <div className="project-image">
                <img 
                  src={p.img} 
                  alt={p.alt} 
                  loading="lazy"
                />

                <div className="project-overlay">
                  <span className="project-badge">{p.badge}</span>
                  <h3>{p.overlayTitle}</h3>
                  <p>{p.overlayDesc}</p>
                </div>
              </div>

              <div className="project-info">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>

            </div>
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}