import "../styles/nosotros.css";
import { useEffect, useRef, useState } from "react";

export const Nosotros = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Movimiento sutil al mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      const circles = document.querySelectorAll(".circle");

      circles.forEach((circle) => {
        const rect = circle.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
circle.style.setProperty("--moveX", `${x * 0.02}px`);
circle.style.setProperty("--moveY", `${y * 0.02}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="nosotros">
      <div className="nosotros-container">

        <div className="header-row">
          <h2 className={`titulo ${visible ? "reveal" : ""}`}>
            Nosotros
          </h2>
          <div className={`line ${visible ? "line-reveal" : ""}`}></div>
        </div>

        <div className="main-row">

 <div className={`contenido glass-card ${visible ? "fade-content" : ""}`}>
  <h2 className="somos-title">
    Somos un estudio digital joven nacido en Mendoza,
    Creemos que la <span>innovación</span> no es una opción,
    es el estándar.
  </h2>

  <p className="somos-subtitle">
    Hace más de dos años acompañamos marcas y proyectos que buscan crecer,
    diferenciarse y evolucionar en el ecosistema digital actual.
  </p>
</div>
<div className="venn-container">

  <div className="circle circle1">
    <span className="circle-text">Compromiso</span>
  </div>

  <div className="circle circle2">
    <span className="circle-text">Tecnología</span>
  </div>

  <div className="circle circle3">
    <span className="circle-text">Diferenciación</span>
  </div>

  <div className="center-text">NOSOTROS</div>

</div>
</div>
</div>
    </section>
    );
};