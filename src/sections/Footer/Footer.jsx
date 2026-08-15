import { Link } from "react-router-dom"
import "./Footer.css"
import Container from "../../components/Container/Container"
import { enlacesFooter } from "../../data/enlacesFooter"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__columnas">
          <div className="footer__marca">
            <p className="footer__marca-nombre">Beautiful Princess</p>
            <p className="footer__marca-descripcion">
              Joyería hecha a mano para quienes valoran la intención por encima
              del exceso. Hecha en el Perú desde 2016.
            </p>
          </div>
          {enlacesFooter.map((columna) => (
            <div className="footer__columna" key={columna.titulo}>
              <h3 className="footer__columna-titulo">{columna.titulo}</h3>
              <ul className="footer__enlaces">
                {columna.enlaces.map((enlace) => (
                  <li key={enlace.texto}>
                    <Link to={enlace.destino} className="footer__enlace">
                      {enlace.texto}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer__inferior">
          <p className="footer__copyright">
            © 2026 Beautiful Princess. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
