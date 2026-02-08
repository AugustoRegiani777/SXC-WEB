import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import SpotifyPlayer from '../components/SpotifyPlayer.jsx'
import Home from './Home.jsx'
import Platform from './Platform.jsx'
import Spots from './Spots.jsx'
import Contact from './Contact.jsx'
import Showroom from './Showroom.jsx'
import ShowroomDemo from './ShowroomDemo.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="site-bg" aria-hidden="true"></div>  {/* Capa de fondo */}
      <a href="#contenido" className="sr-only focus:not-sr-only bg-frost text-white px-3 py-2 rounded">Saltar al contenido</a>
      <Navbar />
      <main id="contenido" className="flex-1 over-image">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/spots" element={<Spots />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/showroom-demo" element={<ShowroomDemo />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}
