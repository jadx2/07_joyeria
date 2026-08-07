import { ArrowRight } from "lucide-react"
import "./Craftsmanship.css"
import Container from "../../components/Container/Container"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import artesano from "../../assets/images/artesano.jpg"
import { estadisticas } from "../../data/estadisticas"

const Craftsmanship = () => {
  return (
    <section className="craftsmanship">
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
                Years of
                <br />
                Craftsmanship
              </span>
            </div>
          </div>
          <div className="craftsmanship__columna-texto">
            <SectionHeading eyebrow="Our Story">
              Made with intention,
              <br />
              <em>worn with meaning</em>
            </SectionHeading>
            <p className="craftsmanship__parrafo">
              Beautiful Princess was founded in 2016 by Camila Rojas, a
              silversmith trained in the ancestral filigree workshops of
              Catacaos. Guided by the belief that jewelry should be an heirloom
              — not a transaction — every piece is made by hand in our Lima
              workshop.
            </p>
            <p className="craftsmanship__parrafo">
              We use only certified, ethically sourced Peruvian silver and
              gemstones. Our artisans take weeks on a single piece. We produce
              less so that each creation matters more.
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
            <a href="#" className="craftsmanship__enlace">
              Our Manifesto
              <ArrowRight size={12} className="craftsmanship__enlace-icono" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Craftsmanship
