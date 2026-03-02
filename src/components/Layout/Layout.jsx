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

      <footer></footer>
    </>
  )
}

export { Layout }