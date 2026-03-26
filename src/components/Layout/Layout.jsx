import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Layout.css"
import logo from "../../assets/logot.webp"

const Layout = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="navbar">
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className="navbar__logo">
          <img src={logo} alt="imagen de logo" />
        </div>

        <nav className={`navbar__menu ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={closeMenu}>
            Inicio
          </NavLink>

          <NavLink to="/#servicios" onClick={closeMenu}>
            Servicios
          </NavLink>

          <NavLink to="/#proyectos" onClick={closeMenu}>
            Portfolio
          </NavLink>

          <NavLink to="/planes" onClick={closeMenu}>
            Planes
          </NavLink>

          <NavLink to="/#trabaja" onClick={closeMenu}>
            Trabajá con nosotros
          </NavLink>

          <NavLink to="/#contacto" onClick={closeMenu}>
            Contacto
          </NavLink>
        </nav>

        <div className="navbar__cta">
          <a
            href="https://wa.me/5492615964429"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>{props.children}</main>

      <footer className="footer">
        <div className="footer__container">
          <p className="footer__copy">
            © Copyright 2026 - Todos los derechos reservados | Política de privacidad
          </p>

          <p className="footer__dev">
            Desarrollado por <span>Luciana Santana | Martina Rossignoli</span>
          </p>
        </div>
      </footer>
    </>
  )
}

export { Layout }