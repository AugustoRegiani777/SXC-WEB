import React from 'react'

const Row = ({ bgClass, textClass, speed=20 }) => {
  const text = '///SINEXCUSAS///SINEXCUSAS///SINEXCUSAS///SINEXCUSAS///SINEXCUSAS///SINEXCUSAS///--->'
  return (
   <div className={`${bgClass} ${textClass} w-full overflow-hidden h-6`}>
  <div
    className="whitespace-nowrap animate-marquee font-display font-black tracking-widest text-[19px] leading-none"
    style={{ animationDuration: `${speed}s`, lineHeight: "1" }}
  >
    {Array.from({ length: 8 }).map((_, i) => (
      <span key={i} className="mx-4">{text}</span>
    ))}
  </div>
</div>    
  )
}

export default function BrandStripe() {
  return (
    <div className="w-full relative z-0">
      <Row bgClass="bg-neon" textClass="text-frost" speed={50} />
      <Row bgClass="bg-transparent" textClass="text-white" speed={60} />
      <Row bgClass="bg-bordo" textClass="text-neon" speed={38} />
    </div>
  )
}

