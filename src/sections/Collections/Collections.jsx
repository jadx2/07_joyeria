import "./Collections.css"
import { LuArrowRight } from "react-icons/lu"
import Container from "../../components/Container/Container"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import CollectionCard from "../../components/CollectionCard/CollectionCard"
import { colecciones } from "../../data/colecciones"

const desplazamientos = ["0", "48px", "0", "24px"]

const Collections = () => {
  return (
    <section className="collections" id="collections">
      <Container>
        <div className="collections__encabezado">
          <SectionHeading eyebrow="Our Collections">
            Crafted for
            <br />
            <em>Every Occasion</em>
          </SectionHeading>
          <a href="#" className="collections__enlace">
            View All
            <LuArrowRight size={12} className="collections__enlace-icono" />
          </a>
        </div>
        <div className="collections__grilla">
          {colecciones.map((coleccion, indice) => (
            <div
              key={coleccion.id}
              style={{ marginTop: desplazamientos[indice] }}
            >
              <CollectionCard {...coleccion} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Collections
