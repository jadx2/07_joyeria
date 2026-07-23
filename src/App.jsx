import Navigation from "./sections/Navigation/Navigation"
import Hero from "./sections/Hero/Hero"
import Marquee from "./sections/Marquee/Marquee"
import Collections from "./sections/Collections/Collections"
import FeaturedPiece from "./sections/FeaturedPiece/FeaturedPiece"
import Craftsmanship from "./sections/Craftsmanship/Craftsmanship"
import Testimonials from "./sections/Testimonials/Testimonials"
import Newsletter from "./sections/Newsletter/Newsletter"
import Footer from "./sections/Footer/Footer"

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Marquee />
        <Collections />
        <FeaturedPiece />
        <Craftsmanship />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

export default App
