import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon2x from "leaflet/dist/images/marker-icon-2x.png";
import icon1x from "leaflet/dist/images/marker-icon.png";
import shadow from "leaflet/dist/images/marker-shadow.png";

/* === Fix de iconos en Vite === */
const DefaultIcon = L.icon({
  iconUrl: icon1x,
  iconRetinaUrl: icon2x,
  shadowUrl: shadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function MapSpots({ spots, height = "60vh", wheelZoom = false }) {
  const mapRef = useRef(null);

  /* Centro fallback (Palma) si no hay spots */
  const center = useMemo(() => {
    if (!spots?.length) return [39.5696, 2.6502];
    const lat = spots.reduce((a, s) => a + s.lat, 0) / spots.length;
    const lng = spots.reduce((a, s) => a + s.lng, 0) / spots.length;
    return [lat, lng];
  }, [spots]);

  /* Fit bounds a todos los spots (mejor UX que un zoom fijo) */
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !spots?.length) return;
    const bounds = L.latLngBounds(spots.map(s => [s.lat, s.lng]));
    // padding para que no queden pegados a los bordes
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [spots]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10">
      {/* Capa “vidrio”: gradiente + leve velado. No bloquea interacciones */}
      <div
        className="pointer-events-none absolute inset-0 z-[5] rounded-2xl"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.06) 14%, rgba(255,255,255,0.10) 28%, rgba(255,255,255,0.12) 42%, rgba(255,255,255,0.09) 56%, rgba(46,35,109,0.18) 74%, rgba(46,35,109,0.30) 100%)",
        }}
      />

      <MapContainer
        center={center}
        zoom={10} // se sobreescribe por fitBounds al montar
        scrollWheelZoom={wheelZoom}
        style={{ width: "100%", height }}
        className="z-[0]"
        whenCreated={(map) => {
          // guardar ref para fitBounds
          mapRef.current = map;
          // asegurar que los tiles debajo sigan clickeables
          setTimeout(() => map.invalidateSize(), 0);
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors &copy; CARTO"
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {spots?.map((spot) => (
          <Marker key={spot.title} position={[spot.lat, spot.lng]}>
            <Popup>
              <div className="min-w-[200px]">
                <h3 className="font-display text-base font-black mb-1">{spot.title}</h3>
                <p className="text-sm text-white/80">{spot.desc}</p>
                <a
                  className="text-neon font-semibold mt-2 inline-block underline hover:text-[#5fb3ff]"
                  href={spot.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
