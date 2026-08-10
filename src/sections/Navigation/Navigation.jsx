import { useEffect, useState } from "react"
import { LuMenu, LuX } from "react-icons/lu"
import Button from "../../components/Button/Button"
import "./Navigation.css"

const enlaces = ["Collections", "Craftsmanship", "About", "Journal"]

const Navigation = () => {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [conScroll, setConScroll] = useState(false)

  useEffect(() => {
    const alScrollear = () => setConScroll(window.scrollY > 80)
    window.addEventListener("scroll", alScrollear)
    return () => window.removeEventListener("scroll", alScrollear)
  }, [])

  return (
    <header
      className={`navigation ${conScroll ? "navigation--con-scroll" : ""}`}
    >
      <span className="navigation__logo">BEAUTIFUL PRINCESS</span>

      <nav className="navigation__enlaces">
        {enlaces.map((enlace) => (
          <a
            key={enlace}
            href={`#${enlace.toLowerCase()}`}
            className="navigation__link"
          >
            {enlace}
          </a>
        ))}
      </nav>

      <div className="navigation__accion">
        <Button variant="outline">Shop Now</Button>
      </div>

      <button
        className="navigation__hamburguesa"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
      >
        {menuAbierto ? <LuX size={20} /> : <LuMenu size={20} />}
      </button>

      {menuAbierto && (
        <div className="navigation__panel-movil">
          {enlaces.map((enlace) => (
            <a
              key={enlace}
              href={`#${enlace.toLowerCase()}`}
              className="navigation__link-movil"
            >
              {enlace}
            </a>
          ))}
          <a href="#shop" className="navigation__link-movil">
            Shop Now
          </a>
        </div>
      )}
    </header>
  )
}

export default Navigation
