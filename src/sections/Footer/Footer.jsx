import "./Footer.css"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import Container from "../../components/Container/Container"
import { enlacesFooter } from "../../data/enlacesFooter"
import { enlacesLegales } from "../../data/enlacesLegales"

const Footer = () => {
  return (
    <footer className="pie">
      <Container>
        <div className="pie__columnas">
          <div className="pie__marca">
            <p className="pie__marca-nombre">Beautiful Princess</p>
            <p className="pie__marca-descripcion">
              Joyería hecha a mano para quienes valoran la intención por encima
              del exceso. Hecha en el Perú desde 2016.
            </p>
            <div className="pie__redes">
              <a href="#" aria-label="Instagram" className="pie__red">
                <FaInstagram size={15} />
              </a>
              <a href="#" aria-label="Facebook" className="pie__red">
                <FaFacebookF size={15} />
              </a>
            </div>
          </div>
          {enlacesFooter.map((columna) => (
            <div className="pie__columna" key={columna.titulo}>
              <h3 className="pie__columna-titulo">{columna.titulo}</h3>
              <ul className="pie__enlaces">
                {columna.enlaces.map((enlace) => (
                  <li key={enlace}>
                    <a href="#" className="pie__enlace">
                      {enlace}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pie__inferior">
          <p className="pie__copyright">
            © 2026 Beautiful Princess. Todos los derechos reservados.
          </p>
          <ul className="pie__legales">
            {enlacesLegales.map((enlace) => (
              <li key={enlace}>
                <a href="#" className="pie__enlace-legal">
                  {enlace}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
