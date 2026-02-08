import { Link } from 'react-router-dom'
import InfoCard from '../components/InfoCard'

export default function Home() {
  return (
    <div>
      {/* HERO compacto y centrado */}
      <section className="flex flex-col items-center justify-center text-center min-h-[55vh] px-4 py-4">
        {/* Título */}
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-black text-outline-black mb-3 leading-tight">
          SKATE, CULTURE %Street
        </h1>

        {/* Subtítulo */}
        <p className="max-w-2xl text-white/90 mb-3 readable-blur">
          Street, cultura, moda y spots seleccionados en Palma. Respeto a la calle, al barrio, al progreso real.
        </p>

        {/* Botones (apilados, 40% en móvil, centrados) */}
        <div className="flex flex-col items-center gap-3 w-full">
          <Link
            to="/platform"
            className="w-2/5 sm:w-64 inline-flex items-center justify-center rounded-2xl
                       bg-neon/85 text-frost px-5 py-3 font-semibold border-2 border-transparent
                       shadow-neonSoft hover:bg-bordo hover:text-neon hover:border-neon hover:shadow-neonHard
                       transition"
          >
            Platform
          </Link>

          <Link
            to="/spots"
            className="w-2/5 sm:w-64 inline-flex items-center justify-center rounded-2xl
                       bg-neon/85 text-frost px-5 py-3 font-semibold border-2 border-transparent
                       shadow-neonSoft hover:bg-bordo hover:text-neon hover:border-neon hover:shadow-neonHard
                       transition"
          >
            Spots
          </Link>

          <Link
            to="/showroom"
            className="w-2/5 sm:w-64 inline-flex items-center justify-center rounded-2xl
                       bg-neon/85 text-frost px-5 py-3 font-semibold border-2 border-transparent
                       shadow-neonSoft hover:bg-bordo hover:text-neon hover:border-neon hover:shadow-neonHard
                       transition"
          >
            Showroom
          </Link>

          <Link
            to="/contacto"
            className="w-2/5 sm:w-64 inline-flex items-center justify-center rounded-2xl
                       bg-neon/85 text-frost px-5 py-3 font-semibold border-2 border-transparent
                       shadow-neonSoft hover:bg-bordo hover:text-neon hover:border-neon hover:shadow-neonHard
                       transition"
          >
            Unite
          </Link>
        </div>
      </section>

      {/* Sección Misión + Novedades */}
      <section id="mision" className="max-w-7xl mx-auto px-4 pb-4">
        <div className="grid md:grid-cols-2 gap-6">
          <InfoCard
            title="Últimas novedades 👹👹"
          >
            
            <ul className="mt-3 space-y-1 text-white/80">
             <li>• PSL en vivo</li>
              <li>• Reggae session 🇯🇲 — Viernes 18hs</li>
              <li>• Skate afternoon — Miércoles 18hs</li>
              <li>• UFC • PFL • MFL 3 en vivo</li>
              
            </ul>
          </InfoCard>

          <InfoCard title="Misión" subtitle="Mantener viva la escena local creando espacios, comunidad y progreso.">
            <p>Documentamos la calle, compartimos conocimiento y cuidamos cada spot.</p>
            <ul className="mt-1 space-y-1 text-white/80">
              <li>• Cultura de barrio</li>
              <li>• Sesiones filmadas</li>
              <li>• Spots + ética street</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      {/* CTA final con degradé coherente */}
       <section className="max-w-7xl mx-auto px-4 py-4">
        <InfoCard
         
          subtitle="Déjanos tu info, y nos ponemos en contacto para que conozcas el sitio, los eventos y colaboraciones."
          className="bg-gradient-to-b from-frost/70 to-[#2E236D]/50"
        >
          <Link
            to="/contacto"
              className="self-start md:self-auto inline-flex items-center justify-center rounded-2xl
             bg-neon/85 text-frost px-6 py-3 font-semibold border-2 border-transparent
             shadow-neonSoft hover:bg-bordo hover:text-neon hover:border-neon hover:shadow-neonHard transition"
          >
            Contactar
          </Link>
        </InfoCard>
      </section>  
    
    
    </div>
  )
}
