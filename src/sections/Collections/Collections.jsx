import "./Collections.css"
import Container from "../../components/Container/Container"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import CollectionCard from "../../components/CollectionCard/CollectionCard"
import { colecciones } from "../../data/colecciones"

const desplazamientos = [
  "",
  "collections__item--desplazado-grande",
  "",
  "collections__item--desplazado-pequeno",
]

const Collections = () => {
  return (
    <section className="collections" id="collections">
      <Container>
        <div className="collections__encabezado">
          <SectionHeading eyebrow="Nuestras colecciones">
            Hechas para
            <br />
            <em>cada ocasión</em>
          </SectionHeading>
        </div>
        <div className="collections__grilla">
          {colecciones.map((coleccion, indice) => (
            <div
              key={coleccion.id}
              className={`collections__item ${desplazamientos[indice]}`}
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
