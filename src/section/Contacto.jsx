import "../styles/contacto.css";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contacto() {
  return (
    <section className="contacto" id="contacto">
      <div className="contacto-container">

        {/* INFO */}
        <div className="contacto-info">

          <h2 className="titulo-contacto">¿Trabajamos juntos?</h2>

         <h3>
¿Listo para tener un <span className="highlight">sitio web profesional </span> 
 que represente tu marca?
</h3>

          <p>
            Contactanos y empecemos a construir tu presencia digital.
          </p>

          <div className="contacto-datos">

            <div className="dato">
              
     <a
            href="https://wa.me/5492614663643"
            target="_blank"
            className="btn-whatsapp"
          >
            <FaWhatsapp /> Escribirme por WhatsApp
          </a>
            </div>
<div className="whatsapp-circle">

<svg viewBox="0 0 200 200" className="text-circle">

<defs>
<path
id="circlePath"
d="
M 100,100
m -75,0
a 75,75 0 1,1 150,0
a 75,75 0 1,1 -150,0
"
/>
</defs>

<text>
<textPath href="#circlePath">
CONSULTANOS AHORA • WHATSAPP • CONSULTANOS AHORA •
</textPath>
</text>

</svg>

<a
href="https://wa.me/5492615611837"
target="_blank"
className="whatsapp-icon"
>
<FaWhatsapp />
</a>

</div>

            <div className="dato">
              <FaEnvelope className="icono" />
              <span>webdigitalstudio.ml@gmail.com</span>
            </div>

            <div className="dato">
              <FaMapMarkerAlt className="icono" />
              <span>Mendoza, Argentina</span>
            </div>

          </div>

         

        </div>

        {/* FORMULARIO */}

        <form className="contacto-form">

          <input 
            type="text"
            placeholder="Nombre"
            required
          />

          <input
            type="email"
            placeholder="Email"
            required
          />

          <textarea
            placeholder="Contame sobre tu proyecto..."
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Enviar mensaje
          </button>

        </form>

      </div>
    </section>
  );
}