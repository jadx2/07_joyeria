import { useNavigate } from "react-router-dom"
import "./Cart.css"
import Container from "../components/Container/Container"
import Button from "../components/Button/Button"
import { useCarrito } from "../context/useCarrito"
import { formatearPrecio } from "../utils/moneda"

const Cart = () => {
  const navigate = useNavigate()
  const { lineas, total, cambiarCantidad, quitar } = useCarrito()

  if (lineas.length === 0) {
    return (
      <section className="carrito">
        <Container>
          <div className="carrito__vacio">
            <h1 className="carrito__vacio-titulo">Tu carrito está vacío</h1>
            <p className="carrito__vacio-texto">
              Aún no hay nada. Explora nuestras colecciones y encuentra una
              pieza que valga la pena.
            </p>
            <div className="carrito__vacio-accion">
              <Button
                variant="primary"
                onClick={() => navigate("/#collections")}
              >
                Explorar colecciones
              </Button>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <section className="carrito">
      <Container>
        <h1 className="carrito__titulo">Tu carrito</h1>
        <div className="carrito__contenido">
          <h2 className="visualmente-oculto">Artículos</h2>
          <ul className="carrito__lineas">
            {lineas.map(({ producto, cantidad }) => (
              <li key={producto.id} className="carrito__linea">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="carrito__linea-imagen"
                />
                <div className="carrito__linea-info">
                  <h3 className="carrito__linea-nombre">{producto.nombre}</h3>
                  <p className="carrito__linea-material">{producto.material}</p>
                  <button
                    className="carrito__linea-quitar"
                    onClick={() => quitar(producto.id)}
                  >
                    Quitar
                  </button>
                </div>
                <div className="carrito__linea-acciones">
                  <div className="carrito__linea-stepper">
                    <button
                      className="carrito__linea-paso"
                      onClick={() => cambiarCantidad(producto.id, cantidad - 1)}
                      aria-label="Disminuir cantidad"
                    >
                      −
                    </button>
                    <span className="carrito__linea-cantidad">{cantidad}</span>
                    <button
                      className="carrito__linea-paso"
                      onClick={() => cambiarCantidad(producto.id, cantidad + 1)}
                      aria-label="Aumentar cantidad"
                    >
                      +
                    </button>
                  </div>
                  <p className="carrito__linea-total">
                    {formatearPrecio(producto.precio * cantidad)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <aside className="carrito__resumen">
            <h2 className="carrito__resumen-titulo">Resumen del pedido</h2>
            <div className="carrito__resumen-fila">
              <span className="carrito__resumen-etiqueta">Subtotal</span>
              <span className="carrito__resumen-valor">{formatearPrecio(total)}</span>
            </div>
            <div className="carrito__resumen-fila">
              <span className="carrito__resumen-etiqueta">Envío</span>
              <span className="carrito__resumen-valor">De cortesía</span>
            </div>
            <div className="carrito__resumen-divisor" />
            <div className="carrito__resumen-fila carrito__resumen-fila--total">
              <span className="carrito__resumen-etiqueta">Total</span>
              <span className="carrito__resumen-total">{formatearPrecio(total)}</span>
            </div>
            <Button variant="primary" onClick={() => navigate("/checkout")}>
              Pagar
            </Button>
            <Button variant="outline" onClick={() => navigate("/#collections")}>
              Seguir comprando
            </Button>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Cart
