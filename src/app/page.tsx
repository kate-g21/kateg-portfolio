import Header from "./components/Header"
import Navigation from "./components/Navigation"
import About from "./components/About"
import Workshops from "./components/Workshops"
import Exhibitions from "./components/Exhibitions"
import Past from "./components/Past"
import Paintings from "./components/Paintings"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Hero/>
      <About />
      <Workshops />
      <Exhibitions />
      <Past/>
      <Paintings />
      <Footer />
    </main>
  )
}

