"use client"

import { Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef } from "react"

export default function CafecitoButton() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleClick = () => {
    // Reproducir el sonido de agradecimiento
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Reiniciar el audio si ya estaba reproduciéndose
      audioRef.current.play()
    }
  }

  return (
    <>
      {/* Audio oculto para reproducir el sonido de agradecimiento */}
      <audio ref={audioRef} src="/audio/thank-you-168416.mp3" preload="auto" />

      <Link
        href="https://link.mercadopago.com.ar/papiweb"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
      >
        <Button
          variant="outline"
          size="sm"
          className="cafecito-button flex items-center gap-2 bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100 hover:text-amber-900 hover:border-amber-400 transition-all scale-on-hover"
        >
          <Coffee className="h-4 w-4" />
          <span>Invitame un cafecito</span>
        </Button>
      </Link>
    </>
  )
}
