import "./Hero.css"
import Button from "../../components/Button/Button"
import { slidesHero } from "../../data/slidesHero"
import heroImagen from "../../assets/images/hero-2.jpg"

const slide = slidesHero[1]

const Hero = () => {
  return (
    <section className="hero">
      <img
        src={heroImagen}
        alt="Rose gold necklace and earrings with sapphires, resting on a notebook"
        className="hero__fondo"
      />
      <div className="hero__velo" />
      <div className="hero__contenido">
        <p className="hero__etiqueta">{slide.subtitulo}</p>
        <h1 className="hero__titulo">{slide.titulo}</h1>
        <p className="hero__descripcion">{slide.descripcion}</p>
        <div className="hero__accion">
          <Button variant="light">{slide.cta}</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
