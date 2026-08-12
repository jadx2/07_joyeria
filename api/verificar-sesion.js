import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

function numeroDeOrden(sessionId) {
  const limpio = sessionId.replace(/[^a-zA-Z0-9]/g, "")
  return `BP-${limpio.slice(-6).toUpperCase()}`
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  const sessionId = req.query.session_id

  if (!sessionId) {
    return res.status(400).json({ error: "Falta el identificador de sesión" })
  }

  let sesion
  try {
    sesion = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    })
  } catch {
    return res.status(400).json({ error: "Sesión desconocida" })
  }

  if (sesion.payment_status !== "paid") {
    return res.status(402).json({ error: "El pago no se completó" })
  }

  const lineas = sesion.line_items.data.map((item) => ({
    nombre: item.description,
    cantidad: item.quantity,
    importe: item.amount_total,
  }))

  return res.status(200).json({
    numeroOrden: numeroDeOrden(sesion.id),
    correo: sesion.customer_details?.email ?? sesion.customer_email,
    lineas,
    total: sesion.amount_total,
    correoEnviado: true,
  })
}
