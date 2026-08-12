import { useState } from "react"
import "./Checkout.css"
import Container from "../components/Container/Container"
import Button from "../components/Button/Button"
import { useCarrito } from "../context/useCarrito"
import { formatearPrecio } from "../utils/moneda"

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Checkout = () => {
  const { lineas, total } = useCarrito()
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [errores, setErrores] = useState({})
  const [enviando, setEnviando] = useState(false)

  function validar() {
    const nuevos = {}
    if (!nombre.trim()) {
      nuevos.nombre = "Enter your full name"
    }
    if (!correo.trim()) {
      nuevos.correo = "Enter your email address"
    } else if (!CORREO_VALIDO.test(correo)) {
      nuevos.correo = "Enter a valid email address"
    }
    return nuevos
  }

  async function manejarEnvio(evento) {
    evento.preventDefault()
    const nuevos = validar()
    setErrores(nuevos)
    if (Object.keys(nuevos).length > 0) {
      return
    }
    setEnviando(true)
    const items = lineas.map(({ producto, cantidad }) => ({
      productoId: producto.id,
      cantidad,
    }))
    try {
      const respuesta = await fetch("/api/crear-sesion-pago", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, correo }),
      })
      if (!respuesta.ok) {
        throw new Error("payment session failed")
      }
      const { url } = await respuesta.json()
      window.location = url
    } catch {
      setEnviando(false)
      setErrores({ envio: "Something went wrong. Please try again." })
    }
  }

  return (
    <section className="pago">
      <Container>
        <div className="pago__banner">
          <span className="pago__banner-modo">Demo mode</span>
          <span className="pago__banner-texto">
            No real payment is processed. Use test card 4242 4242 4242 4242 with
            any future date and any CVC.
          </span>
        </div>
        <h1 className="pago__titulo">Checkout</h1>
        <div className="pago__contenido">
          <form className="pago__formulario" onSubmit={manejarEnvio} noValidate>
            <p className="pago__eyebrow">Contact</p>
            <div className="campo">
              <label className="campo__etiqueta" htmlFor="nombre">
                Full name
              </label>
              <input
                id="nombre"
                type="text"
                className={`campo__input${
                  errores.nombre ? " campo__input--error" : ""
                }`}
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
                aria-invalid={errores.nombre ? "true" : undefined}
                aria-describedby={errores.nombre ? "nombre-error" : undefined}
              />
              {errores.nombre && (
                <p className="campo__error" id="nombre-error">
                  {errores.nombre}
                </p>
              )}
            </div>
            <div className="campo">
              <label className="campo__etiqueta" htmlFor="correo">
                Email
              </label>
              <input
                id="correo"
                type="email"
                className={`campo__input${
                  errores.correo ? " campo__input--error" : ""
                }`}
                value={correo}
                onChange={(evento) => setCorreo(evento.target.value)}
                aria-invalid={errores.correo ? "true" : undefined}
                aria-describedby={errores.correo ? "correo-error" : undefined}
              />
              {errores.correo && (
                <p className="campo__error" id="correo-error">
                  {errores.correo}
                </p>
              )}
            </div>
            {errores.envio && (
              <p className="campo__error" id="envio-error">
                {errores.envio}
              </p>
            )}
            <Button
              variant="primary"
              className="pago__enviar"
              disabled={enviando}
            >
              {enviando ? "Redirecting…" : "Pay with Card"}
            </Button>
          </form>
          <aside className="pago__resumen">
            <p className="pago__eyebrow">Order Summary</p>
            {lineas.map(({ producto, cantidad }) => (
              <div className="pago__fila" key={producto.id}>
                <span className="pago__fila-etiqueta">
                  {producto.nombre} × {cantidad}
                </span>
                <span className="pago__fila-valor">
                  {formatearPrecio(producto.precio * cantidad)}
                </span>
              </div>
            ))}
            <div className="pago__fila">
              <span className="pago__fila-etiqueta">Shipping</span>
              <span className="pago__fila-valor">Complimentary</span>
            </div>
            <div className="pago__divisor" />
            <div className="pago__fila pago__fila--total">
              <span className="pago__fila-etiqueta">Total</span>
              <span className="pago__total">{formatearPrecio(total)}</span>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Checkout
