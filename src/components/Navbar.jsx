import { Link, NavLink } from 'react-router-dom'
import BrandStripe from './BrandStripe'
import SkateEventsModal from './SkateEventsModal'
import { useLayoutEffect, useRef, useState } from 'react'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/platform', label: 'Platform' },
  { to: '/showroom', label: 'Showroom' },
  { to: '/spots', label: 'Spots' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const headerRef = useRef(null)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)

  useLayoutEffect(() => {
    const setHeaderH = () => {
      const h = headerRef.current?.offsetHeight ?? 0
      document.documentElement.style.setProperty('--header-h', `${h}px`)
    }
    setHeaderH()
    window.addEventListener('resize', setHeaderH)
    return () => window.removeEventListener('resize', setHeaderH)
  }, [])

  return (
    <header
      ref={headerRef}
      className="relative bg-primary/90 backdrop-blur border-b border-white/10 sticky top-0 z-[2000]"
    >
      <Link
        to="/"
        className="hidden sm:inline-flex items-center justify-center absolute left-[64px] md:left-[72px] top-1/2 -translate-y-1/2 z-30"
      >
        <img
          src="/logo-sin-excusas.png"
          alt="Sin Excusas"
          className="h-44 w-44 md:h-[211px] md:w-[211px] object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
          loading="eager"
        />
      </Link>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-center gap-4 sm:grid sm:grid-cols-3 sm:items-center sm:min-h-[120px] sm:py-6">
        <div className="flex items-center justify-center sm:justify-start sm:col-start-1">
          <button
            type="button"
            onClick={() => setIsNavOpen(true)}
            className="sm:hidden rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-wider text-white/80 hover:text-neon hover:border-neon transition"
            aria-label="Abrir menu"
          >
            Menu
          </button>
        </div>

        <div className="flex items-center justify-center sm:hidden">
          <Link to="/" className="inline-flex items-center justify-center relative z-30">
            <img
              src="/logo-sin-excusas.png"
              alt="Sin Excusas"
              className="h-36 w-36 object-contain drop-shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
              loading="eager"
            />
          </Link>
        </div>

        <div className="flex items-center justify-center sm:col-start-3 sm:justify-end sm:translate-y-[25px]">
          <button
            type="button"
            onClick={() => setIsEventsOpen(true)}
            className="rounded-full border border-white/10 px-5 py-2 text-xs sm:text-sm uppercase tracking-wider text-white/90 hover:text-neon hover:border-neon transition duration-1000 ease-out bg-black/30 backdrop-blur sm:leading-none"
          >
            <span className="sm:hidden">Skate<br />Fixture</span>
            <span className="hidden sm:inline">Skateboarding<br />Fixture</span>
          </button>
        </div>

        <nav aria-label="Principal" className="hidden sm:flex justify-center items-center sm:col-start-2 sm:-translate-y-[25px]">
          <ul className="flex items-center gap-6">
            {nav.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `uppercase text-sm sm:leading-none ${isActive ? 'text-neon' : 'text-white/80'} hover:text-neon transition`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`sm:hidden fixed inset-0 z-[2100] transition-opacity duration-300 ${
          isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'transparent' }}
          onClick={() => setIsNavOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute left-0 top-0  w-[45%] max-w-xs border-r border-white/10 p-6 z-10
                      transform transition-transform duration-300 ease-out ${
                        isNavOpen ? 'translate-x-0' : '-translate-x-full'
                      }`}
          style={{ backgroundColor: '#000000' }}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs uppercase tracking-widest text-white/60">Menu</p>
            <button
              type="button"
              onClick={() => setIsNavOpen(false)}
              className="rounded-full border border-white/10 px-2.5 py-1.5 text-white/80 hover:text-neon hover:border-neon transition"
              aria-label="Cerrar"
            >
              X
            </button>
          </div>

          <ul className="mt-6 space-y-3">
            {nav.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsNavOpen(false)}
                  className={({ isActive }) =>
                    `uppercase text-sm ${
                      isActive ? 'text-neon' : 'text-white/80'
                    } hover:text-neon transition`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Cintas */}
      <BrandStripe />
      <SkateEventsModal open={isEventsOpen} onClose={() => setIsEventsOpen(false)} />
    </header>
  )
}
