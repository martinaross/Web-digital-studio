import "../styles/nosotros.css";
import { useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";

const Nosotros = () => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setTimeout(() => setStep(1), 200);
      setTimeout(() => setStep(2), 600);
      setTimeout(() => setStep(3), 1000);
    }
  }, [visible]);

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

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty("--x", e.clientX + "px");
      document.documentElement.style.setProperty("--y", e.clientY + "px");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={sectionRef} className="nosotros">
      <div className="nosotros-container">
        <div className="header-row">
          <h2 className={`titulo ${step >= 1 ? "reveal" : ""}`}>
            Nosotros
          </h2>

          <div className={`line ${step >= 1 ? "line-reveal" : ""}`}></div>
        </div>

        <div className="main-row">
          <div className={`contenido glass-card ${visible ? "fade-content" : ""}`}>
            <h2 className="somos-title">
              Somos un estudio digital joven <br />
              nacido en Mendoza,
            </h2>

            <p className="highlight-line">
              Creemos que la{" "}
              <span className="icon-highlight">
                <Sparkles size={18} />
                innovación digital
              </span>{" "}
              no es una opción
            </p>

            <p className="highlight-line strong">
              es el estándar.
            </p>

            <div className="somos-subtitle">
              <p className="linea fade-line delay-1">
                Hace más de <span>dos años</span>
              </p>

              <p className="linea fade-line delay-2">
                acompañamos marcas y proyectos
              </p>

              <p className="linea fade-line delay-3">
                que buscan crecer, diferenciarse y evolucionar
              </p>

              <p className="linea fade-line delay-4 highlight-final">
                en el ecosistema digital actual.
              </p>
            </div>
          </div>

          <div className={`venn-container ${step >= 3 ? "venn-show" : ""}`}>
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

export default Nosotros;