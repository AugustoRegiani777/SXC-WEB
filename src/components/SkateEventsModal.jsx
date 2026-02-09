import skateEvents from '../data/skateEvents'

export default function SkateEventsModal({ open, onClose }) {
  if (!open) return null

  const monthNames = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre',
  ]

  const formatDate = (dateStr) => {
    if (!dateStr) return 'TBA'
    if (dateStr.includes('TBA')) return 'TBA'
    const parts = dateStr.split('-')
    if (parts.length !== 3) return dateStr
    const day = parts[2]
    const monthIdx = Number(parts[1]) - 1
    if (!day || Number.isNaN(monthIdx) || !monthNames[monthIdx]) return dateStr
    return `${day} ${monthNames[monthIdx]}`
  }

  const formatDateRange = (range) => {
    if (!range) return null
    const start = formatDate(range.startDate)
    const end = formatDate(range.endDate)
    if (start === 'TBA' && end === 'TBA') return 'TBA'
    if (start === end) return start
    return `${start} – ${end}`
  }

  const parseDate = (dateStr) => {
    if (!dateStr || dateStr.includes('TBA')) return null
    const parts = dateStr.split('-').map(Number)
    if (parts.length !== 3 || parts.some(Number.isNaN)) return null
    const [y, m, d] = parts
    return new Date(y, m - 1, d)
  }

  const isPastEvent = (ev) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const single = parseDate(ev.date)
    if (single) return single < today
    if (ev.dateRange?.endDate) {
      const end = parseDate(ev.dateRange.endDate)
      if (end) return end < today
    }
    return false
  }

  return (
    <div className="fixed inset-0 z-[2200] flex items-start justify-center pt-[calc(var(--header-h)-4.5rem)] animate-in fade-in duration-500">
      <div
        className="absolute left-0 right-0 bottom-0 bg-black/75 backdrop-blur-lg"
        style={{ top: 'var(--header-h)' }}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-[92vw] max-w-3xl max-h-[80vh] overflow-hidden rounded-3xl border border-white/10 bg-black p-5 shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-in zoom-in-95 fade-in duration-500"
      >
        <div className="relative flex items-center justify-center gap-4">
          <div className="flex-1 flex justify-center">
            <h3 className="font-display text-2xl font-black text-white text-center tracking-[0.18em]">
              Skateboarding Fixture 
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-0 h-9 w-9 rounded-full border border-white/20 bg-black/40 text-white/90 hover:text-neon hover:border-neon hover:bg-black/60 transition flex items-center justify-center"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 max-h-[60vh] overflow-auto pr-2 pt-1">
          <ol className="space-y-4 text-sm text-white/90">
            {skateEvents.map((ev, idx) => {
              const flyer = ev.flyerImageUrl
              const dateText = ev.date ? formatDate(ev.date) : formatDateRange(ev.dateRange) ?? 'TBA'
              const primaryLink = ev.officialUrl || ev.instagramUrl
              const CardTag = primaryLink ? 'a' : 'div'
              const cardProps = primaryLink
                ? { href: primaryLink, target: '_blank', rel: 'noreferrer' }
                : {}
              const isPsl = ev.name?.includes('PSL') || ev.name?.includes('Professional Skateboard League')
              const isWof = ev.name?.includes('Wheels of Fortune') || ev.name?.includes('WOF')
              const isPast = isPastEvent(ev)

              return (
                <li key={`${ev.name}-${idx}`}>
                  <div
                    className={`relative rounded-2xl border border-white/10 bg-white/5 p-3 flex flex-col sm:flex-row gap-3 ${
                      isPast ? 'opacity-50 grayscale' : ''
                    }`}
                  >
                    {isPast ? (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
                        <span className="rounded-full bg-black/80 border-2 border-neon px-8 py-2 text-[15px] uppercase tracking-wider text-white shadow-[0_0_18px_rgba(54,18,69,0.9)]">
                          Finalizado
                        </span>
                        {primaryLink ? (
                          <a
                            href={primaryLink}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full border-neon/60 px-5 py-1.5 text-[10px] uppercase tracking-wider text-white hover:text-white hover:border-neon transition bg-neon/100 ]"
                          >
                            Check resume
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                    <div className="sm:w-40 w-full shrink-0">
                      <div className="relative">
                        <CardTag
                          {...cardProps}
                          className="block aspect-[16/9] w-full rounded-xl overflow-hidden bg-white/10 hover:border-neon/60 transition border border-transparent"
                        >
                          {flyer ? (
                            <img
                              src={flyer}
                              alt={`Flyer ${ev.name}`}
                              className={`w-full h-full ${
                                isPsl ? 'object-contain p-2' : isWof ? 'object-cover object-top' : 'object-cover'
                              }`}
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-white/60">
                              Flyer pronto
                            </div>
                          )}
                        </CardTag>
                        {primaryLink ? (
                          <a
                            href={primaryLink}
                            target="_blank"
                            rel="noreferrer"
                            className="absolute right-2 bottom-2 inline-flex items-center justify-center rounded-full border border-white/10 px-3 py-1.5 text-xs uppercase tracking-wider text-white/90 hover:text-neon hover:border-neon transition bg-black/60 backdrop-blur"
                          >
                            +info
                          </a>
                        ) : null}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <CardTag {...cardProps} className="block hover:underline">
                        <div className="font-semibold text-white/95 text-base sm:text-lg">{ev.name}</div>
                      </CardTag>
                      <div className="text-white/75">{ev.location}</div>
                      <div className="text-white/70">{dateText}</div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </div>
  )
}
