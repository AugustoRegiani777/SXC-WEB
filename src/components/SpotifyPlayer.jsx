export default function SpotifyPlayer() {
  return (
    <div className="hidden sm:block fixed bottom-4 left-4 w-72 h-24 z-[5000] bg-frost/70 rounded-lg overflow-hidden shadow-lg">
      <iframe
        style={{ borderRadius: "8px" }}
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

