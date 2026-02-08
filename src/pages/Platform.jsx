import { useState } from 'react'
import GalleryModal from '../components/GalleryModal'
import SafeImage from '../components/SafeImage'

const SECTIONS = [
  {
    title: 'Showroom',
    images: [
      '/imagenes/showroom1.jpeg',
      '/imagenes/showroom2.jpeg',
      '/imagenes/showroom3.jpeg',
      '/imagenes/showroom4.jpeg',
      '/imagenes/showroom5.jpeg',
      '/imagenes/showroom6.jpeg',
      '/imagenes/showroom7.jpeg',
      '/imagenes/showroom8.jpeg',
      '/imagenes/showroom9.jpeg',
      '/imagenes/showroom10.jpeg',
    ],
  },
  {
    title: 'Entrenamiento/Rehabilitacion',
    images: [
      '/imagenes/gym1.jpeg',
      '/imagenes/gym2.jpeg',
      '/imagenes/gym3.jpeg',
      '/imagenes/gym4.jpeg',
      '/imagenes/gym5.jpeg',
      '/imagenes/gym6.jpeg',
    ],
  },
  {
    title: 'Estudio',
    images: [
      '/imagenes/estudio1.jpeg',
      '/imagenes/estudio2.jpeg',
      '/imagenes/estudio3.jpeg',
      '/imagenes/estudio4.jpeg',
      '/imagenes/estudio5.jpeg',
      '/imagenes/estudio6.jpeg',
    ],
  },
  {
    title: 'Board Collection',
    images: [
      '/imagenes/diseño1.jpeg',
      '/imagenes/diseño2.jpeg',
      '/imagenes/diseño4.jpeg',
      '/imagenes/diseño5.jpeg',
      '/imagenes/diseño4.mp4',
      '/imagenes/pingpong4.jpeg',
      '/imagenes/pingpong5.jpeg',
    ],
  },
  {
    title: 'Chill zone',
    images: [
      '/imagenes/pingpong1.jpeg',
      '/imagenes/pingpong2.jpeg',
      '/imagenes/pingpong3.jpeg',
      '/imagenes/pingpong4.jpeg',
      '/imagenes/pingpong5.jpeg',
    ],
  },
  // {
  //   title: 'Crew patinando',
  //   images: [
  //     'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1080&auto=format&fit=crop',
  //     'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1080&auto=format&fit=crop',
  //     'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1080&auto=format&fit=crop',
  //   ],
  // },
];

function isVideo(src) {
  return src?.toLowerCase().endsWith('.mp4');
}

export default function Platform() {
  // estado del modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  // para los previews (cada card recuerda su índice actual)
  const [indices, setIndices] = useState(() =>
    SECTIONS.map(() => 0)
  );

  const openGallery = (imgs, startIndex = 0) => {
    setModalImages(imgs);
    setModalIndex(startIndex);
    setModalOpen(true);
  };

  const setCardIndex = (cardIdx, nextIdx) => {
    setIndices((arr) => {
      const copy = arr.slice();
      copy[cardIdx] = nextIdx;
      return copy;
    });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header con video a la izquierda y texto a la derecha */}
      <div className="grid md:grid-cols-[280px,1fr] gap-6 items-center mb-10">
        <div className="aspect-square rounded-full overflow-hidden border border-white/10 card-glass order-2 md:order-1 max-w-[220px] md:max-w-none mx-auto ">
          <video
            className="w-full h-full object-cover"
            src="/video.mp4"
            poster="/bg.jpg"
            autoPlay loop muted playsInline
          />
        </div>
        <div className="order-1 md:order-2">
          <h1 className="font-display text-4xl font-black text-outline-black">PLATFORM</h1>
          <p className="mt-2 readable-blur">
            Somos una plataforma creativa para desarrollar habilidades y patinar. Impulsamos proyectos que van desde sesiones y ediciones de video, diseño de indumentaria, exposiciones, hasta producción musical y streaming. Nuestro objetivo es conectar a la comunidad, generar cultura y abrir un espacio donde cada idea pueda transformarse en algo real.
          </p>
        </div>
      </div>

      {/* Galería 3x2 con previews y flechas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-4">
        {SECTIONS.map((sec, cardIdx) => {
          const i = indices[cardIdx] ?? 0;
          return (
            <article
              key={sec.title}
              className="rounded-2xl border border-white/10 card-glass overflow-hidden hover:border-neon/60 transition"
            >
              <div className="h-48 relative">
                {isVideo(sec.images[i]) ? (
                  <video
                    src={sec.images[i]}
                    className="w-full h-full object-cover"
                    autoPlay muted loop playsInline
                    onClick={() => openGallery(sec.images, i)}
                    title="Abrir galería"
                  />
                ) : (
                  <SafeImage
                    src={sec.images[i]}
                    alt={`${sec.title} ${i + 1}`}
                    className="w-full h-full object-cover cursor-zoom-in select-none"
                    draggable="false"
                    onClick={() => openGallery(sec.images, i)}
                    title="Abrir galería"
                    fallbackClassName="w-full h-full object-contain p-4 cursor-zoom-in select-none"
                  />
                )}

                {/* velo leve por contraste */}
                <div className="absolute inset-0 bg-frost/12 pointer-events-none" />

                {/* Flechas rápidas */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const next = (i - 1 + sec.images.length) % sec.images.length;
                    setCardIndex(cardIdx, next);
                  }}
                  aria-label="Anterior"
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-frost/60 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-frost/80 active:scale-95 transition"
                >
                  &lt;
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const next = (i + 1) % sec.images.length;
                    setCardIndex(cardIdx, next);
                  }}
                  aria-label="Siguiente"
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-9 w-9 rounded-full bg-frost/60 text-white backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-frost/80 active:scale-95 transition"
                >
                  &gt;
                </button>
              </div>

              <div className="p-4 flex items-center justify-between">
                <h3 className="font-display text-xl font-black text-white/95">{sec.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/85 bg-frost/20 backdrop-blur-[2px]">
                  {sec.images.length} fotos
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* Cajas de texto inferiores */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="rounded-2xl border border-white/10 card-glass p-6">
          <h3 className="font-display text-2xl font-black text-white/95">Qué ofrecemos</h3>
          <ul className="mt-2 space-y-1 text-white/85">
            <li>• Producción y edición de video/streaming</li>
            <li>• Pop-ups y showrooms de moda local</li>
            <li>• Estudio de tatuajes colaborativo</li>
            <li>• Desarrollo web y branding</li>
            <li>• Eventos: ping pong, premieres, expos</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 card-glass p-6">
          <h3 className="font-display text-2xl font-black text-white/95">Cómo sumarte</h3>
          <p className="mt-2 text-white/85">
            Escríbenos con tu propuesta: exhibir tu ropa, grabar un clip, montar un torneo o lo que se te ocurra.
            Esto es una plataforma abierta.
          </p>
        </div>
      </div>

      {/* MODAL de galería en grande */}
      <GalleryModal
        open={modalOpen}
        images={modalImages}
        index={modalIndex}
        onClose={() => setModalOpen(false)}
      />
    </section>
  )
}
