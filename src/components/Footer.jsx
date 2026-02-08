export default function Footer() {
  return (
    <footer
      className="
        border-t border-white/10 
        glass-3
      "
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/90 font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
        <div>
          <p className="font-display text-xl font-black">
            SIN EXCUSAS
          </p>
          <p className="text-white mt-2 max-w-prose font-semibold drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            Plataforma de skate y cultura urbana en Palma de Mallorca.
          </p>
        </div>

     

        <div className="text-sm">
          <p className="text-white/60 font-semibold uppercase tracking-wide mb-2">Contacto</p>
          <ul className="space-y-1">
            <li>
              <a
                className="hover:underline inline-flex items-center gap-2"
                href="https://maps.app.goo.gl/13CXFMqKZ2B9gtsD7"
                target="_blank"
                rel="noreferrer"
              >
                
                <span> Carrer hostal 18, Palma de Mallorca</span>
              </a>
            </li>
            <li>
              <a
                className="hover:underline inline-flex items-center gap-2"
                href="https://www.instagram.com/sinexcusas.socialclub17/"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">IG</span>
                <span>@sinexcusas.socialclub17</span>
              </a>
            </li>
            <li>
            
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-white/60">
        © {new Date().getFullYear()} SIN EXCUSA.
      </div>
    </footer>
  )
}
