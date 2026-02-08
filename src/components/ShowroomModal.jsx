export default function ShowroomModal({ item, selectedImage, onSelectImage, onClose }) {
  return (
    <div className="fixed inset-0 z-[3000] flex items-center justify-center px-3 py-4 sm:px-4 sm:py-8">
      <div
        className="absolute inset-0 bg-transparent"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-6xl lg:w-[60%]">
        <div className="relative max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-white/10 bg-transparent backdrop-blur-xl">
          <button
            type="button"
            onClick={onClose}
            className="sticky top-4 mr-4 ml-auto z-10 block rounded-full border border-white/10 px-2.5 py-1.5 text-white/80 hover:text-neon hover:border-neon transition"
            aria-label="Cerrar"
          >
            X
          </button>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-3/5 p-4 sm:p-6">
              <div className="aspect-[4/3] w-full rounded-xl sm:rounded-2xl glass-3-faint border border-white/10 overflow-hidden">
                <img
                  src={selectedImage || item.image}
                  alt={item.name}
                  className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.65)]"
                />
              </div>

              <div className="mt-4 grid grid-cols-4 sm:grid-cols-5 gap-2">
                {(item.gallery || [item.image]).map((src, idx) => (
                  <button
                    key={`${item.id}-thumb-${idx}`}
                    type="button"
                    onClick={() => onSelectImage(src)}
                    className={`aspect-square rounded-lg overflow-hidden border glass-3-faint ${
                      selectedImage === src ? 'border-neon' : 'border-white/10'
                    }`}
                  >
                    <img src={src} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:w-2/5 p-4 sm:p-6 lg:border-l border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-black text-white/95">
                    {item.name}
                  </h3>
                  <p className="text-white/70 text-sm uppercase tracking-widest mt-1">
                    {item.category}
                  </p>
                </div>
              </div>

              <div className="mt-4 text-white/90 text-sm space-y-2">
                {item.tagline ? (
                  <p className="uppercase font-semibold tracking-wide">{item.tagline}</p>
                ) : null}
                {item.description ? (
                  <p className="text-white/70">{item.description}</p>
                ) : null}
                {item.features?.length ? (
                  <ul className="list-disc pl-5 text-white/70 space-y-1">
                    {item.features.map((feature, idx) => (
                      <li key={`${item.id}-feature-${idx}`}>{feature}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="mt-5 flex items-center gap-3">
                <span className="text-neon text-lg font-bold">${item.price}</span>
                {item.isNew ? (
                  <span className="text-[10px] font-bold text-neon border border-neon/60 rounded-full px-2 py-0.5">
                    NEW DROP
                  </span>
                ) : null}
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <div className="flex-1 rounded-xl glass-3-faint border border-white/10 px-3 py-2 text-white/95">
                  <span className="text-white/70">Size:</span>{' '}
                  <span className="font-semibold">
                    {item.size || item.sizes?.[0] || 'One Size'}
                  </span>
                </div>
                <button
                  type="button"
                  className="flex-1 rounded-xl bg-neon/85 text-frost px-4 py-2 font-semibold border-2 border-transparent
                             shadow-neonSoft hover:bg-bordo hover:text-neon hover:border-neon hover:shadow-neonHard transition"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-4 flex items-center gap-4 text-[11px] sm:text-xs uppercase tracking-wider text-white/70">
                <button type="button" className="hover:text-neon transition">
                  Technical Details
                </button>
                <button type="button" className="hover:text-neon transition">
                  Size Chart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

