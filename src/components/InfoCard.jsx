export default function InfoCard({ title, subtitle, children, cta, to, className = '' }) {
  return (
    <article
      className={`rounded-3xl border border-white/10 card-glass
                  p-6 md:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.25)] ${className}`}
    >
      {title && <h3 className="font-display text-2xl font-black text-white/95">{title}</h3>}
      {subtitle && <p className="text-white/85 mt-1">{subtitle}</p>}
      {children && <div className="mt-3 text-white/85">{children}</div>}
      {cta && to && (
        <a
          href={to}
          className="inline-block mt-4 rounded-2xl border border-neon text-neon px-4 py-2 font-semibold
                     hover:bg-neon hover:text-frost transition "
        >
          {cta}
        </a>
      )}
    </article>
  )
}

