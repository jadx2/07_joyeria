import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Navigation from "../sections/Navigation/Navigation"
import Footer from "../sections/Footer/Footer"

const RootLayout = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
