import "./FeaturedPiece.css"
import Button from "../../components/Button/Button"
import destacadoPomona from "../../assets/images/destacado-pomona.jpg"

const FeaturedPiece = () => {
  return (
    <section className="pieza-destacada">
      <img
        src={destacadoPomona}
        alt="Anillo Pomona Ring, un anillo de oro 18k con un rubí, sobre una granada"
        className="pieza-destacada__fondo"
      />
      <div className="pieza-destacada__velo" />
      <div className="pieza-destacada__contenido">
        <div className="pieza-destacada__texto">
          <p className="pieza-destacada__etiqueta">Pieza destacada</p>
          <h2 className="pieza-destacada__titulo">Pomona Ring</h2>
          <p className="pieza-destacada__descripcion">
            Oro 18k, gemas peruanas de origen ético, engastadas a mano por
            maestros artesanos en nuestro taller de Lima.
          </p>
          <p className="pieza-destacada__precio">$2,400</p>
          <div className="pieza-destacada__acciones">
            <Button variant="primary">Añadir al carrito</Button>
            <Button variant="outline">Saber más</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPiece
