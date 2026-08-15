import "./Marquee.css"
import { mensajesMarquee } from "../../data/mensajesMarquee"

const Marquee = () => {
  return (
    <section className="marquesina">
      <div className="marquesina__pista">
        {/* se duplica el bloque de 4 grupos para que la animación deslice sin cortes, incluso en pantallas anchas */}
        {Array(8)
          .fill(null)
          .map((_, indice) => (
            <span className="marquesina__grupo" key={indice}>
              {mensajesMarquee.map((mensaje) => (
                <span className="marquesina__mensaje" key={mensaje}>
                  {mensaje}
                  <span className="marquesina__rombo">◆</span>
                </span>
              ))}
            </span>
          ))}
      </div>
    </section>
  )
}

export default Marquee
