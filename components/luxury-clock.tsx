"use client"

import { useEffect, useState } from "react"

export function LuxuryClock() {
  const [time, setTime] = useState<Date>(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = time.getHours()
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5
  const minuteDegrees = minutes * 6
  const secondDegrees = seconds * 6

  return (
    <div className="relative w-16 h-16 rounded-full border-4 border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-shadow duration-300">
      {/* Diamantes decorativos */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,1)] animate-twinkle"
          style={{
            left: `${50 + 42 * Math.cos(((i * 30) - 90) * Math.PI / 180)}%`,
            top: `${50 + 42 * Math.sin(((i * 30) - 90) * Math.PI / 180)}%`,
            '--twinkle-delay': `${i * 0.2}s`,
            animation: 'twinkle 3s infinite',
            background: 'linear-gradient(135deg, #fff 20%, #e2e8f0 50%, #fff 80%)',
          } as React.CSSProperties}
        />
      ))}

      {/* Centro del reloj */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_5px_rgba(37,99,235,0.5)] z-20" />
      </div>

      {/* Manecillas del reloj */}
      <div
        className="absolute w-1 h-4 bg-blue-800 rounded-full origin-bottom left-1/2 -translate-x-1/2 bottom-1/2 shadow-sm"
        style={{ transform: `rotate(${hourDegrees}deg)` }}
      />
      <div
        className="absolute w-0.5 h-5 bg-blue-700 rounded-full origin-bottom left-1/2 -translate-x-1/2 bottom-1/2 shadow-sm"
        style={{ transform: `rotate(${minuteDegrees}deg)` }}
      />
      <div
        className="absolute w-px h-6 bg-blue-500 rounded-full origin-bottom left-1/2 -translate-x-1/2 bottom-1/2 shadow-sm"
        style={{ transform: `rotate(${secondDegrees}deg)` }}
      />

      {/* Anillo exterior decorativo */}
      <div className="absolute -inset-1 rounded-full border border-blue-300/50 bg-gradient-to-r from-blue-300/10 to-blue-400/10" />
    </div>
  )
}