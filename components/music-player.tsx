"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface MusicPlayerProps {
  className?: string
}

export default function MusicPlayer({ className }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(70)
  const [isMuted, setIsMuted] = useState(false)
  const [isVolumeVisible, setIsVolumeVisible] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Configurar eventos del audio
    const setAudioData = () => {
      setDuration(audio.duration)
      setCurrentTime(audio.currentTime)
    }

    const setAudioTime = () => {
      setCurrentTime(audio.currentTime)
    }

    // Eventos
    audio.addEventListener("loadeddata", setAudioData)
    audio.addEventListener("timeupdate", setAudioTime)

    // Aplicar volumen inicial
    audio.volume = volume / 100

    return () => {
      audio.removeEventListener("loadeddata", setAudioData)
      audio.removeEventListener("timeupdate", setAudioTime)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume / 100
    }
  }, [volume, isMuted])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (!isPlaying) {
      audio.play()
      setIsPlaying(true)
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audio.pause()
      setIsPlaying(false)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }

  const whilePlaying = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
  }

  const changeRange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const changeVolume = (value: number[]) => {
    setVolume(value[0])
    if (audioRef.current) {
      audioRef.current.volume = value[0] / 100
    }
    if (value[0] === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.volume = !isMuted ? 0 : volume / 100
    }
  }

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60)
      const seconds = Math.floor(time % 60)
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }
    return "0:00"
  }

  return (
    <div
      className={cn(
        "bg-gradient-to-r from-amber-50 to-white border rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-lg",
        className,
      )}
    >
      <audio ref={audioRef} src="/audio/PorUnaCabeza.mp3" preload="metadata"></audio>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "h-10 w-10 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300",
              isPlaying && "music-button-pulse",
            )}
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>

          <div className="flex flex-col">
            <span className="text-sm font-medium">Por Una Cabeza</span>
            <span className="text-xs text-muted-foreground">Tango Clásico</span>
          </div>
        </div>

        <div className="flex-1 flex items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground w-8 text-right">{formatTime(currentTime)}</span>

          <Slider
            value={[currentTime]}
            max={duration || 100}
            step={0.1}
            onValueChange={changeRange}
            className="flex-1"
          />

          <span className="text-xs font-medium text-muted-foreground w-8">{formatTime(duration)}</span>
        </div>

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full hover:bg-primary/10 transition-all duration-300"
            onClick={toggleMute}
            onMouseEnter={() => setIsVolumeVisible(true)}
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>

          {isVolumeVisible && (
            <div
              className="absolute bottom-full right-0 mb-2 bg-background border rounded-lg p-3 shadow-md w-32 fade-in"
              onMouseEnter={() => setIsVolumeVisible(true)}
              onMouseLeave={() => setIsVolumeVisible(false)}
            >
              <Slider value={[volume]} max={100} step={1} onValueChange={changeVolume} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
