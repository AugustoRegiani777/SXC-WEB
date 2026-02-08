// src/components/GalleryModal.jsx
import { useEffect, useRef, useState } from "react";

export default function GalleryModal({ open, images = [], index = 0, onClose }) {
  const [i, setI] = useState(index);
  const startX = useRef(null);

  // cerrar con ESC / navegar con flechas
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") setI((v) => (v - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setI((v) => (v + 1) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length, onClose]);

  useEffect(() => {
    setI(index);
  }, [index, open]);

  const isVideo = (src) => src?.toLowerCase().endsWith(".mp4");
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  const next = () => setI((v) => (v + 1) % images.length);

  // swipe en móvil
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
    startX.current = null;
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[5000] bg-trasparentfixed inset-0 z-[5000] bg-gradient-to-b from-frost/20 via-transparent to-frost/20 flex items-center justify-center p-4fixed inset-0 z-[5000] bg-frost/30 backdrop-blur-md flex items-center justify-center p-4 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Contenedor central (no cerrar si clickean adentro) */}
      <div
        className="relative max-w-[92vw] max-h-[90vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Media */}
        <div className="max-w-full max-h-full">
          {isVideo(images[i]) ? (
            <video
              src={images[i]}
              className="max-w-full max-h-[82vh] object-contain rounded-xl border border-white/20"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img
              src={images[i]}
              alt={`media ${i + 1}`}
              className="max-w-full max-h-[82vh] object-contain rounded-xl border border-white/20 select-none"
              draggable="false"
            />
          )}
        </div>

        {/* Flechas */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-4 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-white text-purple-700
             flex items-center justify-center shadow-md border border-purple-200
             hover:bg-gray-200 hover:text-purple-900 transition                     
                     "
        >
          &lt;
        </button>

        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 rounded-full
                     bg-white text-purple-700 border border-white/20 backdrop-blur-sm
                     flex items-center justify-center hover:bg-frost/85 active:scale-95 transition"
        >
          &gt;
        </button>

        {/* Cerrar */}
<button
  onClick={onClose}
  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white text-purple-700
             flex items-center justify-center shadow-md border border-purple-200
             hover:bg-gray-200 hover:text-purple-900 transition"
>
  X
</button>

      </div>
    </div>
  );
}


