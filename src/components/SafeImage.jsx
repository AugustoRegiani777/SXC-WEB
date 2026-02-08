export default function SafeImage({
  src,
  alt,
  className = '',
  fallback = '/logo-sin-excusas.png',
  fallbackClassName = 'w-full h-full object-contain p-4',
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null
        e.currentTarget.src = fallback
        e.currentTarget.className = fallbackClassName
      }}
      {...props}
    />
  )
}
