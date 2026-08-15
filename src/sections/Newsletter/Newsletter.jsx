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
    <section className="newsletter">
      <SectionHeading eyebrow="Private Circle" align="center">
        First access, always
      </SectionHeading>
      <p className="newsletter__descripcion">
        Join our private circle for early access to new collections, bespoke
        events, and the stories behind each piece.
      </p>
      {suscrito ? (
        <div className="newsletter__exito" aria-live="polite">
          <p>Thank you for joining us.</p>
        </div>
      ) : (
        <form className="newsletter__formulario" onSubmit={manejarEnvio}>
          <label htmlFor="correo" className="visualmente-oculto">
            Email address
          </label>
          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
            placeholder="Your email address"
            className="newsletter__input"
          />
          <Button variant="primary">Join Now</Button>
        </form>
      )}
      <p className="newsletter__nota">No spam. Unsubscribe at any time.</p>
    </section>
  )
}

export default Newsletter
