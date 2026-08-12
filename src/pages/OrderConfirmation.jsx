import { useEffect, useRef, useState } from "react"
import { Link, Navigate, useSearchParams } from "react-router-dom"
import "./OrderConfirmation.css"
import Container from "../components/Container/Container"
import Button from "../components/Button/Button"
import { useCarrito } from "../context/useCarrito"
import { formatearPrecio } from "../utils/moneda"

const OrderConfirmation = () => {
  const [params] = useSearchParams()
  const sessionId = params.get("session_id")
  const { vaciar } = useCarrito()
  const [estado, setEstado] = useState("cargando")
  const [orden, setOrden] = useState(null)
  const yaVaciado = useRef(false)

  useEffect(() => {
    if (!sessionId) {
      return
    }
    let activo = true
    async function verificar() {
      try {
        const respuesta = await fetch(
          `/api/verificar-sesion?session_id=${encodeURIComponent(sessionId)}`,
        )
        if (!respuesta.ok) {
          throw new Error("verification failed")
        }
        const datos = await respuesta.json()
        if (!activo) {
          return
        }
        setOrden(datos)
        setEstado("ok")
        if (!yaVaciado.current) {
          yaVaciado.current = true
          vaciar()
        }
      } catch {
        if (activo) {
          setEstado("error")
        }
      }
    }
    verificar()
    return () => {
      activo = false
    }
  }, [sessionId, vaciar])

  if (!sessionId) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="confirmacion">
      <Container>
        {estado === "cargando" && (
          <p className="confirmacion__cargando">Confirming your order…</p>
        )}

        {estado === "error" && (
          <div className="confirmacion__aviso">
            <h1 className="confirmacion__titulo">
              We could not confirm your order
            </h1>
            <p className="confirmacion__error">
              We could not verify this payment. If you were charged, contact us
              with your order details.
            </p>
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        )}

        {estado === "ok" && orden && (
          <div className="confirmacion__contenido">
            <span className="confirmacion__ornamento" aria-hidden="true">
              ✓
            </span>
            <h1 className="confirmacion__titulo">Thank you for your order</h1>
            <p className="confirmacion__orden">Order {orden.numeroOrden}</p>
            {orden.correoEnviado ? (
              <p className="confirmacion__correo">
                A confirmation email is on its way to {orden.correo}
              </p>
            ) : (
              <p className="confirmacion__correo confirmacion__correo--fallido">
                Your order is confirmed, but we could not send the confirmation
                email. Keep your order number.
              </p>
            )}
            <div className="confirmacion__resumen">
              {orden.lineas.map((linea) => (
                <div className="confirmacion__fila" key={linea.nombre}>
                  <span className="confirmacion__fila-etiqueta">
                    {linea.nombre} × {linea.cantidad}
                  </span>
                  <span className="confirmacion__fila-valor">
                    {formatearPrecio(linea.importe)}
                  </span>
                </div>
              ))}
              <div className="confirmacion__divisor" />
              <div className="confirmacion__fila confirmacion__fila--total">
                <span className="confirmacion__fila-etiqueta">Total</span>
                <span className="confirmacion__total">
                  {formatearPrecio(orden.total)}
                </span>
              </div>
            </div>
            <Link to="/">
              <Button variant="outline">Back to Home</Button>
            </Link>
          </div>
        )}
      </Container>
    </section>
  )
}

export default OrderConfirmation
