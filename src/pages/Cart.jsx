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
            <h1 className="carrito__vacio-titulo">Your cart is empty</h1>
            <p className="carrito__vacio-texto">
              Nothing here yet. Explore our collections and find a piece worth
              keeping.
            </p>
            <div className="carrito__vacio-accion">
              <Button
                variant="primary"
                onClick={() => navigate("/#collections")}
              >
                Explore Collections
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
        <h1 className="carrito__titulo">Your Cart</h1>
        <div className="carrito__contenido">
          <ul className="carrito__lineas">
            {lineas.map(({ producto, cantidad }) => (
              <li key={producto.id} className="linea">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="linea__imagen"
                />
                <div className="linea__info">
                  <h2 className="linea__nombre">{producto.nombre}</h2>
                  <p className="linea__material">{producto.material}</p>
                  <button
                    className="linea__quitar"
                    onClick={() => quitar(producto.id)}
                  >
                    Remove
                  </button>
                </div>
                <div className="linea__stepper">
                  <button
                    className="linea__paso"
                    onClick={() => cambiarCantidad(producto.id, cantidad - 1)}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="linea__cantidad">{cantidad}</span>
                  <button
                    className="linea__paso"
                    onClick={() => cambiarCantidad(producto.id, cantidad + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <p className="linea__total">
                  {formatearPrecio(producto.precio * cantidad)}
                </p>
              </li>
            ))}
          </ul>
          <aside className="resumen">
            <p className="resumen__titulo">Order Summary</p>
            <div className="resumen__fila">
              <span className="resumen__etiqueta">Subtotal</span>
              <span className="resumen__valor">{formatearPrecio(total)}</span>
            </div>
            <div className="resumen__fila">
              <span className="resumen__etiqueta">Shipping</span>
              <span className="resumen__valor">Complimentary</span>
            </div>
            <div className="resumen__divisor" />
            <div className="resumen__fila resumen__fila--total">
              <span className="resumen__etiqueta">Total</span>
              <span className="resumen__total">{formatearPrecio(total)}</span>
            </div>
            <Button variant="primary" onClick={() => navigate("/checkout")}>
              Checkout
            </Button>
            <Button variant="outline" onClick={() => navigate("/#collections")}>
              Continue Shopping
            </Button>
          </aside>
        </div>
      </Container>
    </section>
  )
}

export default Cart
