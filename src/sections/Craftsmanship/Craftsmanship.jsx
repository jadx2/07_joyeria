import "./Craftsmanship.css"
import Container from "../../components/Container/Container"
import artesano from "../../assets/images/artesano.jpg"

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
              <span className="craftsmanship__insignia-numero">28</span>
              <span className="craftsmanship__insignia-texto">
                Years of
                <br />
                Craftsmanship
              </span>
            </div>
          </div>
          <div className="craftsmanship__columna-texto">
            {/* columna de texto y estadísticas — issue #17 */}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Craftsmanship
