import "./FeaturedPiece.css"
import Button from "../../components/Button/Button"
import destacadoPomona from "../../assets/images/destacado-pomona.jpg"

const FeaturedPiece = () => {
  return (
    <section className="featured-piece">
      <img
        src={destacadoPomona}
        alt="Pomona Ring, an 18k gold ring set with a ruby, resting on a pomegranate"
        className="featured-piece__fondo"
      />
      <div className="featured-piece__velo" />
      <div className="featured-piece__contenido">
        <div className="featured-piece__texto">
          <p className="featured-piece__etiqueta">Featured Piece</p>
          <h2 className="featured-piece__titulo">Pomona Ring</h2>
          <p className="featured-piece__descripcion">
            18k gold, ethically sourced Peruvian gemstones, hand-set by
            master artisans in our Lima atelier.
          </p>
          <p className="featured-piece__precio">$2,400</p>
          <div className="featured-piece__acciones">
            <Button variant="primary">Add to Cart</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedPiece
