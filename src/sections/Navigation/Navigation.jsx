import { useEffect, useState } from "react"
import Button from "../../components/Button/Button"
import "./Navigation.css"

const enlaces = ["Collections", "Craftsmanship", "About", "Journal"]

const Navigation = () => {
  const [conScroll, setConScroll] = useState(false)

  useEffect(() => {
    const alScrollear = () => setConScroll(window.scrollY > 80)
    alScrollear()
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

      <Button variant="outline">Shop Now</Button>
    </header>
  )
}

export default Navigation
