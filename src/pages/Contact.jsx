import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  function onSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get('nombre')?.toString().trim() || '';
    const apellido = data.get('apellido')?.toString().trim() || '';
    const telefono = data.get('telefono')?.toString().trim() || '';
    const ciudad = data.get('ciudad')?.toString().trim() || '';
    const nacimiento = data.get('nacimiento')?.toString().trim() || '';
    const instagram = data.get('instagram')?.toString().trim() || '';
    const motiva = data.get('motiva')?.toString().trim() || '';

    const subject = encodeURIComponent(`Nueva solicitud — ${nombre} ${apellido}`.trim());
    const body = encodeURIComponent(
      [
        `Nombre: ${nombre}`,
        `Apellido: ${apellido}`,
        `Teléfono: ${telefono}`,
        `Ciudad: ${ciudad}`,
        `Fecha de nacimiento: ${nacimiento}`,
        `Instagram: ${instagram}`,
        '',
        'Motivo:',
        motiva,
      ].join('\n')
    );

    window.location.href = `mailto:regianiaugustovl@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      <header className="mb-8 max-w-3xl">
        <h1 className="font-display text-4xl font-black text-outline-black">Contacto</h1>
        <p className="text-white/80 mt-2">Club de skate SIN EXCUSAS. Escríbenos por clases, sesiones o proyectos.</p>
      </header>
      <form
        onSubmit={onSubmit}
        className="grid md:grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-gradient-to-b from-white/20 to-[#3b2d68]/70 p-6"
      >
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/60 mb-1" htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" className="w-full rounded-2xl bg-primary/90 border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/35 focus:border-neon/70 focus:ring-2 focus:ring-neon/30" required/>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/60 mb-1" htmlFor="apellido">Apellido</label>
          <input id="apellido" name="apellido" className="w-full rounded-2xl bg-primary/90 border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/35 focus:border-neon/70 focus:ring-2 focus:ring-neon/30" required/>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/60 mb-1" htmlFor="telefono">Teléfono</label>
          <input id="telefono" name="telefono" placeholder="+34 600 123 456" className="w-full rounded-2xl bg-primary/90 border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/35 focus:border-neon/70 focus:ring-2 focus:ring-neon/30"/>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-white/60 mb-1" htmlFor="ciudad">Ciudad</label>
          <input id="ciudad" name="ciudad" className="w-full rounded-2xl bg-primary/90 border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/35 focus:border-neon/70 focus:ring-2 focus:ring-neon/30"/>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-widest text-white/60 mb-1" htmlFor="nacimiento">Fecha de nacimiento</label>
          <input id="nacimiento" name="nacimiento" type="date" className="w-full rounded-2xl bg-primary/90 border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/35 focus:border-neon/70 focus:ring-2 focus:ring-neon/30"/>
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-widest text-white/60 mb-1" htmlFor="instagram">Instagram</label>
          <input id="instagram" name="instagram" placeholder="@tu_usuario" className="w-full rounded-2xl bg-primary/90 border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/35 focus:border-neon/70 focus:ring-2 focus:ring-neon/30"/>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs uppercase tracking-widest text-white/60 mb-1" htmlFor="motiva">¿Qué te motiva a unirte?</label>
          <textarea id="motiva" rows="4" className="w-full rounded-2xl bg-primary/90 border border-white/10 px-4 py-2.5 text-white/90 placeholder-white/35 focus:border-neon/70 focus:ring-2 focus:ring-neon/30" placeholder="Contanos un poco..." />
        </div>
        <div className="md:col-span-2 flex items-center justify-between">
          <button className="rounded-2xl bg-primary/90 px-5 py-2.5 font-semibold text-white/90 border border-white/15 hover:border-white/30 hover:text-white transition">Enviar</button>
          <p aria-live="polite" className="text-sm text-white/70">{sent ? "Enviado (demo). Te contactamos pronto." : ""}</p>
        </div>
      </form>
      <p className="text-xs text-white/60 mt-3">* Demo: conecta este formulario a Formspree/Resend/tu backend.</p>
    </section>
  )
}


