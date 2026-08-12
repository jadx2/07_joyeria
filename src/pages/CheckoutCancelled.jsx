import { Link } from "react-router-dom"
import "./CheckoutCancelled.css"
import Container from "../components/Container/Container"
import Button from "../components/Button/Button"

const CheckoutCancelled = () => {
  return (
    <section className="cancelado">
      <Container>
        <p className="cancelado__eyebrow">Checkout</p>
        <h1 className="cancelado__titulo">Payment cancelled</h1>
        <p className="cancelado__texto">
          No charge was made. Your cart is exactly as you left it.
        </p>
        <div className="cancelado__acciones">
          <Link to="/cart">
            <Button variant="primary">Return to Cart</Button>
          </Link>
          <Link to="/">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default CheckoutCancelled
