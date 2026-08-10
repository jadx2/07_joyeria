import "./Testimonials.css"
import { LuStar } from "react-icons/lu"
import SectionHeading from "../../components/SectionHeading/SectionHeading"
import { testimonios } from "../../data/testimonios"

const testimonio = testimonios[0]

const Testimonials = () => {
  return (
    <section className="testimonios">
      <div className="testimonios__contenedor">
        <SectionHeading eyebrow="Testimonials" align="center">
          <em>Words from those who wear us</em>
        </SectionHeading>

        <div className="testimonios__item">
          <div className="testimonios__estrellas">
            {Array(testimonio.estrellas)
              .fill(null)
              .map((_, indice) => (
                <LuStar
                  key={indice}
                  size={11}
                  fill="var(--color-primary)"
                  color="var(--color-primary)"
                />
              ))}
          </div>

          <blockquote className="testimonios__cita">
            "{testimonio.cita}"
          </blockquote>

          <p className="testimonios__nombre">{testimonio.nombre}</p>
          <p className="testimonios__rol">{testimonio.rol}</p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
