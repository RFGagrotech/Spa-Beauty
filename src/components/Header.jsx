import { useState } from "react";
import logo from "../img/GlowQueen.svg";
import vector from "../img/Vector1.svg";
import search from "../img/Search.svg";
import shopping from "../img/ShoppingBag.svg";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return(
    <header className="header">
      <figure className="header__logo">
        <img src={logo} alt="Logotipo GlowQueen"/>
        <figcaption className="sr-only">Logotipo GlowQueen</figcaption>
      </figure>

        <button
          className="header__toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        
{/* Nav central */}
      <div className={`header__menu ${menuOpen ? "header__menu--open" : ""}`}>
        <nav className="center" aria-label="Principal">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Facilities</a></li>
            <li><a href="#">More <img src={vector} alt="" aria-hidden="true"/></a></li>
          </ul>
        </nav>

{/*Iconos + auth*/}
        <nav className="aside" aria-label="Acciones">
          <ul className="icons">
            <li><a href="#"><img src={search} alt="Buscar"/></a></li>
            <li><a href="#"><img src={shopping} alt="Carrito"/></a></li>
          </ul>
          <ul className="auth">
            <li><a href="#">Sign in</a></li>
            <li><a href="#">Sign up</a></li>
          </ul>
        </nav>
      </div>
    </header>
    );
}

export default Header;