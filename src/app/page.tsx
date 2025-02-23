import Header from "./components/Header"
import Navigation from "./components/Navigation"
import About from "./components/About"
import Paintings from "./components/Paintings"
import Exhibitions from "./components/Exhibitions"
import Workshops from "./components/Workshops"
import Footer from "./components/Footer"
import Hero from "./components/Hero"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <Hero/>
      <About />
      <Paintings />
      <Exhibitions />
      <Workshops />
      <Footer />
    </main>
  )
}

