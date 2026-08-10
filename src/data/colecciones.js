import { productos } from "./productos.js"
import anillos from "../assets/images/coleccion-anillos.jpg"
import collares from "../assets/images/coleccion-collares.jpg"
import aretes from "../assets/images/coleccion-aretes.jpg"
import pulseras from "../assets/images/coleccion-pulseras.jpg"

function contarPiezas(coleccionId) {
  const piezas = productos.filter(
    (producto) => producto.coleccionId === coleccionId,
  )
  return `${piezas.length} pieces`
}

export const colecciones = [
  {
    id: 1,
    slug: "rings",
    titulo: "Rings",
    piezas: contarPiezas(1),
    imagen: anillos,
    etiqueta: "Bestseller",
  },
  {
    id: 2,
    slug: "necklaces",
    titulo: "Necklaces",
    piezas: contarPiezas(2),
    imagen: collares,
    etiqueta: "New In",
  },
  {
    id: 3,
    slug: "earrings",
    titulo: "Earrings",
    piezas: contarPiezas(3),
    imagen: aretes,
    etiqueta: "Limited",
  },
  {
    id: 4,
    slug: "bracelets",
    titulo: "Bracelets",
    piezas: contarPiezas(4),
    imagen: pulseras,
    etiqueta: "Classic",
  },
]
