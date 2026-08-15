import { describe, it, expect } from "vitest"
import { enlacesFooter } from "./enlacesFooter"

describe("enlacesFooter", () => {
  it("no deja ningún destino como placeholder '#'", () => {
    for (const columna of enlacesFooter) {
      for (const enlace of columna.enlaces) {
        expect(enlace.destino).not.toBe("#")
        expect(enlace.destino).not.toBe("")
      }
    }
  })

  it("cada destino es una ruta de colección o un ancla de la home", () => {
    const rutas = enlacesFooter.flatMap((c) => c.enlaces.map((e) => e.destino))

    for (const ruta of rutas) {
      const esColeccion = /^\/collections\/\d+$/.test(ruta)
      const esAncla = /^\/#(collections|craftsmanship)$/.test(ruta)
      expect(esColeccion || esAncla).toBe(true)
    }
  })

  it("la columna Tienda apunta a los ids reales de colecciones", () => {
    const tienda = enlacesFooter.find((c) => c.titulo === "Tienda")
    const destinos = tienda.enlaces.map((e) => e.destino)

    expect(destinos).toEqual([
      "/collections/1",
      "/collections/2",
      "/collections/3",
      "/collections/4",
    ])
  })

  it("la columna Maison solo conserva Artesanía apuntando al ancla", () => {
    const maison = enlacesFooter.find((c) => c.titulo === "Maison")

    expect(maison.enlaces).toEqual([
      { texto: "Artesanía", destino: "/#craftsmanship" },
    ])
  })
})
