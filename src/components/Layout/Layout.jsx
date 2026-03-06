import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./Layout.css"
import logo from "../../assets/logo.webp"




const Layout = (props) => {
  return (
    <>
      <header className="navbar">
        <div className="navbar__logo"><img src={logo} alt="imagen de logo" />
        </div>

        <nav className="navbar__menu">
          <a href="#inicio">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#planes">Planes</a>
          <a href="#trabaja">Trabajá con nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <div className="navbar__cta">
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            WhatsApp
          </a>
        </div>
      </header >

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