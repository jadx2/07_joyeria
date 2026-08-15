import "./FeaturedPiece.css"
import Button from "../../components/Button/Button"
import destacadoPomona from "../../assets/images/destacado-pomona.jpg"

const FeaturedPiece = () => {
  return (
    <section className="featured-piece">
      <img
        src={destacadoPomona}
        alt="Anillo Pomona Ring, un anillo de oro 18k con un rubí, sobre una granada"
        className="featured-piece__fondo"
      />
      <div className="featured-piece__velo" />
      <div className="featured-piece__contenido">
        <div className="featured-piece__texto">
          <p className="featured-piece__etiqueta">Pieza destacada</p>
          <h2 className="featured-piece__titulo">Pomona Ring</h2>
          <p className="featured-piece__descripcion">
            Oro 18k, gemas peruanas de origen ético, engastadas a mano por
            maestros artesanos en nuestro taller de Lima.
          </p>
          <p className="featured-piece__precio">$2,400</p>
          <div className="featured-piece__acciones">
            <Button variant="primary">Añadir al carrito</Button>
            <Button variant="outline">Saber más</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPiece
