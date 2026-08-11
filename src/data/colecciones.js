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
    descripcion:
      "Hand-set stones in recycled 18k gold. Each ring is finished in our Lima atelier and takes four weeks to make.",
    piezas: contarPiezas(1),
    imagen: anillos,
    etiqueta: "Bestseller",
  },
  {
    id: 2,
    slug: "necklaces",
    titulo: "Necklaces",
    descripcion:
      "Chains and pendants closed link by link, cut from single stones traded along this coast for generations.",
    piezas: contarPiezas(2),
    imagen: collares,
    etiqueta: "New In",
  },
  {
    id: 3,
    slug: "earrings",
    titulo: "Earrings",
    descripcion:
      "Filigree woven thread by thread in the Catacaos tradition, light enough to forget you are wearing them.",
    piezas: contarPiezas(3),
    imagen: aretes,
    etiqueta: "Limited",
  },
  {
    id: 4,
    slug: "bracelets",
    titulo: "Bracelets",
    descripcion:
      "Cuffs and bangles hammered by hand until the surface holds the light of the Andes.",
    piezas: contarPiezas(4),
    imagen: pulseras,
    etiqueta: "Classic",
  },
]
