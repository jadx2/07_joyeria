import { LuArrowRight } from "react-icons/lu"
import "./Craftsmanship.css"
import Container from "../../components/Container/Container"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import artesano from "../../assets/images/artesano.jpg"
import { estadisticas } from "../../data/estadisticas"

const Craftsmanship = () => {
  return (
    <section className="artesania" id="craftsmanship">
      <Container>
        <div className="artesania__grid">
          <div className="artesania__columna-imagen">
            <div className="artesania__imagen-contenedor">
              <img
                src={artesano}
                alt="Artesano tallando a mano una pieza de joyería"
                className="artesania__imagen"
              />
            </div>
            <div className="artesania__insignia">
              <span className="artesania__insignia-numero">10</span>
              <span className="artesania__insignia-texto">
                Años de
                <br />
                artesanía
              </span>
            </div>
          </div>
          <div className="artesania__columna-texto">
            <SectionHeading eyebrow="Nuestra historia">
              Hecho con intención,
              <br />
              <em>usado con sentido</em>
            </SectionHeading>
            <p className="artesania__parrafo">
              Beautiful Princess fue fundada en 2016 por Camila Rojas, orfebre
              formada en los talleres ancestrales de filigrana de Catacaos.
              Guiada por la idea de que la joyería debe ser una herencia — no
              una transacción —, cada pieza se hace a mano en nuestro taller de
              Lima.
            </p>
            <p className="artesania__parrafo">
              Usamos solo plata y gemas peruanas certificadas de origen ético.
              Nuestros artesanos tardan semanas en una sola pieza. Producimos
              menos para que cada creación importe más.
            </p>
            <div className="artesania__estadisticas">
              {estadisticas.map((estadistica) => (
                <div
                  className="artesania__estadistica"
                  key={estadistica.etiqueta}
                >
                  <span className="artesania__estadistica-numero">
                    {estadistica.numero}
                  </span>
                  <span className="artesania__estadistica-etiqueta">
                    {estadistica.etiqueta}
                  </span>
                </div>
              ))}
            </div>
            <a href="#" className="artesania__enlace">
              Nuestro manifiesto
              <LuArrowRight size={12} className="artesania__enlace-icono" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Craftsmanship
