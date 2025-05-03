"use client"

import { useState, useEffect } from "react"
import { X, CalendarIcon, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import CafecitoButton from "@/components/cafecito-button"
import Image from "next/image"

interface Favorito {
  nombre: string
  hipodromo: "Palermo" | "San Isidro"
  carrera: number
  hora: string
  probabilidad: number
  cuota: number
  jinete: string
}

export default function FavoritosDelDiaModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Simular apertura automática después de cargar la página
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
      setIsAnimating(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Datos de ejemplo para los favoritos del día
  const favoritos: Favorito[] = [
    {
      nombre: "Tormenta Negra",
      hipodromo: "Palermo",
      carrera: 3,
      hora: "15:30",
      probabilidad: 78,
      cuota: 2.5,
      jinete: "M. Rodríguez",
    },
    {
      nombre: "Relámpago",
      hipodromo: "San Isidro",
      carrera: 5,
      hora: "16:15",
      probabilidad: 72,
      cuota: 2.7,
      jinete: "F. López",
    },
    {
      nombre: "Veloz Centella",
      hipodromo: "Palermo",
      carrera: 6,
      hora: "17:45",
      probabilidad: 65,
      cuota: 3.1,
      jinete: "J. Pérez",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className={`relative w-full max-w-md mx-4 overflow-hidden rounded-xl bg-background shadow-lg ${isAnimating ? "animate-in slide-in-from-bottom-10 duration-300" : ""}`}
      >
        <div className="bg-gradient-to-r from-primary to-amber-600 px-6 py-4 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="h-6 w-8 relative">
                  <Image src="/images/ganador.jpg" alt="Logo Papiweb" fill className="object-contain" />
                </div>
                <div className="h-6 w-6 relative -ml-1">
                  <Image
                    src="/images/jinete-ganador.jpg"
                    alt="Jinete Ganador"
                    fill
                    className="object-cover rounded-full border-2 border-white"
                  />
                </div>
              </div>
              <h2 className="text-xl font-bold">Favoritos del Día</h2>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/80 mt-1">
            <CalendarIcon className="inline-block h-4 w-4 mr-1" />
            {new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" })}
          </p>
        </div>

        <div className="p-4 max-h-[70vh] overflow-auto bg-pattern">
          <div className="space-y-3">
            {favoritos.map((favorito, index) => (
              <Card key={index} className="overflow-hidden border-2 hover:border-primary/50 transition-all card-hover">
                <CardContent className="p-0">
                  <div
                    className={`px-3 py-1.5 text-xs font-medium text-white ${favorito.hipodromo === "Palermo" ? "bg-rose-600" : "bg-emerald-600"} flex items-center gap-2`}
                  >
                    <div className="w-6 h-6 relative flex-shrink-0">
                      <Image
                        src={favorito.hipodromo === "Palermo" ? "/images/palermo.png" : "/images/sanisidrohipodromooriginal.png"}
                        alt={`Escudo ${favorito.hipodromo}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {favorito.hipodromo} • Carrera {favorito.carrera} • <Clock className="inline-block h-3 w-3" />{" "}
                    {favorito.hora}
                  </div>
                  <div className="p-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 relative">
                          <Image src="/images/ganador.jpg" alt="Caballo ganador" fill className="object-contain" />
                        </div>
                        <span className="font-bold text-lg">{favorito.nombre}</span>
                      </div>
                      <Badge variant="outline" className="text-lg font-bold">
                        {favorito.cuota.toFixed(1)}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Jinete: {favorito.jinete}</span>
                      <span className="font-medium text-foreground">{favorito.probabilidad}% prob.</span>
                    </div>

                    <Progress
                      value={favorito.probabilidad}
                      className="h-2"
                      indicatorClassName={favorito.probabilidad > 70 ? "bg-green-500" : "bg-amber-500"}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <div className="flex gap-2">
              <Button className="w-full shadow-md hover:shadow-lg transition-shadow scale-on-hover" size="lg">
                Ver análisis completo
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsOpen(false)} className="scale-on-hover">
                Cerrar
              </Button>
            </div>
            <div className="flex justify-center mt-2">
              <CafecitoButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
