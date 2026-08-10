import Button from "../../components/Button/Button"
import "./Navigation.css"

const enlaces = ["Collections", "Craftsmanship", "About", "Journal"]

const Navigation = () => {
  return (
    <header className="navigation">
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
