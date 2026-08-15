import { useState } from "react"
import "./Newsletter.css"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import Button from "../../components/Button/Button"

const Newsletter = () => {
  const [correo, setCorreo] = useState("")
  const [suscrito, setSuscrito] = useState(false)

  function manejarEnvio(evento) {
    evento.preventDefault()
    if (correo.trim()) {
      setSuscrito(true)
    }
  }

  return (
    <section className="boletin">
      <SectionHeading eyebrow="Círculo privado" align="center">
        Acceso anticipado, siempre
      </SectionHeading>
      <p className="boletin__descripcion">
        Únete a nuestro círculo privado para acceso anticipado a nuevas
        colecciones, eventos exclusivos y las historias detrás de cada pieza.
      </p>
      {suscrito ? (
        <div className="boletin__exito" aria-live="polite">
          <p>Gracias por unirte.</p>
        </div>
      ) : (
        <form className="boletin__formulario" onSubmit={manejarEnvio}>
          <label htmlFor="correo" className="visualmente-oculto">
            Correo electrónico
          </label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
            placeholder="Tu correo electrónico"
            className="boletin__input"
          />
          <Button variant="primary">Unirme ahora</Button>
        </form>
      )}
      <p className="boletin__nota">Sin spam. Cancela cuando quieras.</p>
    </section>
  )
}

export default Newsletter
