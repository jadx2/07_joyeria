import "./Collections.css"
import { LuArrowRight } from "react-icons/lu"
import Container from "../../components/Container/Container"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import CollectionCard from "../../components/CollectionCard/CollectionCard"
import { colecciones } from "../../data/colecciones"

const desplazamientos = [
  "",
  "colecciones__item--desplazado-grande",
  "",
  "colecciones__item--desplazado-pequeno",
]

const Collections = () => {
  return (
    <section className="colecciones" id="collections">
      <Container>
        <div className="colecciones__encabezado">
          <SectionHeading eyebrow="Nuestras colecciones">
            Hechas para
            <br />
            <em>cada ocasión</em>
          </SectionHeading>
          <a href="#" className="colecciones__enlace">
            Ver todo
            <LuArrowRight size={12} className="colecciones__enlace-icono" />
          </a>
        </div>
        <div className="colecciones__grilla">
          {colecciones.map((coleccion, indice) => (
            <div
              key={coleccion.id}
              className={`colecciones__item ${desplazamientos[indice]}`}
            >
              <CollectionCard
                {...coleccion}
                enlace={`/collections/${coleccion.id}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Collections
