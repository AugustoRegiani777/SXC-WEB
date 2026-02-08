import MapSpots from '../components/MapSpots.jsx'
import { SPOTS } from '../data/spots.js'

/* Tarjeta de spot con fondo gradiente/vidrio */
function SpotCard({ title, desc, href, photo, category }) {
  return (
    <article className="rounded-2xl border border-white/10 card-glass overflow-hidden hover:border-neon/60 transition">
      {/* Imagen con velo para contraste */}
      <div className="h-44 relative">
        <img
          src={photo}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null
            e.currentTarget.src = '/logo-sin-excusas.png'
            e.currentTarget.className = 'w-full h-full object-contain p-4'
          }}
        />
        <div className="absolute inset-0 bg-frost/20" />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-xl font-black text-white/95">{title}</h3>
          <span className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/85 bg-frost/20 backdrop-blur-[2px]">
            {category}
          </span>
        </div>

        <p className="text-white/85 mt-1 text-sm">{desc}</p>

        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-2 rounded-xl px-3 py-1 text-sm
                     bg-neon/90 text-frost font-semibold border border-frost
                     hover:bg-bordo hover:text-neon hover:border-neon
                     transition btn-neo"
        >
          Ver en Google Maps
        </a>
      </div>
    </article>
  )
}

export default function Spots() {
  const spots = SPOTS

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Encabezado */}
      <header className="mb-6">
        <h1 className="font-display text-4xl font-black text-outline-black">Spots</h1>
        <p className="mt-2 readable-blur">
          Guía rápida para patinar por Mallorca. Respeta el spot y a la gente local.
        </p>
      </header>

      {/* Mapa con marco "vidrio" */}
      <div className="mb-8">
        <MapSpots spots={spots} height="60vh" />
      </div>

      {/* Grilla de SpotCards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {spots?.map((spot) => (
          <SpotCard key={spot.title} {...spot} />
        ))}
      </div>
    </section>
  )
}

