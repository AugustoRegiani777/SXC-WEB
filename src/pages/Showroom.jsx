import { Link } from 'react-router-dom'

export default function Showroom() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <div className="rounded-3xl border border-white/10 glass-3 p-8 md:p-10 text-center shadow-[0_14px_50px_rgba(0,0,0,0.35)]">
        <h2 className="font-display text-2xl md:text-3xl font-black tracking-[0.2em] text-white">
          PROXIMAMENTE
        </h2>
        <p className="mt-4 text-white/80">
          Estamos armando la base de datos y cargando productos. Muy pronto vas a poder explorar el showroom completo.
        </p>
        <div className="mt-8">
          <Link
            to="/showroom-demo"
            className="inline-flex items-center justify-center rounded-2xl bg-neon/85 text-frost px-6 py-3 font-semibold border-2 border-transparent shadow-neonSoft hover:bg-bordo hover:text-neon hover:border-neon hover:shadow-neonHard transition"
          >
            MIRAR DEMO
          </Link>
        </div>
      </div>
    </section>
  )
}

/*
import { useMemo, useState } from 'react'
import ShowroomModal from '../components/ShowroomModal'
import { showroomCategories, showroomItems } from '../data/showroomData'
import SafeImage from '../components/SafeImage'

export default function Showroom() {
  const [active, setActive] = useState('all')
  const [selected, setSelected] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const filtered = useMemo(() => {
    if (active === 'all') return showroomItems
    if (active === 'new') return showroomItems.filter(i => i.isNew)
    return showroomItems.filter(i => i.category === active)
  }, [active])

  const openItem = item => {
    setSelected(item)
    setSelectedImage(item.gallery?.[0] || item.image)
  }

  const closeItem = () => {
    setSelected(null)
    setSelectedImage(null)
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="rounded-3xl border border-white/10 glass-3 p-6 md:p-8 shadow-[0_14px_50px_rgba(0,0,0,0.35)]">
        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-60">
            <div className="rounded-2xl border border-white/10 glass-3 p-4">
              <h2 className="font-display text-2xl font-black tracking-[0.2em] text-white mb-3">
                SHOWROOM
              </h2>
              <ul className="space-y-1 text-sm uppercase font-semibold text-center sm:text-left">
                {showroomCategories.map(cat => {
                  const isActive = active === cat.key
                  return (
                    <li key={cat.key}>
                      <button
                        type="button"
                        onClick={() => setActive(cat.key)}
                        className={`w-full text-left transition ${
                          isActive ? 'text-neon' : 'text-white/80 hover:text-neon'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </aside>

          <div className="flex-1">
            <div className="rounded-2xl bg-transparent p-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filtered.map(item => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => openItem(item)}
                    className="rounded-2xl bg-black/20 p-2 text-left shadow-[0_10px_26px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.35)] transition"
                  >
                    <div className="aspect-square w-full rounded-xl overflow-hidden">
                      <SafeImage
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.55)]"
                        loading="lazy"
                        fallbackClassName="w-full h-full object-contain p-4"
                      />
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-white/90">
                        {item.name}
                      </h3>
                      {item.isNew ? (
                        <span className="text-[10px] font-bold text-neon">NEW</span>
                      ) : null}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {selected ? (
        <ShowroomModal
          item={selected}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
          onClose={closeItem}
        />
      ) : null}
    </section>
  )
}
*/
