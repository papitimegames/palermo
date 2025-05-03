"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.3

    return () => {
      audio.pause()
    }
  }, [])

  const toggleSound = () => {
    const audio = audioRef.current
    if (!audio) return

    if (!isPlaying) {
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "h-10 w-10 rounded-full bg-background/95 backdrop-blur border-2 shadow-lg hover:bg-primary/10 transition-all duration-300",
          isPlaying && "border-primary text-primary music-button-pulse"
        )}
        onClick={toggleSound}
      >
        {isPlaying ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </Button>
      <audio ref={audioRef} src="/sonidos/PorUnaCabeza.mp3" loop></audio>
    </div>
  )
}
