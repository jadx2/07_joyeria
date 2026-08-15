import "./Craftsmanship.css"
import Container from "../../components/Container/Container"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import artesano from "../../assets/images/artesano.jpg"
import { estadisticas } from "../../data/estadisticas"

const Craftsmanship = () => {
  return (
    <section className="craftsmanship" id="craftsmanship">
      <Container>
        <div className="craftsmanship__grid">
          <div className="craftsmanship__columna-imagen">
            <div className="craftsmanship__imagen-contenedor">
              <img
                src={artesano}
                alt="Artesano tallando a mano una pieza de joyería"
                className="craftsmanship__imagen"
              />
            </div>
            <div className="craftsmanship__insignia">
              <span className="craftsmanship__insignia-numero">10</span>
              <span className="craftsmanship__insignia-texto">
                Años de
                <br />
                artesanía
              </span>
            </div>
          </div>
          <div className="craftsmanship__columna-texto">
            <SectionHeading eyebrow="Nuestra historia">
              Hecho con intención,
              <br />
              <em>usado con sentido</em>
            </SectionHeading>
            <p className="craftsmanship__parrafo">
              Beautiful Princess fue fundada en 2016 por Camila Rojas, orfebre
              formada en los talleres ancestrales de filigrana de Catacaos.
              Guiada por la idea de que la joyería debe ser una herencia — no
              una transacción —, cada pieza se hace a mano en nuestro taller de
              Lima.
            </p>
            <p className="craftsmanship__parrafo">
              Usamos solo plata y gemas peruanas certificadas de origen ético.
              Nuestros artesanos tardan semanas en una sola pieza. Producimos
              menos para que cada creación importe más.
            </p>
            <div className="craftsmanship__estadisticas">
              {estadisticas.map((estadistica) => (
                <div
                  className="craftsmanship__estadistica"
                  key={estadistica.etiqueta}
                >
                  <span className="craftsmanship__estadistica-numero">
                    {estadistica.numero}
                  </span>
                  <span className="craftsmanship__estadistica-etiqueta">
                    {estadistica.etiqueta}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Craftsmanship
